import React from 'react';
import cx from 'classnames';
import { title } from './LeftNavShadow.module.scss';

function Title({ children }) {
  return <li className={cx('bx--side-nav__item', title)}>{children}</li>;
}

export default Title;
