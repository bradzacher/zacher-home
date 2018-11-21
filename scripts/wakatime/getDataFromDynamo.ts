import { DynamoDB } from 'aws-sdk'

export interface WakatimeDynamoData {
    CacheKey : 'WakatimeStats'
    // The last read date string in the format YYYY/MM/DD
    LastReadEnd : string
    // A map of language name to number of seconds counter for the language
    Seconds : Record<string, number>
}

async function getWakatimeData() {
    const dynamo = new DynamoDB.DocumentClient({
        region: 'ap-southeast-2',
    })

    const item = await dynamo
        .get({
            Key: {
                CacheKey: 'WakatimeStats',
            },
            TableName: 'Zacher.com.au',
        })
        .promise()

    if (!item.Item) {
        console.error(item.$response.error)
        throw new Error('Unable to get stored wakatime data')
    }

    return item.Item as WakatimeDynamoData
}

export default getWakatimeData
