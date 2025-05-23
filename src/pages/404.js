import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  {
    href: '/api-basics-overview',
    text: 'API basics',
  },
  {
    href: '/channel-api-basic-channel-management',
    text: 'Channel API',
  },
  {
    href: '/viewer-authentication-api-v2-getting-started',
    text: 'Viewer Authentication API',
  },
  {
    href: '/player-api-getting-started',
    text: 'Player API',
  },
  {
    href: '/analytics-api-getting-started',
    text: 'Analytics API',
  },
];

function Custom404({ location }) {
  return <FourOhFour links={links} location={location} />;
}

export default Custom404;
