import getDataFromDynamo from './getDataFromDynamo'

const THRESHOLD_PERCENTAGE = 0.05

async function generateGraph() {
    const data = await getDataFromDynamo()

    // clean out any languages that are below a %age of the total time
    const totalSeconds = Object.keys(data.Seconds).reduce((acc, k) => acc + data.Seconds[k], 0)
    const secondsThreshold = totalSeconds * THRESHOLD_PERCENTAGE

    const languages = Object.keys(data.Seconds).reduce(
        (acc, k) => {
            if (data.Seconds[k] > secondsThreshold) {
                acc[k] = data.Seconds[k]
            }

            return acc
        },
        {} as Record<string, number>,
    )

    console.log(languages)
    // TODO
}

export default generateGraph
