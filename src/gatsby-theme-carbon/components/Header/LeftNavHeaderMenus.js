import React, {useContext} from 'react';
import Content from "./Content";

import {withPrefix} from 'gatsby-link';
import {SideNavMenu, SideNavMenuItem} from "carbon-components-react";
import {Link} from "gatsby";
import styles from "gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss";
import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";

const HeaderMenus = () => {
    const {
        toggleNavState,
    } = useContext(NavContext);

    return (
        <>
            {Content
                .map((mainMenu, i) => (
                    <SideNavMenu
                        icon={<span>dummy icon</span>}
                        isActive={false}
                        defaultExpanded={false}
                        title={mainMenu.title}
                        key={i}
                    >
                        {mainMenu.pages.map((subMenu, i) => (
                            <SideNavMenuItem
                                to={subMenu.path}
                                onClick={() => {
                                    toggleNavState('leftNavIsOpen', 'close');
                                }}
                                element={Link}
                                isActive={false}
                                key={i}
                            >
                                <span
                                    className={styles.linkText}
                                >
                                  {subMenu.title}
                                </span>
                            </SideNavMenuItem>
                        ))}
                    </SideNavMenu>
                )
            )}
        </>
    );
};

export default HeaderMenus;
