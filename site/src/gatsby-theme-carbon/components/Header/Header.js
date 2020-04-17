import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
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
  headerName,
  collapsed,
  headerButton,
  switcherButton,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';

import {
    headerLink,
} from './Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();

  return (
    <>
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
        <Link
          className={cx(headerName, {
            [collapsed]: searchIsOpen,
          }, headerLink)}
          to="/"
        >
          {children}
        </Link>
        <Link
            className={cx(headerName, {
              [collapsed]: searchIsOpen,
            }, headerLink)}
            to="/api-basics-overview"
        >
          Api basics
        </Link>
        <Link
            className={cx(headerName, {
              [collapsed]: searchIsOpen,
            }, headerLink)}
            to="/channel-api-getting-started"
        >
          Channel Api
        </Link>
          <Link
              className={cx(headerName, {
                  [collapsed]: searchIsOpen,
              }, headerLink)}
              to="/viewer-authentication-api-getting-started"
          >
              Viewer Authentication Api
          </Link>
          <Link
              className={cx(headerName, {
                  [collapsed]: searchIsOpen,
              }, headerLink)}
              to="/player-api-getting-started"
          >
              Player Api
          </Link>
          <Link
              className={cx(headerName, {
                  [collapsed]: searchIsOpen,
              }, headerLink)}
              to="/analytics-api-getting-started"
          >
              Analytics Api
          </Link>
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
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    Carbon&nbsp;<span>Design System</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
