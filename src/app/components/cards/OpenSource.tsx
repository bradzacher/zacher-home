import React from 'react'

import { ProjectCardList } from '../Card/ProjectCardList'
import { OPEN_SOURCE } from '../../config'

const OpenSource : React.FunctionComponent = React.memo(() => (
    <ProjectCardList title='Open Source' projects={OPEN_SOURCE} />
))

export { OpenSource }
