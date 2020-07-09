import React from 'react';
import { PauseFilled16, PlayFilledAlt16 } from '@carbon/icons-react';
import { Button, Tag } from 'carbon-components-react';
import * as styles from './index.module.scss';

const labels = [
  { name: 'LIVE', type: 'red' },
  { name: 'OFFLINE', type: 'gray' },
  { name: 'PLAYING', type: 'cyan' },
  { name: 'ENDED', type: 'magenta' },
];

export const BasicControls = ({ onPlay, onPause, ready, activeLabels }) => {
  return (
    <div className={styles.toolboxRow}>
      <div>
        <Button onClick={onPlay} renderIcon={PlayFilledAlt16} disabled={!ready}>
          Play
        </Button>
        <Button kind="secondary" renderIcon={PauseFilled16} onClick={onPause} disabled={!ready}>
          Pause
        </Button>
      </div>
      <div className={styles.labels}>
        {labels
          .filter((label) =>
            activeLabels.some((activeLabel) => {
              return activeLabel === label.name;
            }),
          )
          .map((label) => (
            <Tag key={label} type={label.type}>
              {label.name}
            </Tag>
          ))}
      </div>
    </div>
  );
};
