import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';

import { createStyles } from '../Theme';
import { AboutMe } from './cards/AboutMe';
import { AroundTheWeb } from './cards/AroundTheWeb';
import { GithubCommits } from './cards/GithubCommits';
import { OpenSource } from './cards/OpenSource';
import { Projects } from './cards/Projects';
import { Wakatime } from './cards/Wakatime';

const styles = createStyles(theme => ({
    main: {
        margin: 'auto',
        maxWidth: `${theme.spacing.pageWidth}rem`,
        paddingTop: '2.5rem',
    },
}));

type Props = WithSheet<typeof styles>;

const Content = injectSheet(styles)(({ classes }: Props) => (
    <main className={classes.main}>
        <AboutMe />
        <AroundTheWeb />
        <Wakatime />
        <GithubCommits />
        <OpenSource />
        <Projects />
    </main>
));

export { Content };
