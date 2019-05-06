import classnames from 'classnames'
import React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'
import { createStyles } from '../../Theme'

const styles = createStyles(theme => ({
    container: {
        display: 'flex',
        fontSize: '3rem',
        fontWeight: 300,
        padding: '2rem',
        flexDirection: 'row' as 'row',
        justifyContent: 'start',
        alignItems: 'flex-end',
    },
    withBackground: {
        backgroundColor: theme.palette.secondary,
    },
}))
type Props = WithSheet<typeof styles> &
    React.WithChildren & {
        className ?: string
        shaded ?: boolean
    }
const CardTitle = injectStylesheet(styles)(
    ({ children, className, classes, shaded } : Props) => (
        <div
            className={classnames(className, classes.container, {
                [classes.withBackground]: shaded !== false,
            })}
        >
            {children}
        </div>
    ),
)

export { CardTitle }
