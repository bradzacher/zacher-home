import { DynamoDB } from 'aws-sdk';

import type { WakatimeDynamoData } from './getDataFromDynamo';

async function putData(data: WakatimeDynamoData): Promise<void> {
  const dynamo = new DynamoDB.DocumentClient({
    region: 'ap-southeast-2',
  });

  const res = await dynamo
    .put({
      // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS API needs caps
      Item: data,
      // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS API needs caps
      TableName: 'Zacher.com.au',
    })
    .promise();

  if (res.$response.error) {
    console.error(res.$response.error);
    throw new Error('Unable to update wakatime data');
  }

  console.info('Updated Wakatime data in DynamoDB');
}

export default putData;
