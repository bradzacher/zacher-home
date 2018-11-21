import { SpriteName } from '../generated/Sprite'

interface Project {
    spriteName ?: SpriteName
    name : string
    description : string
    source ?: string
    demo ?: string
}

export default Project
