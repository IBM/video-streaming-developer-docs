import React from 'react';
import Content from "./Content";

import {
    HeaderMenu,
    HeaderMenuItem,
} from 'carbon-components-react';
import {withPrefix} from 'gatsby-link';

const HeaderMenus = () => {
    return (
        <>
            {Content.map((mainMenu, i) => (
                <HeaderMenu aria-label={mainMenu.title} menuLinkName={mainMenu.title} key={i}>
                    {mainMenu.pages.map((subMenu, i) => (
                        <HeaderMenuItem href={withPrefix(subMenu.path)} key={i}>
                            {subMenu.title}
                        </HeaderMenuItem>
                    ))}
                </HeaderMenu>
            ))}
        </>
    );
};

export default HeaderMenus;
