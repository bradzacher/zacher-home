import React from 'react';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

function MeLink(props: Props): JSX.Element {
  return (
    <a {...props} target="_blank" rel="noopener">
      {props.children}
    </a>
  );
}

export { MeLink };
