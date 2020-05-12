import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from './HomepageTemplate';

import Carbon from '../../images/carbon.jpg';

const BannerText = () => <h1>Banner component</h1>;

const customProps = {
    Banner: <HomepageBanner renderText={BannerText} image={Carbon} />
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
    return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
