import React from 'react';

import { HeaderNavigation } from '@carbon/react';
import HeaderNavItem from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNavItem';

import MainNavContent from '../MainNavContent';

function HeaderNav() {
  const navItems = MainNavContent;
  const label = 'IBM Video Streaming Developers Site';

  return (
    <HeaderNavigation className="cds--g100" aria-label={label}>
      {navItems.map(({ pages, title }) => (
        <HeaderNavItem items={pages} category={title} key={title} />
      ))}
    </HeaderNavigation>
  );
}

export default HeaderNav;
