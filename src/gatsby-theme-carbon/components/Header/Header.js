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
import { withPrefix } from "gatsby"

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
} from './HeaderSecondary.module.scss';
import HeaderMenu from "carbon-components-react/lib/components/UIShell/HeaderMenu";
import HeaderMenuItem from "carbon-components-react/lib/components/UIShell/HeaderMenuItem";

const Header = ({ children }) => {
    const {
        leftNavIsOpen,
        toggleNavState,
        switcherIsOpen,
        searchIsOpen,
    } = useContext(NavContext);
    const { isSearchEnabled } = useMetadata();
    const items = [
        {
            id: "option-1",
            text: "Option 1",
        },
        {
            id: "option-2",
            text: "Option 2",
        },
        {
            id: "option-3",
            text: "Option 3",
        },
        {
            id: "option-4",
            text: "Option 4",
        },
    ];

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
                <ul aria-label="IBM [Platform]" className={'bx--header__menu-bar'} role="menubar">
                    <HeaderMenu aria-label="APIs" menuLinkName="APIs">
                        <HeaderMenuItem href={withPrefix('/api-basics-overview')}>
                            API basics
                        </HeaderMenuItem>
                        <HeaderMenuItem href={withPrefix('/channel-api-topic')}>
                            Channel API
                        </HeaderMenuItem>
                        <HeaderMenuItem href={withPrefix('/viewer-authentication-api-getting-started')}>
                            Viewer Authentication API
                        </HeaderMenuItem>
                        <HeaderMenuItem href={withPrefix('/player-api-getting-started')}>
                            Player API
                        </HeaderMenuItem>
                        <HeaderMenuItem href={withPrefix('/analytics-api-getting-started')}>
                            Analytics API
                        </HeaderMenuItem>
                    </HeaderMenu>
                </ul>
                <ul aria-label="IBM [Platform]" className={'bx--header__menu-bar'} role="menubar">
                    <HeaderMenu aria-label="SDKs" menuLinkName="SDKs">
                        <HeaderMenuItem href={withPrefix('/broadcaster-sdk')}>
                            Broadcaster SDK
                        </HeaderMenuItem>
                        <HeaderMenuItem href={withPrefix('/player-sdk')}>
                            Player SDK
                        </HeaderMenuItem>
                    </HeaderMenu>
                </ul>
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
