import React from 'react';
import { InlineNotification } from 'carbon-components-react';
import { withPrefix } from 'gatsby-link';
import { inlineNotification } from './HashAuthentication.module.scss';

const Notification = ({ isSuccess, setSuccess }) => {
  if (isSuccess === null) {
    return false;
  }

  const notificationProps = {
    success: {
      title: 'The authentication hash is valid',
      subtitle: '',
      kind: 'success',
    },
    error: {
      title: 'The authentication hash is not valid',
      subtitle: (
        <span>
          Please check the JSON object or learn how to generate the object in the{' '}
          <a href={withPrefix('/viewer-authentication-api-v2-getting-started')}>Viewer Authentication API document</a>
        </span>
      ),
      kind: 'error',
    },
  };

  const currentProps = isSuccess ? notificationProps.success : notificationProps.error;

  return (
    <InlineNotification
      className={inlineNotification}
      title={currentProps.title}
      subtitle={currentProps.subtitle}
      kind={currentProps.kind}
      onCloseButtonClick={() => setSuccess(null)}
    />
  );
};

export default Notification;
