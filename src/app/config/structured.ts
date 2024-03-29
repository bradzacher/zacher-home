import type { Person, WithContext } from 'schema-dts';

import * as constants from './constants';
import { SOCIAL } from './social';

const STRUCTURED: Readonly<WithContext<Person>> = {
  '@context': 'https://schema.org',
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
  knowsAbout: [
    'TypeScript',
    'Flow',
    'JavaScript',
    'React',
    'GraphQL',
    'Node',
    'SQL',
    'PHP',
    'Hacklang',
    'HTML',
    'CSS',
  ],
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
  sameAs: Object.values(SOCIAL),
  url: constants.HOST,
  workLocation: {
    '@type': 'Place',
    name: 'Adelaide',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Meta',
  },
};

export { STRUCTURED };
