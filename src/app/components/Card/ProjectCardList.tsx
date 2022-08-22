import React from 'react';

import type { Project } from '../../config/Project';
import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';
import { ProjectCard } from '../Card/ProjectCard';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-evenly',
  },
  children: {
    margin: '1rem',
    width: `${
      theme.spacing.pageWidth / 2 - 2 * theme.spacing.card.contentPadding
    }rem`,
  },
}));

type Props = {
  title: string;
  projects: ReadonlyArray<Project>;
};

function ProjectCardList({ title, projects }: Props): JSX.Element {
  const classes = useStyles();
  return (
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
  );
}

export { ProjectCardList };
