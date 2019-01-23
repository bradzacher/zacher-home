import * as fs from 'fs'
import * as path from 'path'

import { createGeneratedFolder } from '../createBuildFolder'
import getDataFromDynamo from './getDataFromDynamo'

const THRESHOLD_PERCENTAGE = 0.05

async function generateGraph() {
    const data = await getDataFromDynamo()

    // clean out any languages that are below a %age of the total time
    const totalSeconds = Object.keys(data.Seconds).reduce((acc, k) => acc + data.Seconds[k], 0)
    const secondsThreshold = totalSeconds * THRESHOLD_PERCENTAGE

    const languages = Object.keys(data.Seconds).reduce<Record<string, number>>((acc, k) => {
        if (data.Seconds[k] > secondsThreshold) {
            acc[k] = data.Seconds[k]
        }

        return acc
    }, {})

    const totalSecondsAboveThreshold = Object.keys(languages).reduce((acc, k) => acc + languages[k], 0)

    const lines = [
        '/**',
        ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
        ' *     ANY MANUAL CHANGES WILL BE LOST!',
        ' */',
        '',
        'export default [',
        ...Object.keys(languages).map(l =>
            [
                // easier to consume from react as an array
                '    {',
                `        name: '${l}',`,
                `        percent: ${languages[l] / totalSecondsAboveThreshold},`,
                '    },',
            ].join('\n')),
        ']',
        '',
    ]

    const dest = createGeneratedFolder()
    fs.writeFileSync(path.resolve(dest, 'WakatimeData.ts'), lines.join('\n'))

    console.info('Generated new WakatimeData.ts')
}

export default generateGraph
