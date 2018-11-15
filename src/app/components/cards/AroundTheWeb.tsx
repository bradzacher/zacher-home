import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { SOCIAL } from '../../config'
import Sprite from '../../generated/Sprite'
import { createStyles } from '../../Theme'
import Card from '../Card'
import MeLink from '../MeLink'

const styles = createStyles(() => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'center',
        padding: '2.75rem',
    },
    link: {
        marginRight: '0.5rem',
    },
}))

type Props = WithSheet<typeof styles>

const AroundTheWeb : React.FunctionComponent<Props> = ({ classes }) => (
    <Card
        title='Around the Web'
        content={
            <div className={classes.container}>
                {Object.keys(SOCIAL).map((key : keyof typeof SOCIAL) => (
                    <MeLink key={key} className={classes.link} href={SOCIAL[key]}>
                        <Sprite name={key} />
                    </MeLink>
                ))}
            </div>
        }
    />
)

export default injectSheet(styles)(AroundTheWeb)
