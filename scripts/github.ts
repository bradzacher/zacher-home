import * as fs from 'fs'
import 'isomorphic-fetch'
import { JSDOM } from 'jsdom'
import * as path from 'path'
import { promisify } from 'util'
import { parseString } from 'xml2js'

import { createGeneratedFolder } from './createBuildFolder'

type Obj = Record<string, string>
type ParsedSVG = {
    svg : {
        $ : Obj
        g : Array<{
            $ : Obj
            g : Array<{
                $ : Obj
                rect : Array<{
                    $ : Obj
                }>
            }>
            text : Array<{
                _ : string
                $ : Obj
            }>
        }>
    }
}
const parseStringAsync = promisify(parseString) as (xml : string) => Promise<ParsedSVG>

const attributeNameMap : Record<string, string> = {
    'text-anchor': 'textAnchor',
}
function dumpAttributes(obj : { $: Record<string, string> }) {
    const attrString = Object.keys(obj.$).map((k) => {
        if (k === 'class') {
            return `className={classes.${obj.$[k]}}`
        }

        return `${attributeNameMap[k] || k}='${obj.$[k]}'`
    })

    return attrString.join(' ')
}
function indent(lines : string[], size : number) {
    const spaces = Array(size * 4)
        .fill(' ')
        .join('')

    return lines.map(l => `${spaces}${l}`)
}

async function github() {
    const outFolder = createGeneratedFolder()

    // fetch the contribution graph
    const response = await fetch('https://github.com/users/bradzacher/contributions', {
        method: 'GET',
    })
    const rawHtml = await response.text()

    // use JSDOM to get the svg element
    // TODO - is it better to do this instead via parsing?
    const dom = new JSDOM(rawHtml)
    const res = dom.window.document.querySelector('svg.js-calendar-graph-svg')

    const rawSvgStr = res.outerHTML
        .split('\n')
        // remove the hidden text elements
        .filter(l => l.match(/style="display: none;"/) === null)
        .join('\n')
    const parsedSvg = await parseStringAsync(rawSvgStr)
    delete parsedSvg.svg.$.class

    const reactSvg = indent(
        [
            '<svg width=\'100%\' viewBox=\'0 0 555 90\'>',
            `    <g ${dumpAttributes(parsedSvg.svg.g[0])}>`,
            ...indent(
                parsedSvg.svg.g[0].g.reduce((acc, g) => {
                    acc.push(
                        `<g ${dumpAttributes(g)}>`,
                        ...indent(g.rect.map(rect => `<rect ${dumpAttributes(rect)} />`), 1),
                        '</g>',
                    )

                    return acc
                }, []),
                2,
            ),
            ...indent(parsedSvg.svg.g[0].text.map(text => `<text ${dumpAttributes(text)}>${text._}</text>`), 2),
            '    </g>',
            '</svg>',
        ],
        1,
    )

    const lines = [
        '/**',
        ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
        ' *     ANY MANUAL CHANGES WILL BE LOST!',
        ' */',
        '/* eslint-disable max-len */// produces a nicer file than generating proper wrapped lines',
        '',
        'import * as React from \'react\'',
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
        'const GithubCalendar : React.FunctionComponent<Props> = ({ classes }) => (',
        ...reactSvg,
        ')',
        '',
        'export default injectSheet(styles)(GithubCalendar)',
        '',
    ]

    fs.writeFileSync(path.resolve(outFolder, 'GithubCalendar.tsx'), lines.join('\n'), 'utf8')
}

export default github
