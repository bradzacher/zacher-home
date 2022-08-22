/* eslint-disable @typescript-eslint/naming-convention -- need integer properties */

import type { Classes } from 'jss';
import React from 'react';
import type { Styles } from 'react-jss';
import { createTheming, createUseStyles } from 'react-jss';

import { APP_ROOT_ID, THEME_COLOUR } from './config';

const ThemeStyles = {
  palette: {
    primary: THEME_COLOUR,
    primaryShade: {
      50: '#ebf7f1',
      100: '#cceadc',
      200: '#abddc4',
      300: '#89cfac',
      400: '#6fc49b',
      500: THEME_COLOUR,
      600: '#4fb381',
      700: '#45ab76',
      800: '#3ca36c',
      900: '#2b9459',
      A100: '#d8ffe8',
      A200: '#a5ffca',
      A400: '#72ffac',
      A700: '#58ff9e',
    },

    secondary: '#cfd8dc',
    secondaryShade: {
      50: '#f9fafb',
      100: '#f1f3f5',
      200: '#e7ecee',
      300: '#dde4e7',
      400: '#d6dee1',
      500: '#cfd8dc',
      600: '#cad4d8',
      700: '#c3ced3',
      800: '#bdc8ce',
      900: '#b2bfc5',
      A100: '#ffffff',
      A200: '#ffffff',
      A400: '#ffffff',
      A700: '#fcfeff',
      contrastDefaultColor: 'dark',
    },

    black: '#000000',
    white: '#ffffff',
    grey: '#cccccc',
  },
  // spacings in REM
  spacing: {
    pageWidth: 100,
    card: {
      contentPadding: 2,
    },
  },
  classes: {
    poweredByLink: {
      marginTop: '1rem',
      textAlign: 'right' as const,
    },
    graph: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'center',
    },
  },
} as const;
const ThemeContext = React.createContext(ThemeStyles);
const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

const useGlobalStyles = createUseStyles({
  '@global': {
    [`html, body, #${APP_ROOT_ID}`]: {
      height: '100%',
      width: '100%',
      margin: 0,
    },
    '*': {
      boxSizing: 'border-box' as const,
    },
    html: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: '8px',
    },
    body: {
      fontSize: '1.5rem',
    },
  },
});

function Theme({ children }: { children: React.ReactNode }): JSX.Element {
  useGlobalStyles();
  return <ThemeProvider theme={ThemeStyles}>{children}</ThemeProvider>;
}

type CreateUseStylesOptions = Parameters<
  typeof createUseStyles<string, unknown, typeof ThemeStyles>
>[1];
function createUseThemedStyles<C extends string = string, Props = unknown>(
  styles:
    | Styles<C, Props, typeof ThemeStyles>
    | ((theme: typeof ThemeStyles) => Styles<C, Props, undefined>),
  options?: CreateUseStylesOptions,
): (data?: Props) => Classes<C> {
  return createUseStyles(styles, {
    ...options,
    theming,
  });
}

export { createUseThemedStyles, useTheme, Theme };
