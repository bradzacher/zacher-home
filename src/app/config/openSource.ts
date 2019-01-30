import Project from './Project'

export default [
    {
        spriteName: 'typescriptEslint',
        name: 'typescript-eslint',
        description: 'ESlint rules and parsing for Typescript code.',
        source: 'https://github.com/typescript-eslint/typescript-eslint',
    },
    {
        spriteName: 'eslint',
        name: 'eslint-import-resolver-typescript',
        description: 'Adds support for typescript to eslint-plugin-import.',
        source: 'https://github.com/alexgorbatchev/eslint-import-resolver-typescript',
        demo: 'https://www.npmjs.com/package/eslint-import-resolver-typescript',
    },
    {
        spriteName: 'eslint',
        name: 'eslint-config-brad',
        description: 'My ESlint configuration for typescript projects.',
        source: 'https://github.com/bradzacher/eslint-config-brad',
    },
    {
        spriteName: 'mysqldump',
        name: 'mysqldump',
        description: 'Node Module to Create a Backup from MySQL.',
        source: 'https://github.com/assignar/mysqldump',
        demo: 'https://www.npmjs.com/package/@assignar/mysqldump',
    },
] as Array<Project>
