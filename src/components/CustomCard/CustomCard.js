import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRight20 } from '@carbon/icons-react';

import { customCard, customCardTitle, customCardContent, customCardInner } from './CustomCard.module.scss';

const CustomCard = ({ href, title, children }) => (
  <div className={`${customCard}`}>
    <a href={href} className={`bx--tile bx--tile--clickable ${customCardInner}`}>
      <h4 className={customCardTitle}>{title}</h4>
      <div className={customCardContent}>{children}</div>
      <div>
        <ArrowRight20 aria-label="Open" />
      </div>
    </a>
  </div>
);

export default CustomCard;
