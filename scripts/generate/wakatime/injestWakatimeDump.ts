import putData from './putData';

type WakatimeDump = {
  // there's more, but this is all we need
  days: ReadonlyArray<{
    date: string;
    languages: ReadonlyArray<{
      name: string;
      // eslint-disable-next-line @typescript-eslint/naming-convention -- api response
      total_seconds: number;
    }>;
  }>;
};

export default async function main(): Promise<void> {
  if (process.argv.length < 4) {
    throw new Error('expected the path to be passed');
  }

  const jsonDumpPath = process.argv[3];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- weakly typed API
  const rawJson: WakatimeDump = await import(jsonDumpPath);

  const languages: Record<string, number> = {};
  let lastDay = '';
  for (const day of rawJson.days) {
    if (lastDay < day.date) {
      lastDay = day.date;
    }

    for (const language of day.languages) {
      languages[language.name] ??= 0;
      languages[language.name] += language.total_seconds;
    }
  }

  await putData({
    // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS requires upper-case
    CacheKey: 'WakatimeStats',
    // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS requires upper-case
    LastReadEnd: lastDay,
    // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS requires upper-case
    Seconds: languages,
  });
}
