import * as classnames from 'classnames'
import * as React from 'react'
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
type Props = WithSheet<typeof styles> & {
    className ?: string
    shaded ?: boolean
}
const CardTitle : React.FunctionComponent<Props> = ({ children, className, classes, shaded }) => (
    <div
        className={classnames(className, classes.container, {
            [classes.withBackground]: shaded !== false,
        })}
    >
        {children}
    </div>
)

export default injectStylesheet(styles)(CardTitle)
