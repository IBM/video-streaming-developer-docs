import React from 'react';
import { Button, Slider } from '@carbon/react';
import { PauseFilled, PlayFilledAlt } from '@carbon/icons-react';
import { SeekBar } from '../Modules/SeekBar';
import * as styles from './index.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function CustomControls({ onPlay, onPause, onSeek, onVolume, progress, duration, ready }) {
  return (
    <>
      <div className={styles.toolboxRow}>
        <div className={styles.nowrap}>
          <Button onClick={onPlay} renderIcon={PlayFilledAlt} size="md" disabled={!ready}>
            Play
          </Button>
          <Button kind="secondary" renderIcon={PauseFilled} size="md" onClick={onPause} disabled={!ready}>
            Pause
          </Button>
        </div>
        <div className={styles.volume}>
          <Slider
            hideTextInput
            id="volume"
            inputType="number"
            labelText="Volume"
            max={100}
            min={0}
            onRelease={(ev) => onVolume(ev.value)}
            step={1}
            value={0}
            disabled={!ready}
          />
        </div>
      </div>
      <div className={styles.toolboxRow}>
        <SeekBar progress={progress} duration={duration} onSeek={onSeek} ready={ready} />
      </div>
    </>
  );
}
