import React, { useState, useEffect } from 'react';
import { Button, TextInput, Dropdown } from '@carbon/react';
import * as styles from './LoadContent.module.scss';

const restrictValue = (value) => {
  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return value.length ? 0 : '';
  }
  return parsed.toString();
};

const toInternalValue = (type) => (type === 'Video' ? 'recorded' : 'channel');

const toDisplayValue = (content) => (content[0] === 'recorded' ? 'Video' : 'Channel');

export const LoadContent = ({ content = [], disabled = false, placeholder = 'Content Id', onLoad = () => {} } = {}) => {
  const [channelType, setChannelType] = useState(toDisplayValue(content));
  const [channelId, setChannelId] = useState(content[1]);

  useEffect(() => {
    setChannelType(toDisplayValue(content));
    setChannelId(content[1]);
  }, [content]);

  return (
    <div>
      <div className="bx--label">Content</div>
      <div className={styles.fields}>
        <div className={styles.dropdown}>
          <Dropdown
            id="channelType"
            items={['Channel', 'Video']}
            selectedItem={channelType}
            onChange={(ev) => setChannelType(ev.selectedItem)}
            disabled={disabled}
          />
        </div>
        <TextInput
          id="channelId"
          placeholder={placeholder}
          value={channelId}
          onChange={(e) => setChannelId(restrictValue(e.target.value))}
          disabled={disabled}
        />
        <Button disabled={disabled} onClick={() => onLoad(toInternalValue(channelType), channelId)} size="field">
          Load
        </Button>
      </div>
    </div>
  );
};
