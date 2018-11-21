import { SSM } from 'aws-sdk'

async function getWakatimeKey() {
    const parameterStore = new SSM({
        region: 'ap-southeast-2',
    })

    const parameter = await parameterStore
        .getParameter({
            Name: '/zacher-com-au/WAKATIME_KEY',
            WithDecryption: true,
        })
        .promise()

    if (!parameter.Parameter) {
        console.error(parameter.$response.error)
        throw new Error('Unable to get WAKATIME_KEY from parameter store')
    }

    return parameter.Parameter.Value
}

export default getWakatimeKey
