import React from 'react';

import { SOCIAL } from '../../config';
import { GithubCalendar } from '../../generated/GithubCalendar';
import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    ...theme.classes.graph,
    height: '15rem',
  },
  link: theme.classes.poweredByLink,
}));

function GithubCommits(): JSX.Element {
  const classes = useStyles();
  return (
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
  );
}

export { GithubCommits };
