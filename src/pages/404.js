import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  {
    href: '/api-basics-overview',
    text: 'API basics',
  },
  {
    href: '/channel-api-topic',
    text: 'Channel API',
  },
  {
    href: '/viewer-authentication-api-getting-started',
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
