import classnames from 'classnames';
import React from 'react';

import { createUseThemedStyles } from '../../Theme';

const useStyles = createUseThemedStyles(theme => ({
  container: {
    fontSize: '1.75rem',
    padding: `${theme.spacing.card.contentPadding}rem`,
  },
}));
type Props = React.WithChildren & {
  className?: string;
};
function CardContent({ children, className }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.container)}>{children}</div>
  );
}

export { CardContent };
