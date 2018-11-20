import { SpriteName } from '../generated/Sprite'

export default [
    {
        spriteName: 'eslint',
        name: 'eslint-plugin-typescript',
        description: 'ESlint rules for Typescript code.',
        source: 'https://github.com/bradzacher/eslint-plugin-typescript',
        demo: 'https://www.npmjs.com/package/eslint-plugin-typescript',
    },
    {
        spriteName: 'eslint',
        name: 'eslint-import-resolver-typescript',
        description: 'Adds support for typescript to eslint-plugin-import.',
        source: 'https://github.com/alexgorbatchev/eslint-import-resolver-typescript',
        demo: 'https://www.npmjs.com/package/eslint-import-resolver-typescript',
    },
    {
        spriteName: 'assignar',
        name: 'eslint-config-assignar',
        description: 'Assignar\'s ESlint configuration for typescript projects.',
        source: 'https://github.com/assignar/eslint-config-assignar',
    },
    {
        spriteName: 'mysqldump',
        name: 'mysqldump',
        description: 'Node Module to Create a Backup from MySQL.',
        source: 'https://github.com/assignar/mysqldump',
        demo: 'https://www.npmjs.com/package/@assignar/mysqldump',
    },
    {
        spriteName: 'DefinitelyTyped',
        name: 'DefinitelyTyped',
        description: 'TypeScript type definitions for node modules.',
        source: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
    },
] as Array<{
    spriteName : SpriteName
    name : string
    description : string
    source ?: string
    demo ?: string
}>
