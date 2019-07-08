import github from './github';
import sprites from './sprites';
import generateGraph from './wakatime/generateGraph';

async function generate(): Promise<void> {
    // "prebuild" step
    // we don't care about the order they run or finish in
    await Promise.all([github(), sprites(), generateGraph()]);
}

export default generate;
