import 'github-calendar/dist/github-calendar-responsive.css'
import GitHubCalendar from 'github-calendar'

// function onResize() {
//     // scale the github calendar based off of the card width
//     const cardWidth = parseFloat(getComputedStyle(document.querySelector('.github-card')).width)

//     // calendar size is 721px + 2em padding
//     const em = parseFloat(getComputedStyle(document.querySelector('#github-calendar')).fontSize) || 16
//     const calendarSize = 721 + 2 * em

//     // calculate the scale
//     const scale = cardWidth / calendarSize

//     // dont super size it!
//     if (scale >= 1) {
//         return
//     }

//     // translation has to *increase* relative to scale
//     const translate = -50 * (1 / scale)

//     // apply the translation
//     const calendarDiv = document.querySelector<HTMLDivElement>('#github-calendar .js-calendar-graph')
//     calendarDiv.style.transform = `translate(${translate}px, 0) scale(${scale}, ${scale})`
// }

export default async function github() {
    // build the github calendar
    await GitHubCalendar('#github-calendar', 'bradzacher', {
        global_stats: false,
        proxy() {
            return 'github.php'
        },
        responsive: true,
    })

    // onResize()

    // for some reason github's calendar doesn't always show the last few day of the period
    // this fixes it by allowing a little extra space to render the svg
    // const width = document.querySelector('#github-calendar svg').attributes.getNamedItem('width')
    // width.value = `${parseFloat(width.value) + 11}px`

    // listen for the resize
    // window.addEventListener('resize', onResize)
}
