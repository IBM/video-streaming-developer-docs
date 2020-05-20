import React from 'react';
import {
    title,
} from './LeftNav.module.scss';
import cx from 'classnames';

const Title = ({ children }) => {
    return (
        <li className={cx("bx--side-nav__item", title)}>
            {children}
        </li>
    );
};

export default Title;
