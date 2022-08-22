import React from 'react';

import { OPEN_SOURCE } from '../../config';
import { ProjectCardList } from '../Card/ProjectCardList';

const OpenSource: React.FunctionComponent = React.memo(() => (
  <ProjectCardList title="Open Source" projects={OPEN_SOURCE} />
));

export { OpenSource };
