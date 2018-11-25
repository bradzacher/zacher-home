import * as rimraf from 'rimraf'
import { promisify } from 'util'

const cleanDir = promisify(rimraf)

async function clean() {
    await cleanDir('dist')
    await cleanDir('.cache')
    await cleanDir('build')

    console.info('Cleaned build artefacts')
}

export default clean
