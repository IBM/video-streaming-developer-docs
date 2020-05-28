/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from 'react';

import Container from 'gatsby-theme-carbon/src/components/Container';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from './Header';
import Footer from './Footer';
import Switcher from './Switcher/Switcher';

import 'gatsby-theme-carbon/src/styles/index.scss';

const Layout = ({ children, homepage, theme, titleType, pageTitle, pageDescription, pageKeywords, tabs, location }) => {
  const is404 = children.key === null;

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <>
      <Meta titleType={titleType} pageTitle={pageTitle} pageDescription={pageDescription} pageKeywords={pageKeywords} />
      <Header homepage={homepage} is404Page={is404} theme={theme} location={location} />
      <Switcher />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
