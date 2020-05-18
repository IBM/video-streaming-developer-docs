import React, {useContext, useEffect} from 'react';
import classnames from 'classnames';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import { useWindowSize } from 'gatsby-theme-carbon/src/util/hooks';

import { sideNav } from './LeftNav.module.scss';
import Title from './Title';
import {
    HeaderSideNavItems,
} from 'carbon-components-react';
import HeaderMenus from '../Header/HeaderMenus';

const LeftNav = () => {
    const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
    const windowSize = useWindowSize();

    let navItems = useNavItems();

    useEffect(() => {
        if (windowSize.innerWidth > 1056 && !leftNavIsOpen && navItems.length) {
            toggleNavState('leftNavIsOpen', 'open');
        }
    });

    const windowGlobal = typeof window !== 'undefined' && window;

    const pathName = windowGlobal.location.pathname;
    let mainPathName = '';
    const availableMainPaths = [
        'api-basics',
        'channel-api',
        'viewer-authentication-api',
        'player-api',
        'analytics-api',
        'broadcaster-sdk',
        'player-sdk'
    ];

    const titles = {
        'api-basics': 'API basics',
        'channel-api': 'Channel API',
        'viewer-authentication-api': 'Viewer Authentication API',
        'player-api': 'Player API',
        'analytics-api': 'Analytics API',
        'broadcaster-sdk': 'Broadcaster SDK',
        'player-sdk': 'Player SDK'
    };

    availableMainPaths.forEach((availableMainPath) => {
        if (pathName.indexOf(availableMainPath) >= 0) {
            mainPathName = availableMainPath;
        }
    });

    let title = null;

    if (mainPathName) {
        title = titles[mainPathName];
    }

    if (pathName.indexOf('/' + mainPathName) >= 0 && mainPathName) {
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
    } else {
        navItems = [];
    }

    const renderNavItems = () =>
        navItems
            .map((item, i) => (
                    <LeftNavItem items={item.pages} category={item.title} key={i} />
                )
            );

    if (!navItems.length && !leftNavIsOpen) {
        return (
            <></>
        );
    }

    // TODO: replace old addon website styles with sass modules, move to wrapper
    return (
        <SideNav
            expanded={leftNavIsOpen}
            aria-label="Side navigation"
            className={classnames({
                'bx--side-nav--website': true,
                'bx--side-nav--website--light': true
            }, sideNav)}
        >
            <SideNavItems>
                <HeaderSideNavItems hasDivider={false}>
                    <HeaderMenus />
                </HeaderSideNavItems>
                {title && <Title>{title}</Title>}
                {renderNavItems()}
            </SideNavItems>
        </SideNav>
    );
};

export default LeftNav;
