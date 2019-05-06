import React from 'react'

import { AppBar } from './AppBar'
import { Content } from './Content'
import { Theme } from '../Theme'

const App : React.FunctionComponent = () => (
    <Theme>
        <>
            <AppBar />
            <Content />
        </>
    </Theme>
)

export { App }
