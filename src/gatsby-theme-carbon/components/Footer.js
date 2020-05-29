import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const links = {
  firstCol: [
    { href: 'https://video.ibm.com/contact-us', linkText: 'Contact' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal/us/en/', linkText: 'Terms of use' },
    {
      href: 'https://www-03.ibm.com/software/sla/sladb.nsf/sla/sd-7525-06',
      linkText: 'Terms and conditions for IBM Video Streaming',
    },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/accessibility/us/en/', linkText: 'Accessibility' },
    { href: 'https://video.ibm.com/copyright-policy', linkText: 'Copyright Policy' },
    { href: 'https://video.ibm.com/acceptableusepolicy', linkText: 'Acceptable use policy' },
    { href: 'https://video.ibm.com/', linkText: 'Cookie preferences' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={() => ''} />;

export default CustomFooter;
