import React, { useContext } from 'react';
import { Link } from 'gatsby';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { SideNavMenu, SideNavMenuItem } from 'carbon-components-react';
import Content from './Content';

const HeaderMenus = () => {
  const { toggleNavState } = useContext(NavContext);

  return (
    <>
      {Content.map((mainMenu, index) => (
        <SideNavMenu
          icon={<span>dummy icon</span>}
          isActive={false}
          defaultExpanded={false}
          title={mainMenu.title}
          key={index}
        >
          {mainMenu.pages.map((subMenu, key) => (
            <SideNavMenuItem
              to={subMenu.path}
              onClick={() => {
                toggleNavState('leftNavIsOpen', 'close');
              }}
              element={Link}
              isActive={false}
              key={key}
            >
              <span>{subMenu.title}</span>
            </SideNavMenuItem>
          ))}
        </SideNavMenu>
      ))}
    </>
  );
};

export default HeaderMenus;
