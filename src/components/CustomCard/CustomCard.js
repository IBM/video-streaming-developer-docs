import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRight20 } from '@carbon/icons-react';
import cx from 'classnames';

import {
  customCard,
  customCardDark,
  customCardTitle,
  customCardContent,
  customCardInner,
  customCardIcon,
  customCardContentDecorator,
} from './CustomCard.module.scss';

const CustomCard = ({ href, title, content, theme, decorator }) => {
  const customCardInnerClasses = cx(customCardInner, {
    [customCardDark]: theme === 'light',
    [customCardContentDecorator]: decorator,
  });

  const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

  return (
    <div className={`${customCard}`}>
      <ConditionalWrapper condition={href} wrapper={(children) => <a href={href}>{children}</a>}>
        <div className={customCardInnerClasses}>
          <h4 className={customCardTitle}>{title}</h4>
          <div className={customCardContent}>{content}</div>
          <div className={customCardIcon}>
            <ArrowRight20 aria-label="Open" />
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

export default CustomCard;
