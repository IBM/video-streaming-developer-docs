import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  {
    href: '/api-basics',
    text: 'API basics',
  },
  {
    href: '/channel-api',
    text: 'Channel API',
  },
  {
    href: '/viewer-authentication-api',
    text: 'Viewer Authentication API',
  },
  {
    href: '/player-api',
    text: 'Player API',
  },
  {
    href: '/analytics-api',
    text: 'Analytics API',
  },
  {
    href: '/ecdn-api',
    text: 'ECDN API',
  },
  {
    href: '/broadcaster-sdk',
    text: 'Broadcaster SDK',
  },
  {
    href: '/player-sdk',
    text: 'Player SDK',
  },
];

const Custom404 = ({ location }) => <FourOhFour links={links} location={location} />;

export default Custom404;
