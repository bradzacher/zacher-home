import React from 'react';

import { SOCIAL } from '../config';
import { createUseThemedStyles } from '../Theme';
import { MeLink } from './MeLink';

const useStyles = createUseThemedStyles(theme => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    // taken from mdl
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    height: '7rem',
    paddingLeft: '9rem',
    paddingRight: '2rem',
  },
  title: {
    color: theme.palette.white,
    fontSize: '2.5rem',
  },
  nav: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
  },
  navItem: {
    color: theme.palette.white,
    fontSize: '1.75rem',
    padding: '0 2rem',
    textDecoration: 'none',
  },
  '@media (max-width: 500px)': {
    header: {
      paddingLeft: '2rem',
    },
  },
  '@media (max-width: 360px)': {
    nav: {
      display: 'none',
    },
  },
}));

function AppBar(): JSX.Element {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.title}>Brad Zacher</div>
      <nav className={classes.nav}>
        <MeLink className={classes.navItem} href={SOCIAL.medium}>
          Blog
        </MeLink>
        <MeLink className={classes.navItem} href={SOCIAL.github}>
          Github
        </MeLink>
        <MeLink className={classes.navItem} href={SOCIAL.twitter}>
          Twitter
        </MeLink>
      </nav>
    </header>
  );
}

export { AppBar };
