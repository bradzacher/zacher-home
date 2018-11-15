import * as constants from './constants'
import social from './social'

export default {
    '@context': 'http://schema.org',
    '@type': 'Person',
    alumniOf: {
        '@type': 'Organization',
        name: 'University of Adelaide',
    },
    birthDate: '1991-01-22',
    description: constants.TAGLINE,
    email: 'brad.zacher@gmail.com',
    familyName: constants.LAST_NAME,
    gender: {
        '@type': 'GenderType',
        name: 'Male',
    },
    givenName: constants.FIRST_NAME,
    homeLocation: {
        '@type': 'Place',
        name: 'Adelaide',
    },
    honorificPrefix: 'Mr.',
    image: constants.GRAVATAR_URL,
    jobTitle: 'Software Engineer',
    knowsAbout: ['TypeScript', 'JavaScript', 'React', 'GraphQL', 'Node', 'SQL', 'C#', 'PHP', 'HTML', 'CSS'],
    knowsLanguage: [
        {
            '@type': 'Language',
            name: 'English',
        },
    ],
    name: constants.FULL_NAME,
    nationality: {
        '@type': 'Country',
        name: 'Australia',
    },
    sameAs: Object.values(social),
    url: constants.HOST,
    workLocation: {
        '@type': 'Place',
        name: 'Menlo Park',
    },
    worksFor: {
        '@type': 'Organization',
        name: 'Facebook',
    },
}
