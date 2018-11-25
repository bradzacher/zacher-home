import { execSync } from 'child_process'

import getParameterFromSSM from './getParameterFromSSM'

async function deploy() {
    const s3bucket = await getParameterFromSSM('S3_BUCKET')
    const distributionId = await getParameterFromSSM('CF_DISTRIBUTION_ID')

    // deploy the files
    // it's easier to call cli as the js-sdk doesn't include a sync method
    execSync(`aws s3 sync ./build/ s3://${s3bucket} --delete`)
    // again easier to call the cli as th js-sdk needs a lot of extra parameters
    execSync(`ws cloudfront create-invalidation --distribution-id=${distributionId} --paths=/*`)
}

export default deploy
