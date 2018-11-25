import * as rimraf from 'rimraf'
import { promisify } from 'util'

const cleanDir = promisify(rimraf)

async function clean() {
    await cleanDir('dist')
    await cleanDir('.cache')
    await cleanDir('build')
}

export default clean
