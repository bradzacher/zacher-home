/* eslint-disable @typescript-eslint/no-unused-vars */

import { DetailedHTMLProps } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-analytics' : DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLDivElement>, HTMLDivElement>
        }
    }
}
