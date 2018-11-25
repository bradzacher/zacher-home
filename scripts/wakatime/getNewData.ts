import 'isomorphic-fetch'

import getKey from '../getParameterFromSSM'

interface WakatimeUserSummaryResponse {
    error ?: string
    // there's more, but this is all we need
    data : Array<{
        languages : Array<{
            name : string
            total_seconds : number // eslint-disable-line camelcase
        }>
    }>
}

const API_URL_BASE = 'https://wakatime.com/api/v1/users/current/summaries'

const DATE_STR_FORMAT = 'yyyy/mm/dd'
async function getNewData(lastDateStr : string) {
    // start the day after the last read
    const lastDate = new Date(lastDateStr)
    lastDate.setDate(lastDate.getDate() + 1)
    const rangeStart = lastDate.toISOString().substring(0, DATE_STR_FORMAT.length)

    // finish the day before today
    const now = new Date()
    now.setDate(now.getDate() - 1)
    const rangeEnd = now.toISOString().substring(0, DATE_STR_FORMAT.length)

    if (rangeEnd < rangeStart) {
        console.info('Already have data up to today')

        return null
    }

    console.info('Fetching Wakatime data between', rangeStart, 'and', rangeEnd, '...')

    // fetch the new dataset
    const apiKey = await getKey('WAKATIME_KEY')
    const url = `${API_URL_BASE}?api_key=${apiKey}&start=${rangeStart}&end=${rangeEnd}`

    const rawResponse = await fetch(url, {
        method: 'GET',
    })
    const jsonResponse : WakatimeUserSummaryResponse = await rawResponse.json()

    if (jsonResponse.error) {
        console.error(jsonResponse.error)
        throw new Error('Unable to get Wakatime data')
    }

    // consolidate the data
    const languages = jsonResponse.data[0].languages.reduce(
        (acc, language) => {
            acc[language.name] = language.total_seconds

            return acc
        },
        {} as Record<string, number>,
    )

    console.info('Fetched Wakatime data')

    return {
        data: languages,
        readEnd: rangeEnd,
    }
}

export default getNewData
