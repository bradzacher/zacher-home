/**
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!
 *     ANY MANUAL CHANGES WILL BE LOST!
 */

import * as classnames from 'classnames'
import * as fs from 'fs' // eslint-disable-line import/no-nodejs-modules
import * as React from 'react'
import injectSheet, { WithSheet } from 'react-jss'
import { createStyles } from '../Theme'

const base64Spritesheet = fs.readFileSync(`${__dirname}/sprites.png`).toString('base64')

const styles = createStyles(() => ({
    sprite: {
        backgroundImage: `url(data:image/png;base64,${base64Spritesheet})`,
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
    },

    DefinitelyTyped: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px 0px',
    },

    HonsRecursiveSolverGE: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px -128px',
    },

    assignar: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -64px',
    },

    eslint: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px -64px',
    },

    githubSmall: {
        height: '32px',
        width: '32px',
        backgroundPosition: '-160px -192px',
    },

    github: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px -64px',
    },

    instagram: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -128px',
    },

    linkedin: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px -128px',
    },

    medium: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px 0px',
    },

    mysqldump: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px 0px',
    },

    natural20: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px -64px',
    },

    openExternal: {
        height: '32px',
        width: '32px',
        backgroundPosition: '-128px -192px',
    },

    steam: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -192px',
    },

    twitter: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px -128px',
    },

    wakatime: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px 0px',
    },

    youtube: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px -192px',
    },
}))

type SpriteName =
    | 'DefinitelyTyped'
    | 'HonsRecursiveSolverGE'
    | 'assignar'
    | 'eslint'
    | 'githubSmall'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'medium'
    | 'mysqldump'
    | 'natural20'
    | 'openExternal'
    | 'steam'
    | 'twitter'
    | 'wakatime'
    | 'youtube'

type Props = WithSheet<typeof styles> & {
    className ?: string
    name : SpriteName
}

const Sprite : React.FunctionComponent<Props> = ({ className, classes, name }) => (
    <div className={classnames(classes.sprite, classes[name], className)} />
)

export default injectSheet(styles)(Sprite)
export {
    SpriteName,
}
