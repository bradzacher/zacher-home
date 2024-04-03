import React from 'react';

import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';

const useStyles = createUseThemedStyles(() => ({
  picture: {
    borderRadius: '10%',
    float: 'left' as const,
    marginRight: '1rem',
  },
  line: {
    lineHeight: '3rem',
    margin: 0,
    marginBottom: '1.5rem',
  },
}));

const lines: Array<React.ReactNode> = [
  <>
    I am a computer scientist. I am a lover of cider. I am a dad. I am from
    Adelaide, Australia.
  </>,
  <>
    I am a Software Engineer at Canva working on Front-End infra, build tools, and DevX.
  </>,
  <>
    I am a core maintainer of{' '}
    <a href="https://typescript-eslint.io/" rel="nofollow noreferrer noopener">
      TypeScript-ESLint
    </a>
    .
  </>,
  <>
    I graduated with honours in Computer Science from the University of
    Adelaide.
  </>,
  <>
    Proficient in many languages; namely TypeScript/Flow/JavaScript, Hack/PHP,
    and SQL.
  </>,
  <>
    You can read more about me and my history in{' '}
    <a href="/Brad_Zacher_Resume_2022.pdf" rel="nofollow" id="resume-link">
      my resume
    </a>
    .
  </>,
  <>
    You can contact me via any of the networks below, or by gmail - bradzacher{' '}
    <a href="/bradzacher.txt" rel="nofollow">
      GPG
    </a>
    .
  </>,
];

function AboutMe(): JSX.Element {
  const classes = useStyles();
  return (
    <Card>
      <CardTitle>About Me</CardTitle>
      <CardContent>
        <img
          alt="A picture of my ugly mug"
          className={classes.picture}
          height={200}
          width={200}
          src="https://en.gravatar.com/userimage/88111926/67c389d0ebb48c35829460f965f820a9.png?size=200"
        />
        {lines.map((l, i) => (
          // eslint-disable-next-line react/no-array-index-key -- the lines are constant
          <p key={`${i}`} className={classes.line}>
            {l}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

export { AboutMe };
