/* eslint-disable react/no-danger */

import React from 'react'

import {
    APP_ROOT_ID,
    GOOGLE_SITE_VERIFICATION,
    HOST,
    META,
    STRUCTURED,
    TAGLINE,
    THEME_COLOUR,
} from '../config'

function mapMeta(
    meta : Record<string, string>,
    prefix : string,
) : Array<React.ReactNode> {
    return Object.keys(meta).map(key => {
        const metaKey = `${prefix}:${key}`

        return <meta key={metaKey} property={metaKey} content={meta[key]} />
    })
}

const GOOGLE_TRACKING_ID = 'UA-44247259-1'
const GOOGLE_TRACKING_SCRIPT = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', '${GOOGLE_TRACKING_ID}', 'auto');
ga('send', 'pageview');
`

interface Props {
    /**
     * The raw HTML of the app
     */
    app : string
    /**
     * True to render the amp version of the page
     */
    isAmp ?: boolean
    /**
     * The css collected from the render
     */
    styles : string
}

const Page : React.FunctionComponent<Props> = React.memo(
    ({ app, isAmp, styles }) => (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, minimum-scale=1'
                />
                <link rel='manifest' href='./manifest.webmanifest' />
                <link rel='canonical' href={HOST} hrefLang='en' />
                {!isAmp && <link rel='amphtml' href='/index.amp.html' />}

                <title>Brad Zacher</title>

                <meta name='description' content={TAGLINE} />
                <meta name='keywords' content={META.keywords.join(',')} />
                <meta name='robots' content='index,follow' />

                <meta name='theme-color' content={THEME_COLOUR} />
                <meta
                    name='msapplication-navbutton-color'
                    content={THEME_COLOUR}
                />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black'
                />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-capable' content='yes' />

                <meta
                    name='google-site-verification'
                    content={GOOGLE_SITE_VERIFICATION}
                />

                {mapMeta(META.openGraph, 'og')}
                {mapMeta(META.facebook, 'fb')}
                {mapMeta(META.twitter, 'twitter')}

                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(STRUCTURED),
                    }}
                />

                {isAmp ? (
                    <style type='text/css' amp-custom='true'>
                        {styles}
                    </style>
                ) : (
                    <style type='text/css'>{styles}</style>
                )}

                {isAmp && (
                    <>
                        <script async src='https://cdn.ampproject.org/v0.js' />
                        <style
                            amp-boilerplate='true'
                            dangerouslySetInnerHTML={{
                                __html:
                                    // eslint-disable-next-line max-len
                                    'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}',
                            }}
                        />
                        <noscript>
                            <style
                                amp-boilerplate='true'
                                dangerouslySetInnerHTML={{
                                    __html:
                                        // eslint-disable-next-line max-len
                                        'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}',
                                }}
                            />
                        </noscript>
                        <script
                            async
                            custom-element='amp-analytics'
                            src='https://cdn.ampproject.org/v0/amp-analytics-0.1.js'
                        />
                    </>
                )}
            </head>
            <body>
                <div
                    id={APP_ROOT_ID}
                    dangerouslySetInnerHTML={{ __html: app }}
                />

                {isAmp ? (
                    <amp-analytics type='gtag' data-credentials='include'>
                        <script
                            type='application/json'
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    vars: {
                                        // eslint-disable-next-line @typescript-eslint/camelcase
                                        gtag_id: GOOGLE_TRACKING_ID,
                                        config: {
                                            [GOOGLE_TRACKING_ID]: {
                                                groups: 'default',
                                            },
                                        },
                                    },
                                }),
                            }}
                        />
                    </amp-analytics>
                ) : (
                    <script
                        type='text/javascript'
                        dangerouslySetInnerHTML={{
                            __html: GOOGLE_TRACKING_SCRIPT,
                        }}
                    />
                )}
            </body>
        </html>
    ),
)

export { Page }
