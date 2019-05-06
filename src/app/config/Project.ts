import { SpriteName } from '../generated/Sprite'

type Project = Readonly<{
    spriteName ?: SpriteName
    name : string
    description : string
    source ?: string
    demo ?: string
}>

export { Project }
