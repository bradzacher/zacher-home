import classnames from 'classnames';
import React from 'react';
import injectStylesheet, { WithSheet } from 'react-jss';
import { createStyles } from '../../Theme';

const styles = createStyles(theme => ({
    container: {
        fontSize: '1.75rem',
        padding: `${theme.spacing.card.contentPadding}rem`,
    },
}));
type Props = WithSheet<typeof styles> &
    React.WithChildren & {
        className?: string;
        shaded?: boolean;
    };
const CardContent = injectStylesheet(styles)(
    ({ children, className, classes }: Props) => (
        <div className={classnames(className, classes.container)}>
            {children}
        </div>
    ),
);

export { CardContent };
