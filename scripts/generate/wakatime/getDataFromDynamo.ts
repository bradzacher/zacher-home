/* eslint-disable @typescript-eslint/naming-convention -- AWS API needs caps */

import { DynamoDB } from 'aws-sdk';

type WakatimeDynamoData = {
  CacheKey: 'WakatimeStats';
  // The last read date string in the format YYYY/MM/DD
  LastReadEnd: string;
  // A map of language name to number of seconds counter for the language
  Seconds: Record<string, number>;
};

async function getWakatimeData(): Promise<WakatimeDynamoData> {
  const dynamo = new DynamoDB.DocumentClient({
    region: 'ap-southeast-2',
  });

  const item = await dynamo
    .get({
      Key: {
        CacheKey: 'WakatimeStats',
      },
      TableName: 'Zacher.com.au',
    })
    .promise();

  if (!item.Item) {
    console.error(item.$response.error);
    throw new Error('Unable to get stored wakatime data');
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- intentional narrowing based on known structure
  const itemData = item.Item as WakatimeDynamoData;
  console.info('Fetched old Wakatime data updated on', itemData.LastReadEnd);

  return itemData;
}

export default getWakatimeData;
export type { WakatimeDynamoData };
