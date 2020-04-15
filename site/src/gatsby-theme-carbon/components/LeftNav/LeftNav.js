import React, { useContext } from 'react';
import classnames from 'classnames';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import LeftNavResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';
import { useWindowSize } from 'gatsby-theme-carbon/src/util/hooks';

import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';
import { sideNavDark } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss';

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
              <SideNavItems>
                  <LeftNavResourceLinks />
              </SideNavItems>
          </SideNav>
      </LeftNavWrapper>
  }

  const pathName = windowGlobal.location.pathname;
  const mainPathNameArray = windowGlobal.location.pathname.split('/');
  let mainPathName;
  const availableMainPaths = ['channel-api', 'another-api'];

  if (mainPathNameArray.length && mainPathNameArray[1]) {
      mainPathName = mainPathNameArray[1];
  }

  if (!mainPathName || availableMainPaths.indexOf(mainPathName) < 0) {
      return <LeftNavWrapper expanded={false}>
          <SideNav
              expanded
              defaultExpanded
              aria-label="Side navigation"
          >
              <SideNavItems>
                  <LeftNavResourceLinks />
              </SideNavItems>
          </SideNav>
      </LeftNavWrapper>
  }

  if (pathName.indexOf('/' + mainPathName) === 0) {
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
        <SideNavItems>
          {renderNavItems()}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
