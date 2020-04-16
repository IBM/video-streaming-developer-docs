import React from 'react';
import Header from './Header/Header';

const CustomHeader = props => (
  <Header {...props}>
    IBM&nbsp;<span>Video Streaming</span>
  </Header>
);

export default CustomHeader;
