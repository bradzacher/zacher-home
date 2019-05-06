/**
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!
 *     ANY MANUAL CHANGES WILL BE LOST!
 */

import classnames from 'classnames'
import React from 'react'
import injectSheet, { WithSheet } from 'react-jss'
import { createStyles } from '../Theme'

const styles = createStyles(() => ({
    sprite: {
        backgroundImage: 'url(sprites.png)',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
    },

    HonsRecursiveSolverGE: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px 0px',
    },

    eslint: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px -128px',
    },

    githubSmall: {
        height: '32px',
        width: '32px',
        backgroundPosition: '-96px -192px',
    },

    github: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-64px -64px',
    },

    instagram: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px 0px',
    },

    linkedin: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px -64px',
    },

    medium: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -128px',
    },

    mysqldump: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px 0px',
    },

    natural20: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-128px -128px',
    },

    openExternal: {
        height: '32px',
        width: '32px',
        backgroundPosition: '-64px -192px',
    },

    steam: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px -64px',
    },

    twitter: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px -128px',
    },

    typescriptEslint: {
        height: '64px',
        width: '64px',
        backgroundPosition: '-192px 0px',
    },

    wakatime: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -64px',
    },

    youtube: {
        height: '64px',
        width: '64px',
        backgroundPosition: '0px -192px',
    },
}))

type SpriteName =
    | 'HonsRecursiveSolverGE'
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
    | 'typescriptEslint'
    | 'wakatime'
    | 'youtube'

type Props = WithSheet<typeof styles> & {
    className ?: string
    name : SpriteName
}

const Sprite = injectSheet(styles)(({ className, classes, name } : Props) => (
    <div className={classnames(classes.sprite, classes[name], className)} />
))

export {
    Sprite,
    SpriteName,
}
