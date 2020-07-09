import React from 'react';
import { Button, Slider } from 'carbon-components-react';
import { PauseFilled16, PlayFilledAlt16 } from '@carbon/icons-react';
import { SeekBar } from '../Modules/SeekBar';
import * as styles from './index.module.scss';

export const CustomControls = ({ onPlay, onPause, onSeek, onVolume, progress, duration, ready }) => {
  return (
    <>
      <div className={styles.toolboxRow}>
        <div className={styles.nowrap}>
          <Button onClick={onPlay} renderIcon={PlayFilledAlt16} disabled={!ready}>
            Play
          </Button>
          <Button kind="secondary" renderIcon={PauseFilled16} onClick={onPause} disabled={!ready}>
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
};
