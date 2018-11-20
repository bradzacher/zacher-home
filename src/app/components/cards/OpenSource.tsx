import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { OPEN_SOURCE } from '../../config'
import { createStyles } from '../../Theme'
import { Card, CardTitle, CardContent } from '../Card'
import ProjectCard from '../ProjectCard'

const styles = createStyles(() => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row' as 'row',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-evenly',
    },
    children: {
        margin: '1rem',
        width: 'calc(50% - 2rem)',
    },
}))

type Props = WithSheet<typeof styles>

const OpenSource : React.FunctionComponent<Props> = ({ classes }) => (
    <Card>
        <CardTitle>Open Source</CardTitle>
        <CardContent>
            <div className={classes.container}>
                {OPEN_SOURCE.map(project => (
                    <ProjectCard key={project.name} className={classes.children} project={project} />
                ))}
            </div>
        </CardContent>
    </Card>
)

export default injectSheet(styles)(OpenSource)
