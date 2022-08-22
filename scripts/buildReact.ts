import fs from 'fs';
import path from 'path';

import { createBuildFolder } from './createBuildFolder';
import SSR from './reactSSR';

function build(): void {
    const buildFolder = createBuildFolder();
    const html = SSR();
    fs.writeFileSync(path.resolve(buildFolder, 'index.html'), html, 'utf8');

    console.info('Built new index.html');

    const ampHtml = SSR(true);
    fs.writeFileSync(
        path.resolve(buildFolder, 'index.amp.html'),
        ampHtml,
        'utf8',
    );

    console.info('Built new index.amp.html');
}

export default build;
