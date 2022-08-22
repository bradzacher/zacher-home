module.exports = {
    extends: ['brad/react'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/jsx-no-target-blank': 'off',
    },
    settings: {
        react: {
            version: '18.2.0',
        },
    },
    overrides: [
        {
            files: ['scripts/**/*'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
};
