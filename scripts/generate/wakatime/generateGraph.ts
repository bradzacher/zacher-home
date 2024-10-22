import fs from 'fs';
import path from 'node:path';

import { assetsPath } from '../../createBuildFolder';

async function generateGraph(): Promise<void> {
  const response = await fetch(
    'https://wakatime.com/share/@bradzacher/49374896-4333-4a7d-81f6-97e5557bca12.svg',
    {
      method: 'get',
    },
  );
  const rawSvg = await response.text();
  fs.writeFileSync(path.join(assetsPath, 'WakatimeChart.svg'), rawSvg, 'utf8');

  console.info('Generated new WakatimeChart.svg');
}

export default generateGraph;
