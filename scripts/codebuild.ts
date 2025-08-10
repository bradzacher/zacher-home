import { execSync } from 'child_process';
import { hrtime } from 'node:process';

import clean from './clean';
import copyAssets from './copyAssets';
import deploy from './deploy';
import generate from './generate/generate';

async function main(): Promise<void> {
  await time(async () => {
    // "setup" step
    await clean();

    // "prebuild" step
    await generate();

    // "build" step
    // run it via the command line so it's import is separate from our run
    execSync('yarn build', { stdio: 'inherit' });
    await copyAssets();
  });

  await time(async () => {
    // "postbuild" step
    await deploy();
  });
}

async function time(fn: () => Promise<void>): Promise<void> {
  const start = hrtime.bigint();
  await fn();
  const end = hrtime.bigint();
  const duration = end - start;
  console.info(`Time taken: ${duration / BigInt(1000000000)} seconds`);
}

export default main;
