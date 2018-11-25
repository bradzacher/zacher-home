import * as browserSync from 'browser-sync'
import { execSync } from 'child_process'
import * as chokidar from 'chokidar'
import * as path from 'path'

const scriptsFolder = path.resolve(__dirname)
const srcFolder = path.resolve(__dirname, '..', 'src/app')

function createServer() {
    const server = browserSync.create('zacher-home-ssr')
    server.init({
        server: path.resolve(__dirname, '..', 'build'),
        ghostMode: false,
        open: false,
    })

    // rebuild and reload on source change
    const srcWatcher = chokidar.watch(srcFolder, {
        ignoreInitial: true,
    })
    function onSourceChange(event : string) {
        return (filename : string) => {
            console.info(`[src][${event}]:`, filename.replace(srcFolder, ''))
            try {
                // use exec to run the build so it's always the latest code
                execSync(`yarn ts-node ${scriptsFolder}/buildReact.ts`)
            } catch (e) {
                console.error(e.message)
            }
            server.reload(filename)
        }
    }
    srcWatcher.on('add', onSourceChange('add'))
    srcWatcher.on('change', onSourceChange('change'))

    // rebuild on script change
    const scriptsWatcher = chokidar.watch(scriptsFolder)
    function onScriptChange(fullFfilename : string) {
        const filename = fullFfilename.replace(scriptsFolder, '')
        console.info('[script][changed]:', filename)
        try {
            // use exec to run the script
            execSync(`yarn ts-node --files ${scriptsFolder}/${filename}`)
        } catch (e) {
            console.error(e.message)
        }
    }
    scriptsWatcher.on('change', onScriptChange)
}

export default createServer
