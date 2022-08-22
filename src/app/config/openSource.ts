import type { Project } from './Project';

const OPEN_SOURCE: ReadonlyArray<Project> = [
  {
    spriteName: 'typescriptEslint',
    name: 'typescript-eslint',
    description: 'ESlint rules and parsing for Typescript code.',
    source: 'https://github.com/typescript-eslint/typescript-eslint',
    demo: 'https://typescript-eslint.io',
  },
  {
    spriteName: 'eslint',
    name: 'eslint-config-brad',
    description: 'My ESlint configuration for typescript projects.',
    source: 'https://github.com/bradzacher/eslint-config-brad',
    demo: 'https://www.npmjs.com/package/eslint-config-brad',
  },
];

export { OPEN_SOURCE };
