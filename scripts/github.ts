import * as fs from 'fs'
import * as path from 'path'

import 'isomorphic-fetch'
import { JSDOM } from 'jsdom'

import GitHubCalendar = require('github-calendar')

const divId = 'github-calendar'

export default async function github() {
    // polyfill the browser
    const dom = new JSDOM(`<div id="${divId}"></div>`)
    global.window = dom.window
    global.document = dom.window.document

    await GitHubCalendar(`#${divId}`, 'bradzacher', {
        global_stats: false,
        proxy() {
            return 'https://github.com/bradzacher'
        },
        responsive: true,
    })

    const res = dom.window.document.getElementById(divId)
    console.log(res.outerHTML)
    fs.writeFileSync(path.resolve(__dirname, '../src/html/github-calendar.html'), res.outerHTML, 'utf8')
}
