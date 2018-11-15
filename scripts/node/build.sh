#!/bin/bash
set -e

./scripts/node/prebuild.sh

yarn ts-node ./scripts/buildReact.ts

./scripts/node/postbuild.sh
