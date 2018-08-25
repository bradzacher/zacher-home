import * as fs from 'fs'
import * as path from 'path'

import 'isomorphic-fetch'
import { ChartData } from 'chart.js'

import { createBuildFolder, buildPath } from './createBuildFolder'

const wakatimeId = process.argv[2]
if (!wakatimeId) {
    console.error('Missing WAKATIMEID environment variable.')
    process.exit(1)
}
const PAYLOAD_URL = `https://wakatime.com/share/@bradzacher/${wakatimeId}.json`


interface WakatimeResponse {
    data : {
        name : string
        percent : number
    }[]
}
interface Dataset {
    data : number[]
    backgroundColor : string[]
    hoverBackgroundColor : string[]
}

const MAX_RETRIES = 5
const RETRY_WAIT_MS = 2000

export default async function wakatime(retryNumber = 0) {
    createBuildFolder()

    const response = await fetch(PAYLOAD_URL, {
        method: 'GET',
    })
    const json : WakatimeResponse = await response.json()

    if (!json || !json.data) {
        if (retryNumber < MAX_RETRIES) {
            console.error(
                `wakatime is warming up, waiting ${RETRY_WAIT_MS}ms before trying again (attempt #${retryNumber})`,
            )
            setTimeout(() => wakatime(retryNumber + 1), RETRY_WAIT_MS)

            return
        }

        throw new Error('wakatime is probably warming up...')
    }

    const dataset : Dataset = {
        data: [] as number[],
        backgroundColor: [] as string[],
        hoverBackgroundColor: [] as string[],
    }
    const data : ChartData = {
        labels: [],
        datasets: [
            dataset,
        ],
    }

    json.data.forEach((d, i) => {
        if (d.percent < 1) {
            // hide the 1%ers cos theyre too small to see
            return
        }

        // autocalculate colour based on index #RAINBOW
        let hue = (360 * i / json.data.length)
        hue = Math.floor(hue)
        const colour = `hsl(${hue}, 100%, {0})`
        data.labels.push(d.name)
        dataset.data.push(d.percent)
        dataset.backgroundColor.push(colour.replace('{0}', '50%'))
        // get brighter when we hover
        dataset.hoverBackgroundColor.push(colour.replace('{0}', '70%'))
    })

    fs.writeFileSync(
        path.resolve(buildPath, 'wakatime.json'),
        JSON.stringify(data, null, 4),
        'utf8',
    )
}

wakatime().catch((e) => {
    console.error(e)
    process.exit(1)
})
