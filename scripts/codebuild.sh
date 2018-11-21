#!/bin/bash
set -e

# build
yarn install
./node/prebuild.sh
./node/build.sh

# grab the parameters from SSM
S3BUCKET=$(aws ssm get-parameters --names "/zacher-com-au/S3_BUCKET" --query Parameters[0].Value --output text)
DISTRIBUTIONID=$(aws ssm get-parameters --names "/zacher-com-au/CF_DISTRIBUTION_ID" --query Parameters[0].Value --output text)

# deploy
aws s3 sync ./dist/ s3://$S3BUCKET/ --delete
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTIONID --paths=/*
