import * as constants from './constants'

export * from './constants'
export { default as SOCIAL } from './social'
export { default as OPEN_SOURCE } from './openSource'
export { default as PROJECTS } from './projects'
export { default as STRUCTURED } from './structured'
export const META = {
    facebook: {
        admins: constants.FB_PROFILE_ID,
        // eslint-disable-next-line @typescript-eslint/camelcase
        profile_id: constants.FB_PROFILE_ID,
    },
    keywords: [
        constants.FULL_NAME,
        'Computer Science',
        'Comp Scip',
        'Software Engineer',
        'Applications Development',
        'Apps Dev',
        'JavaScript',
        'JS',
        'TypeScript',
        'TS',
        'ESLint',
        'C#',
    ],
    openGraph: {
        description: constants.TAGLINE,
        image: constants.GRAVATAR_URL,
        'image:width': constants.GRAVATAR_SIZE,
        'image:height': constants.GRAVATAR_SIZE,
        title: constants.FULL_NAME,
        type: 'profile',
        url: constants.HOST,
    },
    twitter: {
        card: 'summary',
        description: constants.TAGLINE,
        image: constants.GRAVATAR_URL,
        site: '@bradzacher',
        title: constants.FULL_NAME,
    },
}
