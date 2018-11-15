import * as fs from 'fs'
import * as path from 'path'

import { createBuildFolder } from './createBuildFolder'
import SSR from './reactSSR'

const buildFolder = createBuildFolder()
const html = SSR()
fs.writeFileSync(path.resolve(buildFolder, 'index.html'), html, 'utf8')
