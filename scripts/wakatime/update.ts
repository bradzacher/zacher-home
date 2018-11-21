import getDataFromDynamo from './getDataFromDynamo'
import getNewData from './getNewData'
import putData from './putData'

async function update() {
    // get all the data
    const oldData = await getDataFromDynamo()
    const { data: newData, readEnd } = await getNewData(oldData.LastReadEnd)

    // merge the data together
    Object.keys(newData).forEach((l) => {
        const seconds = oldData.Seconds[l] || 0
        oldData.Seconds[l] = seconds + newData[l]
    })
    oldData.LastReadEnd = readEnd

    // write it back
    await putData(oldData)
}

export default update
