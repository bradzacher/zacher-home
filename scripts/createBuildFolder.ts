import * as fs from 'fs'
import * as path from 'path'

export const buildPath = path.resolve(__dirname, '../src/build')

export function createBuildFolder() {
    try {
        fs.mkdirSync(buildPath)
    } catch (_) {
        // ignored
    }
}
