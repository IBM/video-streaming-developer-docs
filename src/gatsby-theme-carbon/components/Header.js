import React, { useContext } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import { withPrefix } from 'gatsby-link';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import cx from 'classnames';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import {
  collapsed,
  header,
  headerButton,
  skipToContent,
  switcherButton,
  switcherButtonOpen,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';
import LeftNav from './LeftNav/LeftNav';
import HeaderMenus from './Header/HeaderMenus';
import { headerNameShadow, headerShadow } from './HeaderShadow.module.scss';

const CustomHeader = ({ homepage, is404, theme, location }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen, searchIsOpen } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();
  const label = 'IBM Video Streaming Developers';
  return (
    <>
      <Header aria-label={label} className={cx(header, headerShadow)}>
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
        <HeaderName
          href={withPrefix('/')}
          prefix=""
          className={cx(headerNameShadow, {
            [collapsed]: searchIsOpen,
          })}
        >
          IBM&nbsp;<span>Video Streaming</span>&nbsp;Developers
        </HeaderName>
        {!homepage && (
          <HeaderNavigation aria-label={label}>
            <HeaderMenus />
          </HeaderNavigation>
        )}
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
        <LeftNav homepage={homepage} is404Page={is404} theme={theme} location={location} />
      </Header>
    </>
  );
};

export default CustomHeader;
