import React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { ProjectCard } from '../Card/ProjectCard'
import { Card, CardTitle, CardContent } from '../Card'
import { Project } from '../../config/Project'
import { createStyles } from '../../Theme'

const styles = createStyles(theme => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row' as 'row',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-evenly',
    },
    children: {
        margin: '1rem',
        width: `${theme.spacing.pageWidth / 2
            - 2 * theme.spacing.card.contentPadding}rem`,
    },
}))

type Props = WithSheet<typeof styles> & {
    title : string
    projects : ReadonlyArray<Project>
}

const ProjectCardList = injectSheet(styles)(
    ({ classes, title, projects } : Props) => (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <div className={classes.container}>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.name}
                            className={classes.children}
                            project={project}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    ),
)

export { ProjectCardList }
