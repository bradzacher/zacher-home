import * as CleanCss from 'clean-css'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'

import App from '../src/app/components/App'
import Page from '../src/app/components/Page'

function renderToString(appStr : string, styles : string, isAmp : boolean) {
    const fullPageStr = ReactDOMServer.renderToString(<Page app={appStr} styles={styles} isAmp={isAmp} />)

    if (!isAmp) {
        return fullPageStr
    }

    return fullPageStr
        .replace('<html ', '<html ⚡ ')
        .replace(/amp-boilerplate="true"/g, 'amp-boilerplate')
        .replace(/amp-custom="true"/g, 'amp-custom')
        .replace(/<img(.+?)\/>/g, '<amp-img$1></amp-img>')
}

export default function render(isAmp = false) {
    const sheets = new SheetsRegistry()
    const appStr = ReactDOMServer.renderToStaticMarkup(
        <JssProvider registry={sheets}>
            <App />
        </JssProvider>,
    )

    const cssminifier = new CleanCss()
    const styles = cssminifier.minify(sheets.toString()).styles

    const fullPageStr = renderToString(appStr, styles, isAmp)

    console.info('Finished Full Page SSR')

    return ['<!DOCTYPE html>', fullPageStr].join('\n')
}
