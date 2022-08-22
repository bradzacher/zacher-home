import fs from 'fs';
import path from 'path';

const buildPath = path.resolve(__dirname, '../build');
const generatedPath = path.resolve(__dirname, '../src/app/generated');

function createBuildFolder(): string {
  try {
    fs.mkdirSync(buildPath);
  } catch (_) {
    // ignored
  }

  return buildPath;
}
function createGeneratedFolder(): string {
  try {
    fs.mkdirSync(generatedPath);
  } catch (_) {
    // ignored
  }

  return generatedPath;
}

export { buildPath, generatedPath, createBuildFolder, createGeneratedFolder };
