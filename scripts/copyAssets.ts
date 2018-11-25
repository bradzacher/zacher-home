import * as cpx from 'cpx'
import * as path from 'path'
import { promisify } from 'util'

const copy = promisify(cpx.copy)

async function copyAssets() {
    const src = path.resolve(__dirname, '../src/assets', '**/*')
    const dest = path.resolve(__dirname, '../build')
    await copy(src, dest)
}

export default copyAssets
