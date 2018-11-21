import * as React from 'react'

import ProjectCardList from '../Card/ProjectCardList'
import { PROJECTS } from '../../config'

const Projets : React.FunctionComponent = React.memo(() => (
    <ProjectCardList title='Personal Projects' projects={PROJECTS} />
))

export default Projets
