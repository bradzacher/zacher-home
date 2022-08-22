import React from 'react';

import { PROJECTS } from '../../config';
import { ProjectCardList } from '../Card/ProjectCardList';

const Projects: React.FunctionComponent = React.memo(() => (
  <ProjectCardList title="Personal Projects" projects={PROJECTS} />
));

export { Projects };
