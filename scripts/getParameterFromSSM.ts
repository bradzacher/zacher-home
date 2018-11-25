import { SSM } from 'aws-sdk'

async function getParameterFromSSM(key : string) {
    const parameterStore = new SSM({
        region: 'ap-southeast-2',
    })

    const parameter = await parameterStore
        .getParameter({
            Name: `/zacher-com-au/${key}`,
            WithDecryption: true,
        })
        .promise()

    if (!parameter.Parameter) {
        console.error(parameter.$response.error)
        throw new Error(`Unable to get ${key} from parameter store`)
    }

    console.info('Fetched', key, 'from SSM')

    return parameter.Parameter.Value
}

export default getParameterFromSSM
