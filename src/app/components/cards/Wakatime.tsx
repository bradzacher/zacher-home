import React from 'react';

import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    ...theme.classes.graph,
    height: '60rem',
  },
  figure: {
    display: 'flex',
    margin: 0,
    maxHeight: '100%',
    width: '100%',
  },
}));

function Wakatime(): JSX.Element {
  const classes = useStyles();

  return (
    <Card>
      <CardTitle>Languages</CardTitle>
      <CardContent>
        <div className={classes.container}>
          <figure className={classes.figure}>
            <embed src="./WakatimeChart.svg" />
          </figure>
        </div>
      </CardContent>
    </Card>
  );
}

export { Wakatime };
