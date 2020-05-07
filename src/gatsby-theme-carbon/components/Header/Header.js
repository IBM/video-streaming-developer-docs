import React, { useContext } from 'react';
import {
  Header as ShellHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenu,
  HeaderMenuItem,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerButton,
  switcherButton,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();

  const getMenuItems = () => (
    <>
      <HeaderMenuItem href="/api-basics-overview">
        API basics
      </HeaderMenuItem>
      <HeaderMenuItem href="/channel-api-getting-started">
        Channel API
      </HeaderMenuItem>
      <HeaderMenuItem href="/viewer-authentication-api-getting-started">
        Viewer Authentication API
      </HeaderMenuItem>
      <HeaderMenuItem href="/player-api-getting-started">
        Player API
      </HeaderMenuItem>
      <HeaderMenuItem href="/analytics-api-getting-started">
        Analytics API
      </HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Submenu">
        <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
        <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
        <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
    </>
  );

  return (
    <ShellHeader aria-label="Header" className={header}>
      <SkipToContent href="#main-content" className={skipToContent} />
      <HeaderMenuButton
        className={cx('bx--header__action--menu', headerButton)}
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
          toggleNavState('switcherIsOpen', 'close');
        }}
        isActive={leftNavIsOpen}
      />
      <HeaderName href="/" prefix="IBM">
        {children}
      </HeaderName>
      <HeaderNavigation aria-label={`IBM ${children}`}>
        {getMenuItems()}
      </HeaderNavigation>
      <HeaderGlobalBar>
        {isSearchEnabled && <GlobalSearch />}
        <HeaderGlobalAction
          className={cx(headerButton, switcherButton, {
            [switcherButtonOpen]: switcherIsOpen,
          })}
          aria-label="Switch"
          onClick={() => {
            toggleNavState('switcherIsOpen');
            toggleNavState('searchIsOpen', 'close');
            toggleNavState('leftNavIsOpen', 'close');
          }}
        >
          {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        className="bx--side-nav--website--light"
        expanded={leftNavIsOpen}
        isPersistent={false}>
        <SideNavItems>
          <HeaderSideNavItems>
            {getMenuItems()}
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
    </ShellHeader>
  );
};

const DefaultHeaderText = () => (
  <>
    Video Streaming
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
