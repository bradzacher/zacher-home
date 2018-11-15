import * as React from 'react'

import AppBar from './AppBar'
import Content from './Content'
import Theme from '../Theme'

const App : React.FunctionComponent = () => (
    <Theme>
        <React.Fragment>
            <AppBar />
            <Content />
        </React.Fragment>
    </Theme>
)

export default App
