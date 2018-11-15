import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import GithubCalendar from '../../generated/GithubCalendar'
import { createStyles } from '../../Theme'
import Card from '../Card'

const styles = createStyles(() => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row' as 'row',
        height: '15rem',
        justifyContent: 'center',
    },
    link: {
        marginRight: '0.5rem',
    },
}))

type Props = WithSheet<typeof styles>

const GithubCommits : React.FunctionComponent<Props> = ({ classes }) => (
    <Card
        title='Around the Web'
        content={
            <div className={classes.container}>
                <GithubCalendar />
            </div>
        }
    />
)

export default injectSheet(styles)(GithubCommits)
