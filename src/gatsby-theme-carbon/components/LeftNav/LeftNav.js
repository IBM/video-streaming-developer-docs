import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import { HeaderSideNavItems, SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import LeftNavHeaderMenus from '../Header/LeftNavHeaderMenus';

import Title from './Title';
import { sideNav } from './LeftNav.module.scss';

const LeftNav = ({ location, homepage, is404 }) => {
  const { leftNavIsOpen } = useContext(NavContext);

  let navItems = useNavItems();

  if (!location) {
    return '';
  }

  const { pathname } = location;
  let mainPathName = '';
  const availableMainPaths = {
    'api-basics': 'API basics',
    'channel-api': 'Channel API',
    'viewer-authentication-api': 'Viewer Authentication API',
    'player-api': 'Player API',
    'analytics-api': 'Analytics API',
    'broadcaster-sdk': 'Broadcaster SDK',
    'player-sdk': 'Player SDK',
  };

  Object.keys(availableMainPaths).forEach((availableMainPath) => {
    if (pathname.indexOf(availableMainPath) >= 0) {
      mainPathName = availableMainPath;
    }
  });

  let title = null;

  if (mainPathName) {
    title = availableMainPaths[mainPathName];
  }

  if (homepage || is404) {
    navItems = [];
  } else {
    navItems = navItems.filter((item) => {
      let showMainMenu = false;
      const { pages } = item;

      pages.forEach((subItem) => {
        const showSubMenu = subItem.path.indexOf(`/${mainPathName}`) === 0;

        if (showSubMenu) {
          showMainMenu = true;
        }
      });

      return showMainMenu;
    });
  }

  const renderNavItems = () =>
    navItems.map((item, i) => <LeftNavItem items={item.pages} category={item.title} key={i} />);

  return (
    <SideNav
      expanded={leftNavIsOpen}
      aria-label="Side navigation"
      className={classnames(
        {
          'bx--side-nav--website': true,
          'bx--side-nav--website--light': !homepage,
          'bx--side-nav--emptycontent': homepage || is404,
        },
        sideNav,
      )}
    >
      <SideNavItems>
        <HeaderSideNavItems>
          <LeftNavHeaderMenus />
        </HeaderSideNavItems>
        {title && <Title>{title}</Title>}
        {renderNavItems()}
      </SideNavItems>
    </SideNav>
  );
};

export default LeftNav;
