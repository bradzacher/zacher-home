import path from 'path';

async function main(): Promise<void> {
    const pathArg = process.argv[2];
    if (!pathArg) {
        throw new Error('usage: ts-node scriptExecutor.ts <path to script which export defaults a fn>');
    }

    const scriptPath = pathArg.startsWith('.') ? path.resolve(process.cwd(), pathArg) : pathArg;
    const script: { default: () => Promise<void> } = await import(scriptPath);
    await script.default();
}

main();
