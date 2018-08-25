#!/bin/bash
set -e

yarn clean
# fetch extras
yarn ts-node --files ./scripts/github.ts
yarn ts-node --files ./scripts/wakatime.ts
# build sprites
yarn ts-node --files ./scripts/sprites.ts
