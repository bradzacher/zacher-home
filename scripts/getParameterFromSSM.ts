import { SSM } from 'aws-sdk';

async function getParameterFromSSM(key: string): Promise<string | undefined> {
  const parameterStore = new SSM({
    region: 'ap-southeast-2',
  });

  const parameter = await parameterStore
    .getParameter({
      // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS API needs caps
      Name: `/zacher-com-au/${key}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention -- AWS API needs caps
      WithDecryption: true,
    })
    .promise();

  if (!parameter.Parameter) {
    console.error(parameter.$response.error);
    throw new Error(`Unable to get ${key} from parameter store`);
  }

  console.info('Fetched', key, 'from SSM');

  return parameter.Parameter.Value;
}

export default getParameterFromSSM;
