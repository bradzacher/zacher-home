/**
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED!
 *     ANY MANUAL CHANGES WILL BE LOST!
 */

import classnames from 'classnames';
import React from 'react';

import { createUseThemedStyles } from '../Theme';

const useStyles = createUseThemedStyles(theme => ({
  'ContributionCalendar-day': {
    '&, &[data-level="0"]': {
      backgroundColor: '#ebedf0',
      border: 'rgba(27, 31, 35, 0.06)',
    },
    '&[data-level="1"]': {
      backgroundColor: '#9be9a8',
      border: 'rgba(27, 31, 35, 0.06)',
    },
    '&[data-level="2"]': {
      backgroundColor: '#40c463',
      border: 'rgba(27, 31, 35, 0.06)',
    },
    '&[data-level="3"]': {
      backgroundColor: '#30a14e',
      border: 'rgba(27, 31, 35, 0.06)',
    },
    '&[data-level="4"]': {
      backgroundColor: '#216e39',
      border: 'rgba(27, 31, 35, 0.06)',
    },
  },
  '.ContributionCalendar-grid': {
    width: 'max-content',
    borderCollapse: 'separate',
  },
  'ContributionCalendar-label': {
    color: theme.palette.grey,
    fontSize: '1rem',
  },
  'sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    wordWrap: 'normal',
    border: '0',
  },
}));

function GithubCalendar(): JSX.Element {
  const classes = useStyles();
  return (
    <table
      data-hydro-click='{"event_type":"user_profile.click","payload":{"profile_user_id":7462525,"target":"CONTRIBUTION_CALENDAR_SQUARE","user_id":null,"originating_url":"https://github.com/users/bradzacher/contributions"}}'
      data-hydro-click-hmac="d8270ac94b6843d7815dbf2d1e3134418e497c738ba35c2d4d94315cbd54647e"
      role="grid"
      aria-readonly="true"
      className={classnames([
        'ContributionCalendar-grid',
        'js-calendar-graph-table',
      ])}
      style={{
        borderSpacing: '3px',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <caption className={classnames([classes['sr-only']])}>
        Contribution Graph
      </caption>

      <thead>
        <tr style={{ height: '13px' }}>
          <td style={{ width: '28px' }}>
            <span className={classnames([classes['sr-only']])}>
              Day of Week
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={2}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>October</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Oct
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>November</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Nov
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={5}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>December</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Dec
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>January</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Jan
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>February</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Feb
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={5}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>March</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Mar
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>April</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Apr
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>May</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              May
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={5}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>June</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Jun
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>July</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Jul
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={4}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>August</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Aug
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={5}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>September</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Sep
            </span>
          </td>

          <td
            className={classnames([classes['ContributionCalendar-label']])}
            colSpan={3}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>October</span>
            <span aria-hidden="true" style={{ position: 'absolute', top: '0' }}>
              Oct
            </span>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Sunday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'Circle(0)',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Sun
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-22"
            id="contribution-day-component-0-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-10-29"
            id="contribution-day-component-0-1"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-11-05"
            id="contribution-day-component-0-2"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-12"
            id="contribution-day-component-0-3"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-19"
            id="contribution-day-component-0-4"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-11-26"
            id="contribution-day-component-0-5"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-03"
            id="contribution-day-component-0-6"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-10"
            id="contribution-day-component-0-7"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-17"
            id="contribution-day-component-0-8"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-24"
            id="contribution-day-component-0-9"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-31"
            id="contribution-day-component-0-10"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-07"
            id="contribution-day-component-0-11"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-14"
            id="contribution-day-component-0-12"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-01-21"
            id="contribution-day-component-0-13"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-28"
            id="contribution-day-component-0-14"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-04"
            id="contribution-day-component-0-15"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-02-11"
            id="contribution-day-component-0-16"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-18"
            id="contribution-day-component-0-17"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-02-25"
            id="contribution-day-component-0-18"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-03"
            id="contribution-day-component-0-19"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-10"
            id="contribution-day-component-0-20"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-17"
            id="contribution-day-component-0-21"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-24"
            id="contribution-day-component-0-22"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-31"
            id="contribution-day-component-0-23"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-07"
            id="contribution-day-component-0-24"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-14"
            id="contribution-day-component-0-25"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-21"
            id="contribution-day-component-0-26"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-28"
            id="contribution-day-component-0-27"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-05"
            id="contribution-day-component-0-28"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-12"
            id="contribution-day-component-0-29"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-19"
            id="contribution-day-component-0-30"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-26"
            id="contribution-day-component-0-31"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-02"
            id="contribution-day-component-0-32"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-09"
            id="contribution-day-component-0-33"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-16"
            id="contribution-day-component-0-34"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-23"
            id="contribution-day-component-0-35"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-30"
            id="contribution-day-component-0-36"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-07-07"
            id="contribution-day-component-0-37"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-14"
            id="contribution-day-component-0-38"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-21"
            id="contribution-day-component-0-39"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-28"
            id="contribution-day-component-0-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-04"
            id="contribution-day-component-0-41"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-11"
            id="contribution-day-component-0-42"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-08-18"
            id="contribution-day-component-0-43"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-25"
            id="contribution-day-component-0-44"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-09-01"
            id="contribution-day-component-0-45"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-08"
            id="contribution-day-component-0-46"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-15"
            id="contribution-day-component-0-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-22"
            id="contribution-day-component-0-48"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-09-29"
            id="contribution-day-component-0-49"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-10-06"
            id="contribution-day-component-0-50"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-10-13"
            id="contribution-day-component-0-51"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="52"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-10-20"
            id="contribution-day-component-0-52"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Monday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'None',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Mon
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-23"
            id="contribution-day-component-1-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-30"
            id="contribution-day-component-1-1"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-06"
            id="contribution-day-component-1-2"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-13"
            id="contribution-day-component-1-3"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2023-11-20"
            id="contribution-day-component-1-4"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-27"
            id="contribution-day-component-1-5"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-04"
            id="contribution-day-component-1-6"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-11"
            id="contribution-day-component-1-7"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-18"
            id="contribution-day-component-1-8"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-25"
            id="contribution-day-component-1-9"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-01-01"
            id="contribution-day-component-1-10"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-08"
            id="contribution-day-component-1-11"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-01-15"
            id="contribution-day-component-1-12"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-22"
            id="contribution-day-component-1-13"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-29"
            id="contribution-day-component-1-14"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-05"
            id="contribution-day-component-1-15"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-12"
            id="contribution-day-component-1-16"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-19"
            id="contribution-day-component-1-17"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-26"
            id="contribution-day-component-1-18"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-04"
            id="contribution-day-component-1-19"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-11"
            id="contribution-day-component-1-20"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-03-18"
            id="contribution-day-component-1-21"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-25"
            id="contribution-day-component-1-22"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-01"
            id="contribution-day-component-1-23"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-08"
            id="contribution-day-component-1-24"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-04-15"
            id="contribution-day-component-1-25"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-04-22"
            id="contribution-day-component-1-26"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-29"
            id="contribution-day-component-1-27"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-06"
            id="contribution-day-component-1-28"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-13"
            id="contribution-day-component-1-29"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-20"
            id="contribution-day-component-1-30"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-27"
            id="contribution-day-component-1-31"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-03"
            id="contribution-day-component-1-32"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-10"
            id="contribution-day-component-1-33"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-17"
            id="contribution-day-component-1-34"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-24"
            id="contribution-day-component-1-35"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-07-01"
            id="contribution-day-component-1-36"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-07-08"
            id="contribution-day-component-1-37"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-15"
            id="contribution-day-component-1-38"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-07-22"
            id="contribution-day-component-1-39"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-07-29"
            id="contribution-day-component-1-40"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-05"
            id="contribution-day-component-1-41"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-12"
            id="contribution-day-component-1-42"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-19"
            id="contribution-day-component-1-43"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-26"
            id="contribution-day-component-1-44"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-09-02"
            id="contribution-day-component-1-45"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-09-09"
            id="contribution-day-component-1-46"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-16"
            id="contribution-day-component-1-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-23"
            id="contribution-day-component-1-48"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-09-30"
            id="contribution-day-component-1-49"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-10-07"
            id="contribution-day-component-1-50"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-10-14"
            id="contribution-day-component-1-51"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="52"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-21"
            id="contribution-day-component-1-52"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Tuesday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'Circle(0)',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Tue
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-24"
            id="contribution-day-component-2-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-31"
            id="contribution-day-component-2-1"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-07"
            id="contribution-day-component-2-2"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-14"
            id="contribution-day-component-2-3"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-21"
            id="contribution-day-component-2-4"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2023-11-28"
            id="contribution-day-component-2-5"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-05"
            id="contribution-day-component-2-6"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-12"
            id="contribution-day-component-2-7"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-19"
            id="contribution-day-component-2-8"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-26"
            id="contribution-day-component-2-9"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-02"
            id="contribution-day-component-2-10"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-09"
            id="contribution-day-component-2-11"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-01-16"
            id="contribution-day-component-2-12"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-23"
            id="contribution-day-component-2-13"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-30"
            id="contribution-day-component-2-14"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-06"
            id="contribution-day-component-2-15"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-13"
            id="contribution-day-component-2-16"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-20"
            id="contribution-day-component-2-17"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-27"
            id="contribution-day-component-2-18"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-03-05"
            id="contribution-day-component-2-19"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-12"
            id="contribution-day-component-2-20"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-19"
            id="contribution-day-component-2-21"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-26"
            id="contribution-day-component-2-22"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-02"
            id="contribution-day-component-2-23"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-09"
            id="contribution-day-component-2-24"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-16"
            id="contribution-day-component-2-25"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-23"
            id="contribution-day-component-2-26"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-30"
            id="contribution-day-component-2-27"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-07"
            id="contribution-day-component-2-28"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-14"
            id="contribution-day-component-2-29"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-21"
            id="contribution-day-component-2-30"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-05-28"
            id="contribution-day-component-2-31"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-04"
            id="contribution-day-component-2-32"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-11"
            id="contribution-day-component-2-33"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-18"
            id="contribution-day-component-2-34"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-25"
            id="contribution-day-component-2-35"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-02"
            id="contribution-day-component-2-36"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-07-09"
            id="contribution-day-component-2-37"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-16"
            id="contribution-day-component-2-38"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-23"
            id="contribution-day-component-2-39"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-30"
            id="contribution-day-component-2-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-06"
            id="contribution-day-component-2-41"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-13"
            id="contribution-day-component-2-42"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-20"
            id="contribution-day-component-2-43"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-27"
            id="contribution-day-component-2-44"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-09-03"
            id="contribution-day-component-2-45"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-09-10"
            id="contribution-day-component-2-46"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-17"
            id="contribution-day-component-2-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-09-24"
            id="contribution-day-component-2-48"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-10-01"
            id="contribution-day-component-2-49"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-10-08"
            id="contribution-day-component-2-50"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-10-15"
            id="contribution-day-component-2-51"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="52"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-22"
            id="contribution-day-component-2-52"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Wednesday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'None',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Wed
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-25"
            id="contribution-day-component-3-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-01"
            id="contribution-day-component-3-1"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-08"
            id="contribution-day-component-3-2"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-15"
            id="contribution-day-component-3-3"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-22"
            id="contribution-day-component-3-4"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2023-11-29"
            id="contribution-day-component-3-5"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-06"
            id="contribution-day-component-3-6"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-13"
            id="contribution-day-component-3-7"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-20"
            id="contribution-day-component-3-8"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-27"
            id="contribution-day-component-3-9"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-03"
            id="contribution-day-component-3-10"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-10"
            id="contribution-day-component-3-11"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-17"
            id="contribution-day-component-3-12"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-24"
            id="contribution-day-component-3-13"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-31"
            id="contribution-day-component-3-14"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-07"
            id="contribution-day-component-3-15"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-14"
            id="contribution-day-component-3-16"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-21"
            id="contribution-day-component-3-17"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-28"
            id="contribution-day-component-3-18"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-06"
            id="contribution-day-component-3-19"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-13"
            id="contribution-day-component-3-20"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-20"
            id="contribution-day-component-3-21"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-27"
            id="contribution-day-component-3-22"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-03"
            id="contribution-day-component-3-23"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-10"
            id="contribution-day-component-3-24"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-17"
            id="contribution-day-component-3-25"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-24"
            id="contribution-day-component-3-26"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-05-01"
            id="contribution-day-component-3-27"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-08"
            id="contribution-day-component-3-28"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-15"
            id="contribution-day-component-3-29"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-22"
            id="contribution-day-component-3-30"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-29"
            id="contribution-day-component-3-31"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-05"
            id="contribution-day-component-3-32"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-12"
            id="contribution-day-component-3-33"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-06-19"
            id="contribution-day-component-3-34"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-26"
            id="contribution-day-component-3-35"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-03"
            id="contribution-day-component-3-36"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-07-10"
            id="contribution-day-component-3-37"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-17"
            id="contribution-day-component-3-38"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-24"
            id="contribution-day-component-3-39"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-31"
            id="contribution-day-component-3-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-08-07"
            id="contribution-day-component-3-41"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-14"
            id="contribution-day-component-3-42"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-08-21"
            id="contribution-day-component-3-43"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-28"
            id="contribution-day-component-3-44"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-09-04"
            id="contribution-day-component-3-45"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-11"
            id="contribution-day-component-3-46"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-18"
            id="contribution-day-component-3-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-25"
            id="contribution-day-component-3-48"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-10-02"
            id="contribution-day-component-3-49"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-09"
            id="contribution-day-component-3-50"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-10-16"
            id="contribution-day-component-3-51"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td />
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Thursday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'Circle(0)',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Thu
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-26"
            id="contribution-day-component-4-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-02"
            id="contribution-day-component-4-1"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-11-09"
            id="contribution-day-component-4-2"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-16"
            id="contribution-day-component-4-3"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-23"
            id="contribution-day-component-4-4"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-30"
            id="contribution-day-component-4-5"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-07"
            id="contribution-day-component-4-6"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-12-14"
            id="contribution-day-component-4-7"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-21"
            id="contribution-day-component-4-8"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-28"
            id="contribution-day-component-4-9"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-04"
            id="contribution-day-component-4-10"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-11"
            id="contribution-day-component-4-11"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-01-18"
            id="contribution-day-component-4-12"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-01-25"
            id="contribution-day-component-4-13"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-01"
            id="contribution-day-component-4-14"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-08"
            id="contribution-day-component-4-15"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-15"
            id="contribution-day-component-4-16"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-22"
            id="contribution-day-component-4-17"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-02-29"
            id="contribution-day-component-4-18"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-03-07"
            id="contribution-day-component-4-19"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-14"
            id="contribution-day-component-4-20"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-21"
            id="contribution-day-component-4-21"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-28"
            id="contribution-day-component-4-22"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-04"
            id="contribution-day-component-4-23"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-11"
            id="contribution-day-component-4-24"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-04-18"
            id="contribution-day-component-4-25"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-25"
            id="contribution-day-component-4-26"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-05-02"
            id="contribution-day-component-4-27"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-09"
            id="contribution-day-component-4-28"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-16"
            id="contribution-day-component-4-29"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-23"
            id="contribution-day-component-4-30"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-30"
            id="contribution-day-component-4-31"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-06"
            id="contribution-day-component-4-32"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-13"
            id="contribution-day-component-4-33"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-20"
            id="contribution-day-component-4-34"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-06-27"
            id="contribution-day-component-4-35"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-04"
            id="contribution-day-component-4-36"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-11"
            id="contribution-day-component-4-37"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-18"
            id="contribution-day-component-4-38"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-25"
            id="contribution-day-component-4-39"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-01"
            id="contribution-day-component-4-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-08-08"
            id="contribution-day-component-4-41"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-08-15"
            id="contribution-day-component-4-42"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-22"
            id="contribution-day-component-4-43"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-29"
            id="contribution-day-component-4-44"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-09-05"
            id="contribution-day-component-4-45"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-09-12"
            id="contribution-day-component-4-46"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-19"
            id="contribution-day-component-4-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-26"
            id="contribution-day-component-4-48"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-03"
            id="contribution-day-component-4-49"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-10-10"
            id="contribution-day-component-4-50"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-10-17"
            id="contribution-day-component-4-51"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td />
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Friday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'None',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Fri
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-10-27"
            id="contribution-day-component-5-0"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-03"
            id="contribution-day-component-5-1"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2023-11-10"
            id="contribution-day-component-5-2"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2023-11-17"
            id="contribution-day-component-5-3"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-24"
            id="contribution-day-component-5-4"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-01"
            id="contribution-day-component-5-5"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-08"
            id="contribution-day-component-5-6"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-15"
            id="contribution-day-component-5-7"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-22"
            id="contribution-day-component-5-8"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-29"
            id="contribution-day-component-5-9"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-05"
            id="contribution-day-component-5-10"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-12"
            id="contribution-day-component-5-11"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-19"
            id="contribution-day-component-5-12"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-26"
            id="contribution-day-component-5-13"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-02"
            id="contribution-day-component-5-14"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-09"
            id="contribution-day-component-5-15"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-02-16"
            id="contribution-day-component-5-16"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-23"
            id="contribution-day-component-5-17"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-01"
            id="contribution-day-component-5-18"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-08"
            id="contribution-day-component-5-19"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-03-15"
            id="contribution-day-component-5-20"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-22"
            id="contribution-day-component-5-21"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-29"
            id="contribution-day-component-5-22"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-05"
            id="contribution-day-component-5-23"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-12"
            id="contribution-day-component-5-24"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-19"
            id="contribution-day-component-5-25"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-04-26"
            id="contribution-day-component-5-26"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-03"
            id="contribution-day-component-5-27"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-10"
            id="contribution-day-component-5-28"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-05-17"
            id="contribution-day-component-5-29"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-24"
            id="contribution-day-component-5-30"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-05-31"
            id="contribution-day-component-5-31"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-07"
            id="contribution-day-component-5-32"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-14"
            id="contribution-day-component-5-33"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-21"
            id="contribution-day-component-5-34"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-06-28"
            id="contribution-day-component-5-35"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-05"
            id="contribution-day-component-5-36"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-07-12"
            id="contribution-day-component-5-37"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-07-19"
            id="contribution-day-component-5-38"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-07-26"
            id="contribution-day-component-5-39"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-02"
            id="contribution-day-component-5-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-09"
            id="contribution-day-component-5-41"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-16"
            id="contribution-day-component-5-42"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-08-23"
            id="contribution-day-component-5-43"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-30"
            id="contribution-day-component-5-44"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-06"
            id="contribution-day-component-5-45"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-3"
            style={{ width: '10px' }}
            data-date="2024-09-13"
            id="contribution-day-component-5-46"
            data-level="3"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-20"
            id="contribution-day-component-5-47"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-09-27"
            id="contribution-day-component-5-48"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-4"
            style={{ width: '10px' }}
            data-date="2024-10-04"
            id="contribution-day-component-5-49"
            data-level="4"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-11"
            id="contribution-day-component-5-50"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-10-18"
            id="contribution-day-component-5-51"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td />
        </tr>
        <tr style={{ height: '10px' }}>
          <td
            className={classnames([classes['ContributionCalendar-label']])}
            style={{ position: 'relative' }}>
            <span className={classnames([classes['sr-only']])}>Saturday</span>
            <span
              aria-hidden="true"
              style={{
                clipPath: 'Circle(0)',
                position: 'absolute',
                bottom: '-3px',
              }}>
              Sat
            </span>
          </td>

          <td
            tabIndex={0}
            data-ix="0"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-10-28"
            id="contribution-day-component-6-0"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="1"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-11-04"
            id="contribution-day-component-6-1"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="2"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-11"
            id="contribution-day-component-6-2"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="3"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-11-18"
            id="contribution-day-component-6-3"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="4"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-11-25"
            id="contribution-day-component-6-4"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="5"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-02"
            id="contribution-day-component-6-5"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="6"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-09"
            id="contribution-day-component-6-6"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="7"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-16"
            id="contribution-day-component-6-7"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="8"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2023-12-23"
            id="contribution-day-component-6-8"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="9"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2023-12-30"
            id="contribution-day-component-6-9"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="10"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-01-06"
            id="contribution-day-component-6-10"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="11"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-13"
            id="contribution-day-component-6-11"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="12"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-01-20"
            id="contribution-day-component-6-12"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="13"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-01-27"
            id="contribution-day-component-6-13"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="14"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-02-03"
            id="contribution-day-component-6-14"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="15"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-10"
            id="contribution-day-component-6-15"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="16"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-17"
            id="contribution-day-component-6-16"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="17"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-02-24"
            id="contribution-day-component-6-17"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="18"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-02"
            id="contribution-day-component-6-18"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="19"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-03-09"
            id="contribution-day-component-6-19"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="20"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-03-16"
            id="contribution-day-component-6-20"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="21"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-23"
            id="contribution-day-component-6-21"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="22"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-03-30"
            id="contribution-day-component-6-22"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="23"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-04-06"
            id="contribution-day-component-6-23"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="24"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-13"
            id="contribution-day-component-6-24"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="25"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-20"
            id="contribution-day-component-6-25"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="26"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-04-27"
            id="contribution-day-component-6-26"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="27"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-04"
            id="contribution-day-component-6-27"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="28"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-11"
            id="contribution-day-component-6-28"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="29"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-18"
            id="contribution-day-component-6-29"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="30"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-05-25"
            id="contribution-day-component-6-30"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="31"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-01"
            id="contribution-day-component-6-31"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="32"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-08"
            id="contribution-day-component-6-32"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="33"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-06-15"
            id="contribution-day-component-6-33"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="34"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-22"
            id="contribution-day-component-6-34"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="35"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-06-29"
            id="contribution-day-component-6-35"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="36"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-06"
            id="contribution-day-component-6-36"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="37"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-07-13"
            id="contribution-day-component-6-37"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="38"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-20"
            id="contribution-day-component-6-38"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="39"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-07-27"
            id="contribution-day-component-6-39"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="40"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-03"
            id="contribution-day-component-6-40"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="41"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-08-10"
            id="contribution-day-component-6-41"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="42"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-17"
            id="contribution-day-component-6-42"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="43"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-2"
            style={{ width: '10px' }}
            data-date="2024-08-24"
            id="contribution-day-component-6-43"
            data-level="2"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="44"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-08-31"
            id="contribution-day-component-6-44"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="45"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-09-07"
            id="contribution-day-component-6-45"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="46"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-1"
            style={{ width: '10px' }}
            data-date="2024-09-14"
            id="contribution-day-component-6-46"
            data-level="1"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="47"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-09-21"
            id="contribution-day-component-6-47"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="48"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-09-28"
            id="contribution-day-component-6-48"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="49"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-10-05"
            id="contribution-day-component-6-49"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="50"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-10-12"
            id="contribution-day-component-6-50"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td
            tabIndex={0}
            data-ix="51"
            aria-selected="false"
            aria-describedby="contribution-graph-legend-level-0"
            style={{ width: '10px' }}
            data-date="2024-10-19"
            id="contribution-day-component-6-51"
            data-level="0"
            role="gridcell"
            data-view-component="true"
            className={classnames([classes['ContributionCalendar-day']])}></td>

          <td />
        </tr>
      </tbody>
    </table>
  );
}

export { GithubCalendar };
