import React, { useState } from 'react';
import cx from 'classnames';
import imgMulti1 from '../../../images/example-multiview-1.png';
import * as styles from './index.module.scss';

const views = [
  { url: imgMulti1, type: 'channel', id: 6540154 },
  { url: imgMulti1, type: 'channel', id: 17074538 },
  { url: imgMulti1, type: 'channel', id: 10414700 },
];

export const MultiControls = ({ onMediaChange, ready }) => {
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
};
