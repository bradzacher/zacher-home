import * as classnames from 'classnames'
import * as React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'
import { createStyles } from '../../Theme'

const styles = createStyles(() => ({
    container: {
        borderRadius: '2px',
        // taken from mdl
        boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        marginBottom: '1rem',
        overflow: 'hidden',
    },
}))

type Props = WithSheet<typeof styles> & {
    className ?: string
}

const CardContainer : React.FunctionComponent<Props> = ({ className, classes, children }) => (
    <div className={classnames(className, classes.container)}>{children}</div>
)

export default injectStylesheet(styles)(CardContainer)
