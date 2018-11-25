import build from './buildReact'
import copyAssets from './copyAssets'
import clean from './clean'
import deploy from './deploy'
import github from './github'
import sprites from './sprites'
import generateGraph from './wakatime/generateGraph'
import updateWakatime from './wakatime/update'

async function main() {
    // "setup" step
    await updateWakatime()
    await clean()

    // "prebuild" step
    // we don't care about the order they run or finish in
    await Promise.all([github(), sprites(), generateGraph()])

    // "build" step
    await build()
    await copyAssets()

    // "postbuild" step
    await deploy()
}

export default main
