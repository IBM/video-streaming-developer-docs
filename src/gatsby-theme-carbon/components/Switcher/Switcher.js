import React, { useContext } from 'react';
import cx from 'classnames';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { divider, link, linkDisabled } from 'gatsby-theme-carbon/src/components/Switcher/Switcher.module.scss';
import { nav, open } from './SwitcherShadow.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="IBM Video Streaming"
      aria-expanded={switcherIsOpen}
      tabIndex="-1"
    >
      <ul>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = (props) => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({ disabled, children, href: hrefProp, ...rest }) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        tabIndex={switcherIsOpen ? 0 : '-1'}
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => (
  <>
    <SwitcherDivider>Product portfolio</SwitcherDivider>

    <SwitcherLink href="https://video.ibm.com/">IBM Video Streaming</SwitcherLink>

    <SwitcherDivider>Learn more</SwitcherDivider>

    <SwitcherLink href="https://support.video.ibm.com/hc/en-us">Browse our Support Center</SwitcherLink>
  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
