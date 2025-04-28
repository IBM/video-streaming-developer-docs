import React, { useState } from 'react';
import cx from 'classnames';
import * as styles from './index.module.scss';

const views = [
  {
    url: 'https://ustvstaticcdn2-a.akamaihd.net/i/video/picture/0/1/133/133979/133979911/1_22305497_133979911,1920x1080,b,1:2.jpg',
    type: 'channel',
    id: 22305497,
  },
  {
    url: 'https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_23935269,640x360,b:2020091508.jpg',
    type: 'channel',
    id: 23935269,
  },
  {
    url: 'https://ustvstaticcdn2-a.akamaihd.net/i/video/picture/0/1/128/128945/128945705/1_10414700_128945705,1920x1080,b,1:3.jpg',
    type: 'channel',
    id: 10414700,
  },
];

// eslint-disable-next-line import/prefer-default-export
export function MultiControls({ onMediaChange, ready }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.toolboxRow}>
      {views.map((view, idx) => {
        const wrapperClasses = cx(styles.viewWrapper, {
          [styles.active]: selected === idx,
          [styles.disabled]: !ready,
        });

        return (
          <div
            key={view.id}
            className={wrapperClasses}
            role="button"
            tabIndex={0}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                setSelected(idx);
                onMediaChange(view.type, view.id);
              }
            }}
            onClick={() => {
              setSelected(idx);
              onMediaChange(view.type, view.id);
            }}
          >
            <div className={styles.view}>
              <img src={view.url} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
