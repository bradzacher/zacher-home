#!/bin/bash
set -e

yarn clean

yarn ts-node --files ./scripts/github.ts
yarn ts-node --files ./scripts/sprites.ts
yarn ts-node --files ./scripts/wakatime/generateGraph.ts
