/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from 'react';

import Container from 'gatsby-theme-carbon/src/components/Container';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import Meta from './Meta';
import LeftNav from './LeftNav/LeftNav';
import Header from './Header/Header';
import Footer from './Footer';

import 'gatsby-theme-carbon/src/styles/index.scss';
import { layout } from '../../styles/Layout.module.scss';

function Layout({ children, homepage, theme, titleType, pageTitle, pageDescription, pageKeywords, tabs, location }) {
  const is404 = children.key === null;
  const { isSwitcherEnabled } = useMetadata();

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
    <div className={layout}>
      <Meta titleType={titleType} pageTitle={pageTitle} pageDescription={pageDescription} pageKeywords={pageKeywords} />
      <Header homepage={homepage} />
      {isSwitcherEnabled && <Switcher />}
      <LeftNav homepage={homepage} is404Page={is404} location={location} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
