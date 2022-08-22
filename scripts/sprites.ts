import fs from 'fs';
import * as globby from 'globby';
import path from 'path';
import * as Spritesmith from 'spritesmith';

import { createBuildFolder, createGeneratedFolder } from './createBuildFolder';

interface Coordinates {
    x: number;
    y: number;
    width: number;
    height: number;
}

const assetFolder = `${path.resolve(__dirname, '../src/sprites/')}/`;

function sprites(): Promise<void> {
    const images = globby.sync(
        `${path.resolve(__dirname, '../src/sprites/')}/**/*.png`,
    );

    const spriteImageDestinationFolder = createBuildFolder();
    const spriteCodeDestinationFolder = createGeneratedFolder();
    console.info('Generating spritesheet...');

    return new Promise((resolve, reject) => {
        Spritesmith.run(
            {
                src: images,
                layout: 'left-right',
            },
            (err, result) => {
                if (err) {
                    return reject(err);
                }

                const spritePath = path.resolve(
                    spriteImageDestinationFolder,
                    'sprites.png',
                );
                fs.writeFileSync(spritePath, result.image);

                // add the coordinates for the social links
                const coordinates: Array<Coordinates & { name: string }> = [];
                Object.keys(result.coordinates).forEach(k => {
                    const name = k.replace(assetFolder, '').replace('.png', '');
                    if (name.startsWith('around_the_web')) {
                        return;
                    }

                    coordinates.push(
                        Object.assign({}, result.coordinates[k], {
                            name,
                        }),
                    );
                });

                // fix up any kebab casing to be camel case
                coordinates.forEach(sprite => {
                    sprite.name = sprite.name.replace(/(-\w)/g, m =>
                        m[1].toUpperCase(),
                    );
                });

                // build the typescript file
                const lines = [
                    '/**',
                    ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
                    ' *     ANY MANUAL CHANGES WILL BE LOST!',
                    ' */',
                    '',
                    "import classnames from 'classnames'",
                    "import React from 'react'",
                    "import injectSheet, { WithSheet } from 'react-jss'",
                    "import { createStyles } from '../Theme'",
                    '',
                    'const styles = createStyles(() => ({',
                    '    sprite: {',
                    "        backgroundImage: 'url(sprites.png)',",
                    "        backgroundRepeat: 'no-repeat',",
                    "        display: 'inline-block',",
                    '    },',
                    ...coordinates.map(sprite =>
                        [
                            '',
                            `    ${sprite.name}: {`,
                            `        height: '${sprite.height}px',`,
                            `        width: '${sprite.width}px',`,
                            `        backgroundPosition: '${-sprite.x}px ${-sprite.y}px',`,
                            '    },',
                        ].join('\n'),
                    ),
                    '}))',
                    '',
                    'type SpriteName =',
                    ...coordinates.map(sprite => `    | '${sprite.name}'`),
                    '',
                    'type Props = WithSheet<typeof styles> & {',
                    '    className ?: string',
                    '    name : SpriteName',
                    '}',
                    '',
                    'const Sprite = injectSheet(styles)(({ className, classes, name } : Props) => (',
                    '    <div className={classnames(classes.sprite, classes[name], className)} />',
                    '))',
                    '',
                    'export {',
                    '    Sprite,',
                    '    SpriteName,',
                    '}',
                    '',
                ];

                fs.writeFileSync(
                    path.resolve(spriteCodeDestinationFolder, 'Sprite.tsx'),
                    lines.join('\n'),
                    'utf8',
                );
                console.info('Generated new Sprite.tsx');

                return resolve();
            },
        );
    });
}

export default sprites;
