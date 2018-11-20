import * as classnames from 'classnames'
import * as React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'
import { createStyles } from '../../Theme'

const styles = createStyles(() => ({
    container: {
        fontSize: '1.75rem',
        padding: '2rem',
    },
}))
type Props = WithSheet<typeof styles> & {
    className ?: string
    shaded ?: boolean
}
const CardContent : React.FunctionComponent<Props> = ({ children, className, classes }) => (
    <div className={classnames(className, classes.container)}>{children}</div>
)

export default injectStylesheet(styles)(CardContent)
