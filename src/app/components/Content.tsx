import React from 'react';

import { createUseThemedStyles } from '../Theme';
import { AboutMe } from './cards/AboutMe';
import { AroundTheWeb } from './cards/AroundTheWeb';
import { GithubCommits } from './cards/GithubCommits';
import { OpenSource } from './cards/OpenSource';
import { Projects } from './cards/Projects';
import { Wakatime } from './cards/Wakatime';

const useStyles = createUseThemedStyles(theme => ({
  main: {
    margin: 'auto',
    maxWidth: `${theme.spacing.pageWidth}rem`,
    paddingTop: '2.5rem',
  },
}));

function Content(): JSX.Element {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <AboutMe />
      <AroundTheWeb />
      <Wakatime />
      <GithubCommits />
      <OpenSource />
      <Projects />
    </main>
  );
}

export { Content };
