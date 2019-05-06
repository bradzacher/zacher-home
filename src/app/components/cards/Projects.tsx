import React from 'react'

import { ProjectCardList } from '../Card/ProjectCardList'
import { PROJECTS } from '../../config'

const Projects : React.FunctionComponent = React.memo(() => (
    <ProjectCardList title='Personal Projects' projects={PROJECTS} />
))

export { Projects }
