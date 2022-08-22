import path from 'path';

async function main(): Promise<void> {
  const pathArg = process.argv[2];
  if (!pathArg) {
    throw new Error(
      'usage: ts-node scriptExecutor.ts <path to script which export defaults a fn>',
    );
  }

  const scriptPath = pathArg.startsWith('.')
    ? path.resolve(process.cwd(), pathArg)
    : pathArg;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- unable to strictly type dynamic import
  const script: { default: () => Promise<void> } = await import(scriptPath);
  await script.default();
}

void main();
