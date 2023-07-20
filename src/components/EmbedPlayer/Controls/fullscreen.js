import React from 'react';
import { Button } from '@carbon/react';
import { Maximize, Minimize } from '@carbon/icons-react';
import * as styles from './index.module.scss';

export const FullScreenControls = ({ onFullScreen, fullscreen, ready }) => (
  <div className={styles.toolboxRow}>
    <div>
      <Button
        kind="primary"
        onClick={onFullScreen}
        renderIcon={!fullscreen ? Maximize : Minimize}
        disabled={!ready}
        size={16}
      >
        {`${!fullscreen ? 'Enter' : 'Exit'} fullscreen`}
      </Button>
    </div>
  </div>
);
