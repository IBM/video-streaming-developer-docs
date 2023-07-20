import React from 'react';

import { HeaderNavigation } from '@carbon/react';
import HeaderNavItem from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNavItem';

import MainNavContent from '../MainNavContent';

function HeaderNav() {
  const navItems = MainNavContent;

  return (
    <HeaderNavigation className="cds--g100" aria-label="Carbon Design System">
      {navItems.map(({ pages, title }) => (
        <HeaderNavItem items={pages} category={title} key={title} />
      ))}
    </HeaderNavigation>
  );
}

export default HeaderNav;
