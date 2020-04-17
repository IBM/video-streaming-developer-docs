import React, { useContext } from 'react';
import classnames from 'classnames';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import { useWindowSize } from 'gatsby-theme-carbon/src/util/hooks';

import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';
import { sideNavDark } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss';
import Title from './Title';

const LeftNav = props => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  let navItems = useNavItems();

  const windowGlobal = typeof window !== 'undefined' && window;

  if (!windowGlobal || !windowGlobal.location) {
      return <LeftNavWrapper expanded={false}>
          <SideNav
              expanded
              defaultExpanded
              aria-label="Side navigation"
          >
          </SideNav>
      </LeftNavWrapper>
  }

  const pathName = windowGlobal.location.pathname;
  let mainPathName = '';
  const availableMainPaths = [
      'api-basics',
      'channel-api',
      'viewer-authentication-api',
      'player-api',
      'analytics-api'
  ];

  const titles = {
      'api-basics': 'API basics',
      'channel-api': 'Channel API',
      'viewer-authentication-api': 'Viewer Authentication API',
      'player-api': 'Player API',
      'analytics-api': 'Analytics API'
  };

  availableMainPaths.forEach((availableMainPath) => {
      if (pathName.indexOf(availableMainPath) >= 0) {
        mainPathName = availableMainPath;
      }
  });

  if (!mainPathName || availableMainPaths.indexOf(mainPathName) < 0) {
      return <></>;
  }

  let title = null;

  if (mainPathName) {
      title = titles[mainPathName];
  }

  if (pathName.indexOf('/' + mainPathName) >= 0) {
      navItems = navItems.filter((item) => {
          let showMainMenu = false;
          const pages = item.pages;

          pages.forEach((subItem) => {
              const showSubMenu = subItem.path.indexOf('/' + mainPathName) === 0;

              if (showSubMenu) {
                  showMainMenu = true;
              }
          });

          return showMainMenu;
      });
  }

  const renderNavItems = () =>
        navItems
        .map((item, i) => (
          <LeftNavItem items={item.pages} category={item.title} key={i} />
        )
    );

  if (!title) {
      return <></>;
  }

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className={classnames({
          [sideNavDark]: props.theme === 'dark' || props.homepage,
          'bx--side-nav--website': true,
          'bx--side-nav--website--dark':
            props.theme === 'dark' || props.homepage,
          'bx--side-nav--website--light':
            props.theme !== 'dark' && !props.homepage,
        })}
      >
        <Title>{title}</Title>
        <SideNavItems>
          {renderNavItems()}
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
