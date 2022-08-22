import classnames from 'classnames';
import React from 'react';

import { createUseThemedStyles } from '../../Theme';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    display: 'flex',
    fontSize: '3rem',
    fontWeight: 300,
    padding: '2rem',
    flexDirection: 'row' as const,
    justifyContent: 'start',
    alignItems: 'flex-end',
  },
  withBackground: {
    backgroundColor: theme.palette.secondary,
  },
}));

type Props = React.WithChildren & {
  className?: string;
  shaded?: boolean;
};

function CardTitle({ children, className, shaded }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classnames(className, classes.container, {
        [classes.withBackground]: shaded !== false,
      })}>
      {children}
    </div>
  );
}

export { CardTitle };
