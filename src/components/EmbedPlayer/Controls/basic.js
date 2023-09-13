import React from 'react';
import { PauseFilled, PlayFilledAlt } from '@carbon/icons-react';
import { Button, Tag } from '@carbon/react';
import * as styles from './index.module.scss';

const labels = [
  { name: 'LIVE', type: 'red' },
  { name: 'OFFLINE', type: 'gray' },
  { name: 'PLAYING', type: 'cyan' },
  { name: 'ENDED', type: 'magenta' },
];

// eslint-disable-next-line import/prefer-default-export
export function BasicControls({ onPlay, onPause, ready, activeLabels }) {
  return (
    <div className={styles.toolboxRow}>
      <div>
        <Button onClick={onPlay} renderIcon={PlayFilledAlt} size="md" disabled={!ready}>
          Play
        </Button>
        <Button kind="secondary" renderIcon={PauseFilled} size="md" onClick={onPause} disabled={!ready}>
          Pause
        </Button>
      </div>
      <div className={styles.labels}>
        {labels
          .filter((label) => activeLabels.some((activeLabel) => activeLabel === label.name))
          .map((label) => (
            <Tag key={label} type={label.type}>
              {label.name}
            </Tag>
          ))}
      </div>
    </div>
  );
}
