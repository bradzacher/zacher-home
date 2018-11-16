import * as Chart from 'chart.js'

// import data = require('../../build/wakatime.json')

export default function wakatime() {
    const canvas = document.getElementById('wakatime-canvas') as HTMLCanvasElement

    return new Chart(canvas, {
        type: 'pie',
        data: null,
        options: {},
    })
}
