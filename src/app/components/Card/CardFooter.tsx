import * as classnames from 'classnames'
import * as React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'
import { createStyles } from '../../Theme'

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
}))
type Props = WithSheet<typeof styles> & {
    className ?: string
}
const CardFooter : React.FunctionComponent<Props> = ({ children, className, classes }) => (
    <div className={classnames(className, classes.container)}>{children}</div>
)

export default injectStylesheet(styles)(CardFooter)
