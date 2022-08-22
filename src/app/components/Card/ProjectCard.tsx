import classnames from 'classnames';
import React from 'react';

import type { Project } from '../../config/Project';
import { Sprite } from '../../generated/Sprite';
import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardFooter, CardTitle } from '.';

const useStyles = createUseThemedStyles(() => ({
  container: {
    position: 'relative' as const,
  },
  link: {
    marginLeft: '1rem',
  },
  logo: {
    position: 'absolute' as const,
    top: '1rem',
    right: '1rem',
  },
  title: {
    height: '11rem',
  },
  titleText: {
    maxWidth: 'calc(100% - 8rem)',
  },
}));

type Props = {
  className?: string;
  project: Readonly<Project>;
};

function ProjectCard({ className, project }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Card className={classnames(className, classes.container)}>
      <CardTitle shaded={false} className={classes.title}>
        <div className={classes.titleText}>{project.name}</div>
        {project.spriteName ? (
          <Sprite className={classes.logo} name={project.spriteName} />
        ) : null}
      </CardTitle>
      <CardContent>{project.description}</CardContent>
      <CardFooter>
        {project.source != null ? (
          <a
            className={classes.link}
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            title="Open the project source on Github">
            <Sprite name="githubSmall" />
          </a>
        ) : null}
        {project.demo != null ? (
          <a
            className={classes.link}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="Open a demo of the project">
            <Sprite name="openExternal" />
          </a>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export { ProjectCard };
