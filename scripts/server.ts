import * as browserSync from 'browser-sync'
import { execSync } from 'child_process'
import * as chokidar from 'chokidar'
import * as path from 'path'

const server = browserSync.create('zacher-home-ssr')

server.init({
    server: path.resolve(__dirname, '..', 'build'),
    ghostMode: false,
    open: false,
})

const srcFolder = path.resolve(__dirname, '..', 'src')
const watcher = chokidar.watch(srcFolder, {
    ignoreInitial: true,
})
function onSourceChange(event : string) {
    return (filename : string) => {
        console.info(`[${event}]:`, filename.replace(srcFolder, ''))
        try {
            execSync(`yarn ts-node ${__dirname}/build.ts`)
        } catch (e) {
            console.error(e.message)
        }
        server.reload(filename)
    }
}
watcher.on('add', onSourceChange('Add'))
watcher.on('change', onSourceChange('Change'))
