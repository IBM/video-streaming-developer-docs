import React from 'react';
import { HeaderMenu, HeaderMenuItem } from '@carbon/react';
import { withPrefix } from 'gatsby-link';
import Content from './Content';

const HeaderMenus = () => (
  <>
    {Content.map((mainMenu, index) => (
      <HeaderMenu aria-label={mainMenu.title} menuLinkName={mainMenu.title} key={index}>
        {mainMenu.pages.map((subMenu, key) => (
          <HeaderMenuItem href={withPrefix(subMenu.path)} key={key}>
            {subMenu.title}
          </HeaderMenuItem>
        ))}
      </HeaderMenu>
    ))}
  </>
);

export default HeaderMenus;
