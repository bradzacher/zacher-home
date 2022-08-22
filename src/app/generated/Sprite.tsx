/**
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!
 *     ANY MANUAL CHANGES WILL BE LOST!
 */

import classnames from 'classnames'
import React from 'react'

import { createUseThemedStyles } from '../Theme'

const useStyles = createUseThemedStyles(() => ({
  sprite: {
    backgroundImage: 'url(sprites.png)',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },

  eslint: {
    height: '64px',
    width: '64px',
    backgroundPosition: '0px 0px',
  },

  githubSmall: {
    height: '32px',
    width: '32px',
    backgroundPosition: '-64px -192px',
  },

  github: {
    height: '64px',
    width: '64px',
    backgroundPosition: '-64px 0px',
  },

  googleScholar: {
    height: '64px',
    width: '64px',
    backgroundPosition: '0px -64px',
  },

  honsRecursiveSolverGE: {
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
    backgroundPosition: '-64px -128px',
  },

  openExternal: {
    height: '32px',
    width: '32px',
    backgroundPosition: '-96px -192px',
  },

  steam: {
    height: '64px',
    width: '64px',
    backgroundPosition: '-128px -128px',
  },

  twitter: {
    height: '64px',
    width: '64px',
    backgroundPosition: '-192px 0px',
  },

  typescriptEslint: {
    height: '64px',
    width: '64px',
    backgroundPosition: '-192px -64px',
  },

  wakatime: {
    height: '64px',
    width: '64px',
    backgroundPosition: '-192px -128px',
  },

  youtube: {
    height: '64px',
    width: '64px',
    backgroundPosition: '0px -192px',
  },
}))

type SpriteName =
    | 'eslint'
    | 'githubSmall'
    | 'github'
    | 'googleScholar'
    | 'honsRecursiveSolverGE'
    | 'instagram'
    | 'linkedin'
    | 'medium'
    | 'mysqldump'
    | 'openExternal'
    | 'steam'
    | 'twitter'
    | 'typescriptEslint'
    | 'wakatime'
    | 'youtube'

type Props = {
  className?: string
  name: SpriteName
}

function Sprite({ className, name }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classnames(classes.sprite, classes[name], className)} />
  );
}

export { Sprite };
export type { SpriteName };
