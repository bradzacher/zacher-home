import React, { useMemo } from 'react';

import { SOCIAL } from '../../config';
import { WakatimeData } from '../../generated/WakatimeData';
import { createUseThemedStyles } from '../../Theme';
import { Card, CardContent, CardTitle } from '../Card';

enum LargeArcFlag {
  SmallArc = 0,
  LargeArc = 1,
}

const SVG_SCALE = 150;
const TEXT_OFFSET = 0.15 * SVG_SCALE;
const GRAPH_VIEWBOX_MODIFIER = SVG_SCALE + TEXT_OFFSET + 10;
const ANGLE_OFFSET = -0.25; // 25% = 90degrees

const useStyles = createUseThemedStyles(theme => ({
  container: {
    ...theme.classes.graph,
    height: '40rem',
  },
  graph: {
    height: '100%',
    width: '100%',
  },
  link: theme.classes.poweredByLink,
}));

// only 12.. that'll do for now?
const COLOURS = [
  '#276419',
  '#4d9221',
  '#7fbc41',
  '#b8e186',
  '#e6f5d0',
  '#f7f7f7',
  '#fde0ef',
  '#f1b6da',
  '#de77ae',
  '#c51b7d',
  '#8e0152',
];
const Move = (x: number, y: number): string => `M${x},${y}`;
const Line = (x: number, y: number): string => `L${x},${y}`;
const Arc = (x: number, y: number, arcFlag: LargeArcFlag): string =>
  `A${1 * SVG_SCALE},${1 * SVG_SCALE},0,${arcFlag},1,${x},${y}`;

function Wakatime(): JSX.Element {
  const classes = useStyles();
  const sectors = useMemo(() => {
    // geometry-wise 0degrees is at (1, 0)
    // we can css rotate the entire graph, or just start our math at the top instead
    let cumulativeAngle = ANGLE_OFFSET;
    const previousArcEnd = {
      x: Math.cos(2 * Math.PI * ANGLE_OFFSET) * SVG_SCALE,
      y: Math.sin(2 * Math.PI * ANGLE_OFFSET) * SVG_SCALE,
    };

    return WakatimeData.map((d, i) => {
      const endAngle = cumulativeAngle + d.percent;
      const arcX = Math.cos(2 * Math.PI * endAngle) * SVG_SCALE;
      const arcY = Math.sin(2 * Math.PI * endAngle) * SVG_SCALE;

      const labelAngle = cumulativeAngle + d.percent / 2;
      const labelX =
        Math.cos(2 * Math.PI * labelAngle) * (SVG_SCALE + TEXT_OFFSET);
      const labelY =
        Math.sin(2 * Math.PI * labelAngle) * (SVG_SCALE + TEXT_OFFSET);

      const path = (
        <path
          stroke="none"
          fill={COLOURS[i]}
          d={[
            // reset to the center
            Move(0, 0),
            // Line to the edge of the circle
            Line(previousArcEnd.x, previousArcEnd.y),
            // Draw the arc around the edge
            Arc(
              arcX,
              arcY,
              // if the slice takes more than 50%, we want the large arc
              d.percent > 0.5 ? LargeArcFlag.LargeArc : LargeArcFlag.SmallArc,
            ),
            // Line back to the center
            Line(0, 0),
          ].join(' ')}
        />
      );

      let anchor = 'start';
      if (labelAngle > 0.53 + ANGLE_OFFSET) {
        anchor = 'end';
      } else if (labelAngle < 0.47 + ANGLE_OFFSET) {
        anchor = 'start';
      } else {
        anchor = 'middle';
      }
      const label = (
        <text x={labelX} y={labelY} textAnchor={anchor}>
          {d.name}
        </text>
      );

      previousArcEnd.x = arcX;
      previousArcEnd.y = arcY;
      cumulativeAngle = endAngle;

      return (
        <g key={d.name}>
          {path}
          {label}
        </g>
      );
    });
  }, []);

  return (
    <Card>
      <CardTitle>Languages</CardTitle>
      <CardContent>
        <div className={classes.container}>
          <svg
            viewBox={`${-1 * GRAPH_VIEWBOX_MODIFIER} ${
              -1 * GRAPH_VIEWBOX_MODIFIER
            } ${2 * GRAPH_VIEWBOX_MODIFIER} ${2 * GRAPH_VIEWBOX_MODIFIER}`}
            className={classes.graph}>
            {sectors}
          </svg>
        </div>
        <div className={classes.link}>
          Powered by <a href={SOCIAL.wakatime}>Wakatime</a>
        </div>
      </CardContent>
    </Card>
  );
}

export { Wakatime };
