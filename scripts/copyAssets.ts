import * as cpx from 'cpx';
import path from 'path';
import { promisify } from 'util';

const copy = promisify(cpx.copy);

async function copyAssets(): Promise<void> {
    const src = path.resolve(__dirname, '../src/assets', '**/*');
    const dest = path.resolve(__dirname, '../build');
    await copy(src, dest);

    console.info('Copied assets to build folder');
}

export default copyAssets;
