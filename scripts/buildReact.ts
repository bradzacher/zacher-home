import * as fs from 'fs'
import * as path from 'path'

import { createBuildFolder } from './createBuildFolder'
import SSR from './reactSSR'

function build() {
    const buildFolder = createBuildFolder()
    const html = SSR()
    fs.writeFileSync(path.resolve(buildFolder, 'index.html'), html, 'utf8')

    console.info('Built new index.html')
}

export default build
