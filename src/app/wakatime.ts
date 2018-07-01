import Chart, { ChartData } from 'chart.js'

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
    const canvas = document.getElementById('wakatime-canvas') as HTMLCanvasElement
    const errorDiv = document.getElementById('wakatime-error') as HTMLDivElement

    try {
        // build the wakatime graph
        const response = await fetch('wakatime.php')
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

        return new Chart(canvas, {
            type: 'pie',
            data,
            options: {},
        })
    } catch (_) {
        canvas.style.display = 'none !important'
        errorDiv.style.display = 'block'

        return null
    }
}
