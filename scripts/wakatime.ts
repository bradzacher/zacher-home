import * as fs from 'fs'
import * as path from 'path'

import 'isomorphic-fetch'
import { ChartData } from 'chart.js'

import { createBuildFolder, buildPath } from './createBuildFolder'

const PAYLOAD_URL = 'https://wakatime.com/share/@bradzacher/6c91698e-66c9-46cf-8aa5-e8742390f1db.json'


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

export default async function wakatime() {
    createBuildFolder()

    const response = await fetch(PAYLOAD_URL, {
        method: 'GET',
    })
    const json : WakatimeResponse = await response.json()

    if (!json || !json.data) {
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

wakatime()
