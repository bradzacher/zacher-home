import 'isomorphic-fetch';

import getKey from '../../getParameterFromSSM';

type WakatimeUserSummaryResponse = {
  error?: string;
  // there's more, but this is all we need
  data: Array<{
    languages: Array<{
      name: string;
      // eslint-disable-next-line @typescript-eslint/naming-convention -- api response
      total_seconds: number;
    }>;
  }>;
};

const API_URL_BASE = 'https://wakatime.com/api/v1/users/current/summaries';

const DATE_STR_FORMAT = 'yyyy/mm/dd';
async function getNewData(lastDateStr: string): Promise<{
  data: Record<string, number>;
  readEnd: string;
} | null> {
  // start the day after the last read
  const lastDate = new Date(lastDateStr);
  lastDate.setDate(lastDate.getDate() + 1);
  const rangeStart = lastDate
    .toISOString()
    .substring(0, DATE_STR_FORMAT.length);

  // finish the day before today
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const rangeEnd = now.toISOString().substring(0, DATE_STR_FORMAT.length);

  if (rangeEnd < rangeStart) {
    console.info('Already have data up to today');

    return null;
  }

  console.info(
    'Fetching Wakatime data between',
    rangeStart,
    'and',
    rangeEnd,
    '...',
  );

  // fetch the new dataset
  const apiKey = await getKey('WAKATIME_KEY');
  if (apiKey == null) {
    throw new Error('Unable to fetch WAKATIME_KEY');
  }
  const url = `${API_URL_BASE}?api_key=${apiKey}&start=${rangeStart}&end=${rangeEnd}`;

  const rawResponse = await fetch(url, {
    method: 'GET',
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- weakly typed API
  const jsonResponse: WakatimeUserSummaryResponse = await rawResponse.json();

  if (jsonResponse.error != null) {
    console.error(jsonResponse.error);
    throw new Error('Unable to get Wakatime data');
  }

  // consolidate the data
  const languages = jsonResponse.data[0].languages.reduce<
    Record<string, number>
  >((acc, language) => {
    acc[language.name] = language.total_seconds;

    return acc;
  }, {});

  console.info('Fetched Wakatime data');

  return {
    data: languages,
    readEnd: rangeEnd,
  };
}

export default getNewData;
