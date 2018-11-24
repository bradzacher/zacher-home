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

    return ReactDOMServer.renderToString(<Page app={appStr} styles={sheets.toString()} />)
}
