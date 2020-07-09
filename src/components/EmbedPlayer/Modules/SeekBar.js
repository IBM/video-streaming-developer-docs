import React from 'react';
import cx from 'classnames';
import * as styles from './SeekBar.module.scss';

function getProgressPercent(progress, duration) {
  if (!duration || !progress || duration <= 0 || progress <= 0) {
    return 0;
  }

  const ratio = progress / duration;
  return Math.max(0, Math.min(1, ratio));
}

function formatTime(sec) {
  if (!sec || sec <= 0) {
    return;
  }

  const time = new Date(sec * 1000);
  const hour = 60 ** 2;

  let formatted = time.toISOString().substr(11, 8);
  if (+sec < hour) {
    formatted = formatted.substr(3);
  }

  if (+sec > 24 * hour) {
    formatted = Math.floor(sec / hour) + formatted.substr(2);
  }

  return formatted;
}

export const SeekBar = ({ onSeek, progress, duration, ready }) => {
  const onSeekBar = (ev) => {
    if (!ready || !duration) {
      return;
    }

    const rect = ev.currentTarget.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const x = ev.clientX - rect.x;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    onSeek(ratio * duration);
  };

  const start = formatTime(progress) || '00:00';
  const end = formatTime(duration) || '--:--';
  const seekBarClasses = cx(styles.seekbar, {
    [styles.disabled]: !ready,
  });

  return (
    <div role="progressbar" tabIndex={0} onKeyPress={function noop() {}} onClick={onSeekBar} className={seekBarClasses}>
      <div className={styles.progress} style={{ width: `${getProgressPercent(progress, duration) * 100}%` }} />
      <div className={styles.timeStamps}>
        <div>{start}</div>
        <div>{end}</div>
      </div>
    </div>
  );
};
