import * as CleanCss from 'clean-css'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'

import App from '../src/app/components/App'
import Page from '../src/app/components/Page'

export default function render() {
    const sheets = new SheetsRegistry()
    const appStr = ReactDOMServer.renderToStaticMarkup(
        <JssProvider registry={sheets}>
            <App />
        </JssProvider>,
    )

    const cssminifier = new CleanCss()
    const styles = cssminifier.minify(sheets.toString()).styles

    const fullPageStr = ReactDOMServer.renderToString(<Page app={appStr} styles={styles} />)

    console.info('Finished Full Page SSR')

    return fullPageStr
}
