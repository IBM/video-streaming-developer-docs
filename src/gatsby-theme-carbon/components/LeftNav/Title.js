import React from 'react';
import {
    title,
} from './LeftNav.module.scss';

const Title = ({ children }) => {
    return (
        <p className={title}>
            {children}
        </p>
    );
};

export default Title;
