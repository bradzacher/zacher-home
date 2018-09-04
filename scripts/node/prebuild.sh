#!/bin/bash
set -e

WAKATIMEID=$(aws ssm get-parameters --names "/zacher-com-au/WAKATIME_ID" --query Parameters[0].Value --output text)

yarn clean
# fetch extras
yarn ts-node --files ./scripts/github.ts
yarn ts-node --files ./scripts/wakatime.ts $WAKATIMEID
# build sprites
yarn ts-node --files ./scripts/sprites.ts