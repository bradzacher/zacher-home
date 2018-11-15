import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { createStyles } from '../Theme'
import AboutMe from './cards/AboutMe'
import AroundTheWeb from './cards/AroundTheWeb'

const styles = createStyles(() => ({
    main: {
        margin: 'auto',
        maxWidth: '100rem',
        paddingTop: '2.5rem',
    },
}))

type Props = WithSheet<typeof styles>

const Content : React.FunctionComponent<Props> = ({ classes }) => (
    <main className={classes.main}>
        <AboutMe />
        <AroundTheWeb />
    </main>
)

export default injectSheet(styles)(Content)
