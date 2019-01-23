import build from './buildReact'
import copyAssets from './copyAssets'
import clean from './clean'
import deploy from './deploy'
import generate from './generate'
import updateWakatime from './wakatime/update'

async function main() {
    // "setup" step
    await updateWakatime()
    await clean()

    // "prebuild" step
    await generate()

    // "build" step
    await build()
    await copyAssets()

    // "postbuild" step
    await deploy()
}

export default main
