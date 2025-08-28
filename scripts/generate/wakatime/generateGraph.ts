import fs from 'fs';
import path from 'node:path';
import { setTimeout } from 'node:timers/promises';

import { assetsPath } from '../../createBuildFolder';

async function fetchSvg(): Promise<string> {
  const response = await fetch(
    'https://wakatime.com/share/@bradzacher/49374896-4333-4a7d-81f6-97e5557bca12.svg',
    {
      method: 'get',
    },
  );
  return response.text();
}

const MAX_RETRIES = 5;
async function generateGraph(): Promise<void> {
  let rawSvg;
  for (let i = 0; i < MAX_RETRIES; i += 1) {
    rawSvg = await fetchSvg();
    if (rawSvg.includes('updating in background')) {
      console.info('Wakatime is updating, waiting 5 seconds before retrying');
      await setTimeout(5000);
    } else {
      break;
    }
  }

  fs.writeFileSync(path.join(assetsPath, 'WakatimeChart.svg'), rawSvg, 'utf8');

  console.info('Generated new WakatimeChart.svg');
}

export default generateGraph;
