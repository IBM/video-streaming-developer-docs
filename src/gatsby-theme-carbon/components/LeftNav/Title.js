import React from 'react';
import cx from 'classnames';
import { title } from './LeftNav.module.scss';

const Title = ({ children }) => {
  return <li className={cx('bx--side-nav__item', title)}>{children}</li>;
};

export default Title;
