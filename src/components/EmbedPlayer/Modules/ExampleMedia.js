import React from 'react';
import { ClickableTile, Tag } from '@carbon/react';
import * as styles from './ExampleMedia.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function Media({ type, id, imgUrl, description, title, onClick }) {
  return (
    <div className={styles.wrapper}>
      <ClickableTile onClick={() => onClick(type, id)} className={styles.tile}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h4>
              <strong>{title}</strong>
            </h4>
            <Tag className={styles.tag} type={type === 'recorded' ? 'teal' : 'blue'}>
              {(type || '').toUpperCase()}
            </Tag>
          </div>
          {description}
        </div>
      </ClickableTile>
    </div>
  );
}
