import React from 'react';

import { Theme } from '../Theme';
import { AppBar } from './AppBar';
import { Content } from './Content';

function App(): JSX.Element {
  return (
    <Theme>
      <AppBar />
      <Content />
    </Theme>
  );
}

export { App };
