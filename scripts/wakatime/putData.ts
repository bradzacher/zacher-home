import { DynamoDB } from 'aws-sdk'

import { WakatimeDynamoData } from './getDataFromDynamo'

async function putData(data : WakatimeDynamoData) {
    const dynamo = new DynamoDB.DocumentClient({
        region: 'ap-southeast-2',
    })

    const res = await dynamo
        .put({
            Item: data,
            TableName: 'Zacher.com.au',
        })
        .promise()

    if (res.$response.error) {
        console.error(res.$response.error)
        throw new Error('Unable to update wakatime data')
    }

    console.info('Updated Wakatime data in DynamoDB')
}

export default putData
