import * as fs from 'fs'
import * as globby from 'globby'
import * as path from 'path'
import * as Spritesmith from 'spritesmith'

import { createGeneratedFolder } from './createBuildFolder'

interface Coordinates {
    x : number
    y : number
    width : number
    height : number
}

const assetFolder = `${path.resolve(__dirname, '../src/sprites/')}/`

// Generate our spritesheet
const images = globby.sync(`${path.resolve(__dirname, '../src/sprites/')}/**/*.png`)

function sprites() {
    const destinationFolder = createGeneratedFolder()
    console.info('Generating spritesheet...')

    return new Promise((resolve, reject) => {
        Spritesmith.run(
            {
                src: images,
                layout: 'left-right',
            },
            (err, result) => {
                if (err) {
                    return reject(err)
                }

                const spritePath = path.resolve(destinationFolder, 'sprites.png')
                fs.writeFileSync(spritePath, result.image)

                // add the coordinates for the social links
                const coordinates : (Coordinates & { name: string })[] = []
                Object.keys(result.coordinates).forEach((k) => {
                    const name = k.replace(assetFolder, '').replace('.png', '')
                    if (name.startsWith('around_the_web')) {
                        return
                    }

                    coordinates.push(
                        Object.assign({}, result.coordinates[k], {
                            name,
                        }),
                    )
                })

                // build the typescript file
                /* eslint-disable no-template-curly-in-string */
                const lines = [
                    '/**',
                    ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
                    ' *     ANY MANUAL CHANGES WILL BE LOST!',
                    ' */',
                    '',
                    'import * as classnames from \'classnames\'',
                    'import * as fs from \'fs\'',
                    'import * as React from \'react\'',
                    'import injectSheet, { WithSheet } from \'react-jss\'',
                    'import { createStyles } from \'../Theme\'',
                    '',
                    'const base64Spritesheet = fs.readFileSync(`${__dirname}/sprites.png`).toString(\'base64\')',
                    '',
                    'const styles = createStyles(() => ({',
                    '    sprite: {',
                    '        backgroundImage: `url(data:image/png;base64,${base64Spritesheet})`,',
                    '        backgroundRepeat: \'no-repeat\',',
                    '        display: \'inline-block\',',
                    '    },',
                    ...coordinates.map(sprite =>
                        [
                            '',
                            `    ${sprite.name}: {`,
                            `        height: '${sprite.height}px',`,
                            `        width: '${sprite.width}px',`,
                            `        backgroundPosition: '${-sprite.x}px ${-sprite.y}px',`,
                            '    },',
                        ].join('\n')),
                    '}))',
                    '',
                    '/* eslint-disable-next-line operator-linebreak */',
                    'type SpriteName =',
                    ...coordinates.map(sprite => `    | '${sprite.name}'`),
                    '',
                    'type Props = WithSheet<typeof styles> & {',
                    '    className ?: string',
                    '    name : SpriteName',
                    '}',
                    '',
                    'const Sprite : React.FunctionComponent<Props> = ({ className, classes, name }) => (',
                    '    <div className={classnames(classes.sprite, classes[name], className)} />',
                    ')',
                    '',
                    'export default injectSheet(styles)(Sprite)',
                    'export {',
                    '    SpriteName,',
                    '}',
                    '',
                ]
                /* eslint-enable no-template-curly-in-string */

                fs.writeFileSync(path.resolve(destinationFolder, 'Sprite.tsx'), lines.join('\n'), 'utf8')
                console.info('Generated new Sprite.tsx')

                return resolve()
            },
        )
    })
}

export default sprites
