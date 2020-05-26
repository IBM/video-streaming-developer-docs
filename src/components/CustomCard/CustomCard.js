import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRight20 } from '@carbon/icons-react';

import {
  customCard,
  customCardDark,
  customCardTitle,
  customCardContent,
  customCardInner,
  customCardIcon,
  customCardContentDecorator,
} from './CustomCard.module.scss';

const CustomCard = ({ href, title, children, theme, decorator }) => (
  <div className={`${customCard}`}>
    <a
      href={href}
      className={`bx--tile bx--tile--clickable ${customCardInner} ${theme === 'dark' ? customCardDark : ''} ${
        decorator ? customCardContentDecorator : ''
      }`}
    >
      <h4 className={customCardTitle}>{title}</h4>
      <div className={customCardContent}>{children}</div>
      <div className={customCardIcon}>
        <ArrowRight20 aria-label="Open" />
      </div>
    </a>
  </div>
);

export default CustomCard;
