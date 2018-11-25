import * as classnames from 'classnames'
import * as React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'

import { Card, CardTitle, CardContent, CardFooter } from '.'
import { OPEN_SOURCE } from '../../config'
import { createStyles } from '../../Theme'
import Sprite from '../../generated/Sprite'

const styles = createStyles(() => ({
    container: {
        position: 'relative' as 'relative',
    },
    link: {
        marginLeft: '1rem',
    },
    logo: {
        position: 'absolute' as 'absolute',
        top: '1rem',
        right: '1rem',
    },
    title: {
        height: '11rem',
    },
    titleText: {
        maxWidth: 'calc(100% - 8rem)',
    },
}))

type Props = {
    className ?: string
    project : typeof OPEN_SOURCE[0]
}

const ProjectCard : React.FunctionComponent<Props & WithSheet<typeof styles>> = ({ className, classes, project }) => (
    <Card className={classnames(className, classes.container)}>
        <CardTitle shaded={false} className={classes.title}>
            <div className={classes.titleText}>{project.name}</div>
            {project.spriteName && <Sprite className={classes.logo} name={project.spriteName} />}
        </CardTitle>
        <CardContent>{project.description}</CardContent>
        <CardFooter>
            {project.source && (
                <a
                    className={classes.link}
                    href={project.source}
                    target='_blank'
                    rel='noopener'
                    title='Open the project source on Github'
                >
                    <Sprite name='open_source' />
                </a>
            )}
            {project.demo && (
                <a
                    className={classes.link}
                    href={project.demo}
                    target='_blank'
                    rel='noopener'
                    title='Open a demo of the project'
                >
                    <Sprite name='open_demo' />
                </a>
            )}
        </CardFooter>
    </Card>
)

export default injectStylesheet(styles)(ProjectCard)
