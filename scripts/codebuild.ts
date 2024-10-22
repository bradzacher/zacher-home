import { execSync } from 'child_process';

import clean from './clean';
import copyAssets from './copyAssets';
import deploy from './deploy';
import generate from './generate/generate';

async function main(): Promise<void> {
  // "setup" step
  await clean();

  // "prebuild" step
  await generate();

  // "build" step
  // run it via the command line so it's import is separate from our run
  execSync('yarn build', { stdio: 'inherit' });
  await copyAssets();

  // "postbuild" step
  await deploy();
}

export default main;
