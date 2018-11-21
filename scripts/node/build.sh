#!/bin/bash
set -e

yarn build
yarn cpx ./src/assets/**/* ./build
