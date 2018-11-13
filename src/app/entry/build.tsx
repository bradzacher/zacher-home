import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import Page from '../components/Page'

export default ReactDOMServer.renderToString(<Page />)
