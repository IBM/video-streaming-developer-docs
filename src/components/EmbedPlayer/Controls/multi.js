import React, { useState } from 'react';
import cx from 'classnames';
import * as styles from './index.module.scss';

const views = [
  {
    url: 'https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_25964588,640x360,b:2020091508.jpg',
    type: 'channel',
    id: 25964588,
  },
  {
    url: 'https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_17074538,640x360,b:2020091508.jpg',
    type: 'channel',
    id: 17074538,
  },
  {
    url: 'https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_10414700,640x360,b:2020090903.jpg',
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
