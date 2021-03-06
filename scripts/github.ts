import fs from 'fs';
import 'isomorphic-fetch';
import { JSDOM } from 'jsdom';
import path from 'path';
import { promisify } from 'util';
import { parseString } from 'xml2js';

import { createGeneratedFolder } from './createBuildFolder';

type Obj = Record<string, string>;
type ParsedSVG = {
    svg: {
        $: Obj;
        g: Array<{
            $: Obj;
            g: Array<{
                $: Obj;
                rect: Array<{
                    $: Obj;
                }>;
            }>;
            text: Array<{
                _: string;
                $: Obj;
            }>;
        }>;
    };
};
const parseStringAsync = promisify<string, ParsedSVG>(parseString);
const VIEW_BOX = '0 0 710 120';

const attributeNameMap: Record<string, string> = {
    'text-anchor': 'textAnchor',
};
function dumpAttributes(obj: { $: Record<string, string> }): string {
    const attrString = Object.keys(obj.$).map(k => {
        if (k === 'class') {
            return `className={classes.${obj.$[k]}}`;
        }

        return `${attributeNameMap[k] || k}='${obj.$[k]}'`;
    });

    return attrString.join(' ');
}
function indent(lines: Array<string>, size: number): Array<string> {
    const spaces = Array(size * 4)
        .fill(' ')
        .join('');

    return lines.map(l => `${spaces}${l}`);
}

async function github(): Promise<void> {
    const outFolder = createGeneratedFolder();
    console.info('Fetching github contributions graph...');

    // fetch the contribution graph
    const response = await fetch('https://github.com/users/bradzacher/contributions', {
        method: 'GET',
    });
    const rawHtml = await response.text();

    // use JSDOM to get the svg element
    // TODO - is it better to do this instead via parsing?
    const dom = new JSDOM(rawHtml);
    const res = dom.window.document.querySelector('svg.js-calendar-graph-svg');

    if (!res) {
        throw new Error('Couldn\'t find svg element in github contributions response');
    }

    const hiddenRegex = /style="display: none;"/;
    const rawSvgStr = res.outerHTML
        .split('\n')
        // remove the hidden text elements
        .filter(l => hiddenRegex.exec(l) == null)
        .join('\n');
    const parsedSvg = await parseStringAsync(rawSvgStr);
    delete parsedSvg.svg.$.class;

    const reactSvg = indent(
        [
            `<svg width='100%' viewBox='${VIEW_BOX}'>`,
            `    <g ${dumpAttributes(parsedSvg.svg.g[0])}>`,
            ...indent(
                parsedSvg.svg.g[0].g.reduce(
                    (acc, g) => {
                        acc.push(
                            `<g ${dumpAttributes(g)}>`,
                            ...indent(g.rect.map(rect => `<rect ${dumpAttributes(rect)} />`), 1),
                            '</g>',
                        );

                        return acc;
                    },
                    [] as Array<string>,
                ),
                2,
            ),
            ...indent(parsedSvg.svg.g[0].text.map(text => `<text ${dumpAttributes(text)}>${text._}</text>`), 2),
            '    </g>',
            '</svg>',
        ],
        1,
    );

    const lines = [
        '/**',
        ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
        ' *     ANY MANUAL CHANGES WILL BE LOST!',
        ' */',
        '/* eslint-disable max-len */// produces a nicer file than generating proper wrapped lines',
        '',
        'import React from \'react\'',
        'import injectSheet, { WithSheet } from \'react-jss\'',
        'import { createStyles } from \'../Theme\'',
        '',
        'const styles = createStyles(theme => {',
        '    const label = {',
        // svg colours the text via fill...
        '        fill: theme.palette.grey,',
        '        fontSize: \'1rem\',',
        '    }',
        '',
        '    return {',
        '        day: {},',
        '        month: {',
        '            ...label,',
        '        },',
        '        wday: {',
        '            ...label,',
        '        },',
        '    }',
        '})',
        '',
        'type Props = WithSheet<typeof styles>',
        '',
        'const GithubCalendar = injectSheet(styles)(({ classes } : Props) => (',
        ...reactSvg,
        '))',
        '',
        'export { GithubCalendar }',
        '',
    ];

    fs.writeFileSync(path.resolve(outFolder, 'GithubCalendar.tsx'), lines.join('\n'), 'utf8');

    console.info('Generated new GithubCalendar.tsx');
}

export default github;
