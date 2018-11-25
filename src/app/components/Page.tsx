import * as React from 'react'

import { APP_ROOT_ID, GOOGLE_SITE_VERIFICATION, HOST, META, STRUCTURED, TAGLINE, THEME_COLOUR } from '../config'

function mapMeta(meta : Record<string, string>, prefix : string) {
    return Object.keys(meta).map((key) => {
        const metaKey = `${prefix}:${key}`

        return <meta key={metaKey} property={metaKey} content={meta[key]} />
    })
}

const GOOGLE_TRACKING_SCRIPT = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44247259-1', 'auto');
ga('send', 'pageview');
`

// uninstall the old service worker because it can respond with the old version
const UNREGISTER_SERVICE_WORKER = `
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        registrations.forEach(function(registration) {
            registration.unregister()
        })
        // be a bit janky, but force a refresh so the actual latest page is shown
        if (registrations.length) {
            window.location.reload()
        }
    })
}
`

interface Props {
    /**
     * The raw HTML of the app
     */
    app : string
    /**
     * The css collected from the render
     */
    styles : string
}

const Page : React.FunctionComponent<Props> = React.memo(({ app, styles }) => (
    <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1' />
            <link rel='manifest' href='./manifest.webmanifest' />
            <link rel='canonical' href={HOST} hrefLang='en' />

            <title>Brad Zacher</title>

            <meta name='description' content={TAGLINE} />
            <meta name='keywords' content={META.keywords.join(',')} />
            <meta name='robots' content='index,follow' />

            <meta name='theme-color' content={THEME_COLOUR} />
            <meta name='msapplication-navbutton-color' content={THEME_COLOUR} />
            <meta name='apple-mobile-web-app-status-bar-style' content='black' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-capable' content='yes' />

            <meta name='google-site-verification' content={GOOGLE_SITE_VERIFICATION} />

            {mapMeta(META.openGraph, 'og')}
            {mapMeta(META.facebook, 'fb')}
            {mapMeta(META.twitter, 'twitter')}

            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED) }} />

            <style type='text/css'>{styles}</style>
        </head>
        <body>
            <div id={APP_ROOT_ID} dangerouslySetInnerHTML={{ __html: app }} />
            <script type='text/javascript' dangerouslySetInnerHTML={{ __html: GOOGLE_TRACKING_SCRIPT }} />
            <script type='text/javascript' dangerouslySetInnerHTML={{ __html: UNREGISTER_SERVICE_WORKER }} />
        </body>
    </html>
))

export default Page
