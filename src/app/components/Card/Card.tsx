import classnames from 'classnames';
import React from 'react';

import { createUseThemedStyles } from '../../Theme';

const useStyles = createUseThemedStyles(() => ({
  container: {
    borderRadius: '2px',
    // taken from mdl
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: '2rem',
    overflow: 'hidden',
  },
}));

type Props = React.WithChildren & {
  className?: string;
};

function Card({ className, children }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.container)}>{children}</div>
  );
}

export { Card };
