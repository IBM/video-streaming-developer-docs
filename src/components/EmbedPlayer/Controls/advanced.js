import React from 'react';
import { Dropdown } from 'carbon-components-react';
import { Property } from '../Modules/Property';
import { LoadContent } from '../Modules/LoadContent';
import * as styles from './index.module.scss';

const fallbackAutoQuality = {
  id: -1,
  label: { text: 'Auto' },
};

export const AdvancedControls = ({
  onGetDuration,
  onGetProgress,
  onGetViewers,
  onMediaChange,
  onSetSeek,
  onSetVolume,
  onSetQuality,
  embedQuality,
  embedViewers,
  embedContent,
  embedDuration,
  embedProgress,
  qualities,
  isLive,
  ready,
}) => {
  return (
    <>
      <div className={styles.toolboxRow}>
        <Dropdown
          titleText="Quality"
          items={qualities || [fallbackAutoQuality]}
          itemToString={(item) => {
            if (!item) {
              return '';
            }
            return item.id !== -1 ? item.label.text : 'Auto';
          }}
          onChange={(ev) => onSetQuality(ev.selectedItem.id)}
          disabled={!ready}
          selectedItem={(qualities || [fallbackAutoQuality]).find(
            (item) => item.id === (embedQuality !== undefined ? embedQuality : -1),
          )}
        />
        <Property
          text="Get viewers"
          label="Current viewers"
          value={embedViewers}
          onRequest={onGetViewers}
          disabled={!ready || !isLive()}
          readOnly
        />
      </div>
      <div className={styles.toolboxRow}>
        <Property
          text="Set volume"
          label="Volume"
          onRequest={onSetVolume}
          disabled={!ready}
          placeholder="0 - 100"
          restrictValue={(v) => {
            const parsed = parseInt(v, 10);
            if (Number.isNaN(parsed)) {
              return v.length ? 0 : '';
            }
            return Math.max(0, Math.min(100, parsed));
          }}
        />
        <Property
          text="Get duration"
          label="Video duration"
          value={embedDuration}
          onRequest={onGetDuration}
          disabled={!ready || isLive()}
          readOnly
        />
      </div>
      <div className={styles.toolboxRow}>
        <Property
          text="Set seek"
          label="Seek"
          onRequest={onSetSeek}
          disabled={!ready || isLive()}
          placeholder="Time in seconds"
        />
        <Property
          text="Get progress"
          label="Video progress"
          value={embedProgress}
          onRequest={onGetProgress}
          disabled={!ready || isLive()}
          readOnly
        />
      </div>
      <div className={styles.toolboxRow}>
        <LoadContent content={embedContent} onLoad={onMediaChange} disabled={!ready} />
      </div>
    </>
  );
};
