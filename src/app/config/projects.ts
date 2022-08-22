import type { Project } from './Project';

const PROJECTS: ReadonlyArray<Project> = [
  {
    name: 'zacher.com.au',
    description: 'The source behind this website!',
    source: 'https://github.com/bradzacher/zacher-home',
  },
  {
    spriteName: 'honsRecursiveSolverGE',
    name: 'From Pictures to Programs',
    description: 'My honours thesis - evolves recursive solutions using GP.',
    source: 'https://github.com/bradzacher/HonsRecursiveSolverGE',
  },
];

export { PROJECTS };
