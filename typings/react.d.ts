/* eslint-disable @typescript-eslint/no-unused-vars */

import { DetailedHTMLProps } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-analytics' : DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLDivElement>, HTMLDivElement>
        }
    }
}

declare module 'react' {
    type WithOptionalChildren = {
        children ?: React.ReactNode | Array<React.ReactNode>
    }
    type WithChildren = Required<WithOptionalChildren>

    type WithOptionalChild = {
        children ?: React.ReactNode
    }
    type WithChild = Required<WithOptionalChild>
}
