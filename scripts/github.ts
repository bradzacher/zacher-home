import * as fs from 'fs'
import * as path from 'path'

import 'isomorphic-fetch'
import { JSDOM } from 'jsdom'

import { createBuildFolder, buildPath } from './createBuildFolder'

import GitHubCalendar = require('github-calendar')

const divId = 'github-calendar'

export default async function github() {
    createBuildFolder()

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

    // remove the overview from the DOM entirely.
    // github-calendar just uses CSS to hide it, so there's no point in even shipping it
    dom.window.document.getElementById('user-activity-overview').remove()

    fs.writeFileSync(path.resolve(buildPath, 'github-calendar.html'), res.outerHTML, 'utf8')
}

github().catch((e) => {
    console.error(e)
    process.exit(1)
})
