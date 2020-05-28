import React from 'react';
import Footer from './Footer/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop that to display your site's build time:{' '}
      {buildTime}
    </p>
    <p>
      By importing the <strong>Footer</strong> component from gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>The default export from a shadowed component will replace that component in the theme.</p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Contact' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/us-en/?ar=1', linkText: 'Accessibility' },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Copyright policy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Cookie preferences' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms and conditions for IBM Video Streaming' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Acceptable use policy' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
