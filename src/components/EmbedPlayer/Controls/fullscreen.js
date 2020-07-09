import React from 'react';
import { Button } from 'carbon-components-react';
import { Maximize16, Minimize16 } from '@carbon/icons-react';
import * as styles from './index.module.scss';

export const FullScreenControls = ({ onFullScreen, fullscreen, ready }) => {
  return (
    <div className={styles.toolboxRow}>
      <div>
        <Button
          kind="primary"
          onClick={onFullScreen}
          renderIcon={!fullscreen ? Maximize16 : Minimize16}
          disabled={!ready}
        >
          {`${!fullscreen ? 'Enter' : 'Exit'} fullscreen`}
        </Button>
      </div>
    </div>
  );
};
