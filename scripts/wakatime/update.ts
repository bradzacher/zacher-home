import getDataFromDynamo from './getDataFromDynamo'
import getNewData from './getNewData'
import putData from './putData'

async function update() {
    // get all the data
    const oldData = await getDataFromDynamo()
    const newDataRes = await getNewData(oldData.LastReadEnd)
    if (!newDataRes) {
        // no new data to update
        return
    }

    const { data: newData, readEnd } = newDataRes

    // merge the data together
    Object.keys(newData).forEach(l => {
        const seconds = oldData.Seconds[l] || 0
        oldData.Seconds[l] = seconds + newData[l]
    })
    oldData.LastReadEnd = readEnd

    // write it back
    await putData(oldData)
}

export default update
