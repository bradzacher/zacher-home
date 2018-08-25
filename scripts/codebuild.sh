set -e

# grab the parameters from SSM
S3BUCKET=$(aws ssm get-parameters --names "/zacher-com-au/S3_BUCKET" --query Parameters[0].Value --output text)
DISTRIBUTIONID=$(aws ssm get-parameters --names "/zacher-com-au/CF_DISTRIBUTION_ID" --query Parameters[0].Value --output text)

# build
yarn install
yarn build

# deploy
aws s3 sync ./dist/ s3://$S3BUCKET/ --delete
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTIONID --paths=/*
