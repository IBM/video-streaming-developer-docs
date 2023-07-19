import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
import { Switcher, Close } from '@carbon/react/icons';
import cx from 'classnames';
import PropTypes from 'prop-types';

import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import * as styles from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { headerNameShadow, headerShadow, collapsed } from './HeaderShadow.module.scss';

function Header({ homepage }) {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
    switcherTooltipText = 'Switch sites',
  } = useContext(NavContext);
  const { isSearchEnabled, navigationStyle, isSwitcherEnabled } = useMetadata();
  const label = 'IBM Video Streaming Developers Site';
  return (
    <ShellHeader
      aria-label={label}
      className={cx(
        styles.header,
        {
          [styles.headerWithHeaderNav]: navigationStyle,
        },
        headerShadow,
      )}
    >
      <SkipToContent href="#main-content" className={styles.skipToContent} />
      <HeaderMenuButton
        className={cx(`cds--header__action--menu`, styles.headerButton)}
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
          toggleNavState('switcherIsOpen', 'close');
        }}
        isActive={leftNavIsOpen}
      />
      <Link
        className={cx(
          styles.headerName,
          {
            [styles.searchIsOpenOnLink]: searchIsOpen,
            [styles.headerNameWithHeaderNav]: navigationStyle,
            [collapsed]: searchIsOpen,
          },
          headerNameShadow,
        )}
        to="/"
      >
        IBM&nbsp;<span>Video Streaming</span>&nbsp;Developers
      </Link>
      {!homepage && <HeaderNav />}
      <HeaderGlobalBar className={cx({ [styles.searchIsOpenOnBar]: searchIsOpen })}>
        {isSearchEnabled && <GlobalSearch />}
        {isSwitcherEnabled && (
          <HeaderGlobalAction
            className={cx(styles.headerButton, styles.switcherButton, {
              [styles.switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label={switcherTooltipText}
            tooltipAlignment="end"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close size={20} /> : <Switcher size={20} />}
          </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </ShellHeader>
  );
}

Header.defaultProps = {
  homepage: false,
};

Header.propTypes = {
  homepage: PropTypes.bool,
};

export default Header;
