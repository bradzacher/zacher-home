/* eslint-disable strict, camelcase */

declare module 'github-calendar' {
    interface Options {
        summary_text ?: string
        proxy ?: (url : string) => string
        global_stats ?: boolean
        responsive ?: boolean
    }
    function calendar(
        container : string | HTMLElement,
        username : string,
        options : Options,
    ) : Promise<any>

    export = calendar
}
