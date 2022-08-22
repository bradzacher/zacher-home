import type { DetailedHTMLProps } from 'react';

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- decl merging
    interface IntrinsicElements {
      'amp-analytics': DetailedHTMLProps<
        React.ScriptHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
    }
  }
}

declare module 'react' {
  type WithOptionalChildren = {
    children?: React.ReactNode | Array<React.ReactNode>;
  };
  type WithChildren = Required<WithOptionalChildren>;

  type WithOptionalChild = {
    children?: React.ReactNode;
  };
  type WithChild = Required<WithOptionalChild>;
}
