import 'isomorphic-fetch';

import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import * as prettier from 'prettier';

import { createGeneratedFolder } from '../createBuildFolder';

async function github(): Promise<void> {
  const outFolder = createGeneratedFolder();
  const filepath = path.resolve(outFolder, 'GithubCalendar.tsx');
  console.info('Fetching github contributions graph...');

  // fetch the contribution graph
  const response = await fetch(
    'https://github.com/users/bradzacher/contributions',
    {
      method: 'GET',
    },
  );
  const rawHtml = await response.text();

  // use JSDOM to get the svg element
  // TODO - is it better to do this instead via parsing?
  const dom = new JSDOM(rawHtml);
  const res = dom.window.document.querySelector(
    'table.js-calendar-graph-table',
  );

  if (!res) {
    throw new Error(
      "Couldn't find table element in github contributions response",
    );
  }

  const CLASSES_TO_REPLACE = new Set([
    'ContributionCalendar-day',
    'ContributionCalendar-label',
    'sr-only',
  ]);
  const lines = [
    '/**',
    ' * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!',
    ' *     ANY MANUAL CHANGES WILL BE LOST!',
    ' */',
    '',
    "import classnames from 'classnames'",
    "import React from 'react'",
    '',
    "import { createUseThemedStyles } from '../Theme'",
    '',
    'const useStyles = createUseThemedStyles(theme => ({',
    "  'ContributionCalendar-day': {",
    '    \'&, &[data-level="0"]\': {',
    "      backgroundColor: '#ebedf0',",
    "      border: 'rgba(27, 31, 35, 0.06)',",
    '    },',
    '    \'&[data-level="1"]\': {',
    "      backgroundColor: '#9be9a8',",
    "      border: 'rgba(27, 31, 35, 0.06)',",
    '    },',
    '    \'&[data-level="2"]\': {',
    "      backgroundColor: '#40c463',",
    "      border: 'rgba(27, 31, 35, 0.06)',",
    '    },',
    '    \'&[data-level="3"]\': {',
    "      backgroundColor: '#30a14e',",
    "      border: 'rgba(27, 31, 35, 0.06)',",
    '    },',
    '    \'&[data-level="4"]\': {',
    "      backgroundColor: '#216e39',",
    "      border: 'rgba(27, 31, 35, 0.06)',",
    '    },',
    '  },',
    "  '.ContributionCalendar-grid': {",
    "    width: 'max-content',",
    "    borderCollapse: 'separate',",
    '  },',
    "  'ContributionCalendar-label': {",
    '    color: theme.palette.grey,',
    "    fontSize: '1rem',",
    '  },',
    "  'sr-only': {",
    "    position: 'absolute',",
    "    width: '1px',",
    "    height: '1px',",
    "    padding: '0',",
    "    overflow: 'hidden',",
    "    clip: 'rect(0, 0, 0, 0)',",
    "    wordWrap: 'normal',",
    "    border: '0',",
    '  },',
    '}));',
    '',
    'function GithubCalendar(): JSX.Element {',
    '  const classes = useStyles();',
    `  return (${
      // look... this should be done a better way that's less brittle but I am not in the mood to write it
      res.outerHTML
        .replace(/<td><\/td>/gu, '<td />')
        .replace(/\bclass="(.+?)"/gu, (_1, match: string) => {
          const classes = match
            .split(' ')
            .map(clazz => {
              if (CLASSES_TO_REPLACE.has(clazz)) {
                return `classes['${clazz}']`;
              }
              return `'${clazz}'`;
            })
            .join(', ');
          return `className={classnames([${classes}])}`;
        })
        .replace(/\bcolspan="(.+?)"/gu, 'colSpan={$1}')
        .replace(/\btabindex="(.+?)"/gu, 'tabIndex={$1}')
        .replace(/\bstyle="(.+?)"/gu, (_1, match: string) => {
          const stylesObj = JSON.stringify(
            Object.fromEntries(
              match.split(';').map(rule => {
                const [key, value] = rule
                  .trim()
                  .split(':')
                  .map(substr => substr.trim());
                return [
                  key.replace(/-(\w)/gu, (_2, char: string) =>
                    char.toUpperCase(),
                  ),
                  value,
                ];
              }),
            ),
          );
          return `style={${stylesObj}}`;
        })
    })`,
    '}',
    '',
    'export { GithubCalendar }',
    '',
  ];

  const prettierConfig = await prettier.resolveConfig(filepath);
  const formatted = prettier.format(lines.join('\n'), {
    ...prettierConfig,
    filepath,
  });
  fs.writeFileSync(filepath, formatted, 'utf8');

  console.info('Generated new GithubCalendar.tsx');
}

export default github;
