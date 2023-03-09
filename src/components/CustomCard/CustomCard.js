import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRight } from '@carbon/icons-react';
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
    [customCardDark]: theme === 'dark',
    [customCardContentDecorator]: decorator,
  });

  const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

  const getCardItem = (hrefParam, children) => <a href={hrefParam}>{children}</a>;

  return (
    <div className={`${customCard}`}>
      <ConditionalWrapper condition={href} wrapper={(children) => getCardItem(href, children)}>
        <div className={customCardInnerClasses}>
          <h4 className={customCardTitle}>{title}</h4>
          <div className={customCardContent}>{content}</div>
          <div className={customCardIcon}>
            <ArrowRight size={20} aria-label="Open" />
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

export default CustomCard;
