import * as browserSync from 'browser-sync';
import { execSync } from 'child_process';
import * as chokidar from 'chokidar';
import path from 'path';

const scriptsFolder = path.resolve(__dirname);
const srcFolder = path.resolve(__dirname, '..', 'src/app');
const spritesFolder = path.resolve(__dirname, '..', 'src/sprites');

const scriptFileToCommandMap: Record<string, Array<string>> = {
    '/reactSSR.tsx': [],
    '/sprites.ts': ['/sprites.ts'],
    '/github.ts': ['/github.ts'],
};

function createServer(): void {
    const server = browserSync.create('zacher-home-ssr');
    server.init({
        server: path.resolve(__dirname, '..', 'build'),
        ghostMode: false,
        open: false,
    });

    // rebuild and reload on source change
    const srcWatcher = chokidar.watch(srcFolder, {
        ignoreInitial: true,
    });
    function onSourceChange(event: string): (f: string) => void {
        return (filename: string) => {
            console.info(`[src][${event}]:`, filename.replace(srcFolder, ''));
            try {
                // use exec to run the build so it's always the latest code
                execSync(`yarn run-script ${scriptsFolder}/buildReact.ts`);
                server.reload(filename);
            } catch (e) {
                console.error(e.message);
            }
        };
    }
    srcWatcher.on('add', onSourceChange('add'));
    srcWatcher.on('change', onSourceChange('change'));

    // rebuild on script change
    const scriptsWatcher = chokidar.watch(scriptsFolder);
    function onScriptChange(fullFilename: string): void {
        const filename = fullFilename.replace(scriptsFolder, '');
        const scriptsToRun = scriptFileToCommandMap[filename];
        if (!scriptsToRun) {
            return;
        }

        console.info('[script][changed]:', filename);
        try {
            // use exec to run the scripts one by one
            scriptsToRun.forEach(script => execSync(`yarn run-script ${scriptsFolder + script}`));
            // finally, run a fresh build
            execSync(`yarn run-script ${scriptsFolder}/buildReact.ts`);
            server.reload(filename);
        } catch (e) {
            console.error(e.message);
        }
    }
    scriptsWatcher.on('change', onScriptChange);

    // rebuild on sprite change
    const spritesWatcher = chokidar.watch(spritesFolder);
    function onSpriteChange(fullFilename: string): void {
        const filename = fullFilename.replace(spritesFolder, '');

        console.info('[sprite][changed]:', filename);
        try {
            // use exec to run the build
            execSync(`yarn run-script ${scriptsFolder}/sprites.ts`);
            execSync(`yarn run-script ${scriptsFolder}/buildReact.ts`);
            server.reload(filename);
        } catch (e) {
            console.error(e.message);
        }
    }
    spritesWatcher.on('change', onSpriteChange);
}

export default createServer;
