import React from 'react';

import { HeaderNavigation } from '@carbon/react';
import HeaderNavItem from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNavItem';

import MainNavContentHeader from '../MainNavContentHeader';

function HeaderNav() {
  const navItems = MainNavContentHeader;
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
