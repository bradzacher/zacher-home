import * as React from 'react'
import injectStylesheet, { WithSheet } from 'react-jss'
import { createStyles } from '../Theme'

const styles = createStyles(theme => ({
    card: {
        borderRadius: '2px',
        // taken from mdl
        boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        marginBottom: '1rem',
        overflow: 'hidden',
    },
    cardTitle: {
        backgroundColor: theme.palette.grey,
        fontSize: '3rem',
        fontWeight: 300,
        padding: '2rem',
    },
    cardContent: {
        fontSize: '1.75rem',
        padding: '2rem',
    },
}))

type Props = WithSheet<typeof styles> & {
    title : React.ReactNode
    content : React.ReactNode
}

const Card : React.FunctionComponent<Props> = ({ classes, content, title }) => (
    <div className={classes.card}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardContent}>{content}</div>
    </div>
)

export default injectStylesheet(styles)(Card)
