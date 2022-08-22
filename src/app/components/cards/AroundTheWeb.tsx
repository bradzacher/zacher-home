import React from 'react';

import { SOCIAL } from '../../config';
import { Sprite } from '../../generated/Sprite';
import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';
import { MeLink } from '../MeLink';

const useStyles = createUseThemedStyles(() => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    padding: '2.75rem',
  },
  link: {
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  },
}));

function AroundTheWeb(): JSX.Element {
  const classes = useStyles();
  return (
    <Card>
      <CardTitle>Around the Web</CardTitle>
      <CardContent>
        <div className={classes.container}>
          {Object.keys(SOCIAL).map((key: keyof typeof SOCIAL) => (
            <MeLink
              key={key}
              className={classes.link}
              href={SOCIAL[key]}
              title={`External link to my ${key} profile`}>
              <Sprite name={key} />
            </MeLink>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { AroundTheWeb };
