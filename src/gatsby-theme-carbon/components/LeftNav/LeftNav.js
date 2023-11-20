import React, { useContext, useRef, useEffect } from 'react';
import { HeaderSideNavItems, SideNav, SideNavItems } from '@carbon/react';
import { useNavItems } from 'gatsby-theme-carbon/src/util/NavItems';
import cx from 'classnames';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import LeftNavResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';
import * as styles from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import { leftNavShadowWrapper, sideNavShadow, sideNavWhiteShadow } from './LeftNavShadow.module.scss';
import LeftNavHeaderMenus from '../Header/LeftNavHeaderMenus';
import Title from './Title';
import MainNavContent from '../MainNavContent';

function LeftNav({ location, homepage, is404, theme }) {
  const { leftNavIsOpen, leftNavScrollTop, setLeftNavScrollTop, toggleNavState } = useContext(NavContext);

  const sideNavRef = useRef();
  const sideNavListRef = useRef();

  useEffect(() => {
    sideNavListRef.current = sideNavRef.current.querySelector('.sidenav-list');
  }, []);

  useEffect(() => {
    sideNavListRef.current.addEventListener('scroll', (e) => {
      setLeftNavScrollTop(e.target.scrollTop);
    });
  }, [setLeftNavScrollTop]);

  useEffect(() => {
    if (leftNavScrollTop >= 0 && !sideNavListRef?.current.scrollTop) {
      sideNavListRef.current.scrollTop = leftNavScrollTop;
    }
  }, [leftNavScrollTop]);

  const getLeftNavClassNames = () => {
    if (theme === 'dark' || homepage) {
      return styles.sideNavDark;
    }
    return [styles.sideNavWhite, sideNavWhiteShadow];
  };

  let navItems = useNavItems();
  const { navigationStyle } = useMetadata();

  const closeSwitcher = () => {
    toggleNavState('switcherIsOpen', 'close');
  };

  const { pathname } = location;
  let mainPathName = '';
  const availableMainPaths = {
    'api-basics': 'API basics',
    'channel-api': 'Channel API',
    'viewer-authentication-api': 'Viewer Authentication API',
    'player-api': 'Player API',
    'analytics-api': 'Analytics API',
    'ecdn-api': 'ECDN API',
    'organization-api': 'Organization API',
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
    navItems = MainNavContent;
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

  return (
    <LeftNavWrapper
      className={cx(leftNavShadowWrapper, {
        'cds--g100': homepage,
      })}
      expanded={leftNavIsOpen}
      onClick={closeSwitcher}
      onKeyPress={closeSwitcher}
    >
      <SideNav
        ref={sideNavRef}
        aria-label="Side navigation"
        expanded={leftNavIsOpen}
        defaultExpanded={!navigationStyle}
        inert
        isPersistent={!navigationStyle}
        className={cx(getLeftNavClassNames(), sideNavShadow)}
      >
        <SideNavItems
          className={cx('sidenav-list', {
            'sidenav-list--notitle': !title,
          })}
        >
          <HeaderSideNavItems>
            <LeftNavHeaderMenus />
          </HeaderSideNavItems>
          {title && <Title>{title}</Title>}
          {navItems.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <LeftNavItem items={item.pages} category={item.title} key={i} hasDivider={item.hasDivider} />
          ))}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
}

export default LeftNav;
