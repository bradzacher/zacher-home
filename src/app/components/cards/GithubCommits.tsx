import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import GithubCalendar from '../../generated/GithubCalendar'
import { createStyles } from '../../Theme'
import { Card, CardTitle, CardContent } from '../Card'

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
    <Card>
        <CardTitle>Github Commits</CardTitle>
        <CardContent>
            <div className={classes.container}>
                <GithubCalendar />
            </div>
        </CardContent>
    </Card>
)

export default injectSheet(styles)(GithubCommits)
