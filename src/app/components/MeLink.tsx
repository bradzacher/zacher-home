import React from 'react'

type Props = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

const MeLink : React.FunctionComponent<Props> = props => (
    <a {...props} target='_blank' rel='me noopener'>
        {props.children}
    </a>
)

export { MeLink }
