import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from './HomepageTemplate';

import Carbon from '../../images/hero@2x.png';

const FirstLeftText = () => <p>Developer Tools</p>;
const FirstRightText = () => (
  <p>
    Control the viewing experience for your audience. Create your own streaming applications, customize interfaces,
    analyze engagement and access telemetry data with the APIs and SDKs of the IBM Video Streaming platform.
  </p>
);

const customProps = {
  Banner: <HomepageBanner renderText={() => false} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout backgroundColor="#161616" color="white" leftText={FirstLeftText} rightText={FirstRightText} />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
