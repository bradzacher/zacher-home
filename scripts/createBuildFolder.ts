import * as fs from 'fs'
import * as path from 'path'

export const buildPath = path.resolve(__dirname, '../build')
export const generatedPath = path.resolve(__dirname, '../src/app/generated')

export function createBuildFolder() {
    try {
        fs.mkdirSync(buildPath)
    } catch (_) {
        // ignored
    }

    return buildPath
}
export function createGeneratedFolder() {
    try {
        fs.mkdirSync(generatedPath)
    } catch (_) {
        // ignored
    }

    return generatedPath
}
