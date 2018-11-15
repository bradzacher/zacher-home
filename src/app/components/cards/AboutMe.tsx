import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'

import { SOCIAL } from '../../config'
import { createStyles } from '../../Theme'
import Card from '../Card'

const styles = createStyles(() => ({
    picture: {
        borderRadius: '10%',
        float: 'left' as 'left',
        paddingRight: '1rem',
    },
    line: {
        lineHeight: '3rem',
        margin: 0,
        marginBottom: '2rem',
    },
}))

type Props = WithSheet<typeof styles>

const lines : React.ReactNode[] = [
    'I am a computer scientist. I am a lover of cider. I am from Adelaide, Australia.',
    'I graduated with honours in Computer Science from the University of Adelaide.',
    'I am a Software Engineer at Facebook in Menlo Park.',
    'I am always looking for new things to learn. Currently digging deep into TypeScript, linting, Node and GraphQL.',
    'I pride myself on being able to work with many technologies.',
    'Proficient in many languages; namely TypeScript/JavaScript, PHP, SQL, C#, and C/C++.',
    <React.Fragment>
        You can read more about me and my history in{' '}
        <a href='/assets/Brad_Zacher_Resume_2018.pdf' rel='nofollow' id='resume-link'>
            my resume
        </a>
        .
    </React.Fragment>,
    <React.Fragment>
        You can contact me via any of the networks below, or by gmail - bradzacher{' '}
        <a href='/assets/bradzacher.txt'>GPG</a>.
    </React.Fragment>,
    <React.Fragment>
        I also have a blog on{' '}
        <a href={SOCIAL.medium} rel='me'>
            {SOCIAL.medium.replace('https://', '')}
        </a>
        .
    </React.Fragment>,
]

const AboutMe : React.FunctionComponent<Props> = ({ classes }) => (
    <Card
        title='About Me'
        content={
            <React.Fragment>
                <img
                    className={classes.picture}
                    src='https://en.gravatar.com/userimage/88111926/67c389d0ebb48c35829460f965f820a9.png?size=200'
                />
                {lines.map((l, i) => (
                    <p key={`${i}`} className={classes.line}>
                        {l}
                    </p>
                ))}
            </React.Fragment>
        }
    />
)

export default injectSheet(styles)(AboutMe)
