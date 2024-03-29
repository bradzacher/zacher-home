import CleanCss from 'clean-css';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';

import { App } from '../src/app/components/App';
import { Page } from '../src/app/components/Page';

function renderToString(
  appStr: string,
  styles: string,
  isAmp: boolean,
): string {
  const fullPageStr = ReactDOMServer.renderToString(
    <Page app={appStr} styles={styles} isAmp={isAmp} />,
  );

  if (!isAmp) {
    return fullPageStr;
  }

  return fullPageStr
    .replace('<html ', '<html ⚡ ')
    .replace(/amp-boilerplate="true"/gu, 'amp-boilerplate')
    .replace(/amp-custom="true"/gu, 'amp-custom')
    .replace(/<img(.+?)\/>/gu, '<amp-img$1></amp-img>');
}

export default function render(isAmp = false): string {
  const sheets = new SheetsRegistry();
  const appStr = ReactDOMServer.renderToStaticMarkup(
    <JssProvider registry={sheets}>
      <App />
    </JssProvider>,
  );

  const cssminifier = new CleanCss();
  const styles = cssminifier.minify(sheets.toString()).styles;

  const fullPageStr = renderToString(appStr, styles, isAmp);

  console.info(`Finished Full Page${isAmp ? ' AMP' : ''} SSR`);

  return ['<!DOCTYPE html>', fullPageStr].join('\n');
}
