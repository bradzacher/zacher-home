#!/bin/bash
set -e

./scripts/node/prebuild.sh

yarn parcel build ./src/index.njk

./scripts/node/postbuild.sh
