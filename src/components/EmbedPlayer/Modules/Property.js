import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import * as styles from './Property.module.scss';

export const Property = ({
  disabled,
  value,
  onRequest,
  text,
  label,
  readOnly,
  placeholder,
  restrictValue = (v) => v,
} = {}) => {
  const [interactiveValue, setValue] = useState(null);

  return (
    <div>
      <label htmlFor="channelType" className="bx--label">
        {label}
      </label>
      <div className={styles.property}>
        {readOnly ? (
          <TextInput placeholder={placeholder} readOnly={readOnly} defaultValue={value} disabled={disabled} />
        ) : (
          <TextInput
            placeholder={placeholder}
            value={interactiveValue}
            onChange={(e) => setValue(restrictValue(e.target.value))}
            disabled={disabled}
          />
        )}
        <Button disabled={disabled} onClick={readOnly ? onRequest : () => onRequest(interactiveValue)} size="field">
          {text}
        </Button>
      </div>
    </div>
  );
};
