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

export const BasicControls = ({ onPlay, onPause, ready, activeLabels }) => (
  <div className={styles.toolboxRow}>
    <div>
      <Button onClick={onPlay} renderIcon={PlayFilledAlt} size={16} disabled={!ready}>
        Play
      </Button>
      <Button kind="secondary" renderIcon={PauseFilled} size={16} onClick={onPause} disabled={!ready}>
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
