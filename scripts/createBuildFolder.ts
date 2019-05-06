import fs from 'fs'
import path from 'path'

export const buildPath = path.resolve(__dirname, '../build')
export const generatedPath = path.resolve(__dirname, '../src/app/generated')

export function createBuildFolder() : string {
    try {
        fs.mkdirSync(buildPath)
    } catch (_) {
        // ignored
    }

    return buildPath
}
export function createGeneratedFolder() : string {
    try {
        fs.mkdirSync(generatedPath)
    } catch (_) {
        // ignored
    }

    return generatedPath
}
