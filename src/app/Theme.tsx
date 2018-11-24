import * as React from 'react'
import injectStylesheet, { ThemeProvider, StyleCreator } from 'react-jss'

import { APP_ROOT_ID, THEME_COLOUR } from './config'

const theme = {
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
            textAlign: 'right' as 'right',
        },
        graph: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row' as 'row',
            justifyContent: 'center',
        },
    },
}

const Theme : React.FunctionComponent = ({ children }) => (
    <ThemeProvider theme={theme}>{React.Children.only(children)}</ThemeProvider>
)

export function createStyles<TClasses extends string>(styles : StyleCreator<TClasses, ThemeType>) {
    return styles
}

const globalStyles = {
    '@global': {
        [`html, body, #${APP_ROOT_ID}`]: {
            height: '100%',
            width: '100%',
            margin: 0,
        },
        '*': {
            boxSizing: 'border-box' as 'border-box',
        },
        html: {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontSize: '8px',
        },
        body: {
            fontSize: '1.5rem',
        },
    },
}
const ThemeWithGlobalStyles = injectStylesheet(globalStyles)(Theme)

export default ThemeWithGlobalStyles

type ThemeType = typeof theme
