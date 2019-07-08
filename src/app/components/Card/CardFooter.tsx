import classnames from 'classnames';
import React from 'react';
import injectStylesheet, { WithSheet } from 'react-jss';
import { createStyles } from '../../Theme';

const styles = createStyles(theme => ({
    container: {
        backgroundColor: theme.palette.grey,
        display: 'flex',
        fontSize: '3rem',
        fontWeight: 300,
        padding: '2rem',
        flexDirection: 'row' as 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));
type Props = WithSheet<typeof styles> &
    React.WithChildren & {
        className?: string;
    };
const CardFooter = injectStylesheet(styles)(
    ({ children, className, classes }: Props) => (
        <div className={classnames(className, classes.container)}>
            {children}
        </div>
    ),
);

export { CardFooter };
