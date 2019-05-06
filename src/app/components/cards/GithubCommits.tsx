import React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { SOCIAL } from '../../config'
import { GithubCalendar } from '../../generated/GithubCalendar'
import { createStyles } from '../../Theme'
import { Card, CardTitle, CardContent } from '../Card'

const styles = createStyles(theme => ({
    container: {
        ...theme.classes.graph,
        height: '15rem',
    },
    link: theme.classes.poweredByLink,
}))

type Props = WithSheet<typeof styles>

const GithubCommits = injectSheet(styles)(({ classes } : Props) => (
    <Card>
        <CardTitle>Github Commits</CardTitle>
        <CardContent>
            <div className={classes.container}>
                <GithubCalendar />
            </div>
            <div className={classes.link}>
                Powered by <a href={SOCIAL.github}>Github</a>
            </div>
        </CardContent>
    </Card>
))

export { GithubCommits }
