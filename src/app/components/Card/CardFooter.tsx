import classnames from 'classnames';
import React from 'react';

import { createUseThemedStyles } from '../../Theme';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    backgroundColor: theme.palette.grey,
    display: 'flex',
    fontSize: '3rem',
    fontWeight: 300,
    padding: '2rem',
    flexDirection: 'row' as const,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

type Props = React.WithChildren & {
  className?: string;
};

function CardFooter({ children, className }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.container)}>{children}</div>
  );
}

export { CardFooter };
