import React from 'react';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon/src/components/Homepage';
import Carbon from 'gatsby-theme-carbon/src/images/carbon.jpg';
import Main from 'gatsby-theme-carbon/src/components/Main';

import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';

const Homepage = ({
                      children,
                      Banner,
                      location,
                      pageContext,
                  }) => {
    const { frontmatter = {}, titleType } = pageContext;
    const { title, description, keywords } = frontmatter;
    return (
        <Layout
            pageTitle={title}
            pageDescription={description}
            pageKeywords={keywords}
            titleType={titleType}
            homepage
            theme="dark"
        >
            {Banner}
            <Main>{children}</Main>
            <NextPrevious location={location} pageContext={pageContext} />
            <BackToTopBtn />
        </Layout>
    );
};
Homepage.defaultProps = {
    Banner: (
        <HomepageBanner
            renderText={() => (
                <h1>
                    IBM Video Streaming APIs
                </h1>
            )}
            image={Carbon}
        />
    ),
    FirstCallout: <HomepageCallout />,
    SecondCallout: (
        <HomepageCallout color="inverse01" backgroundColor="#061f80" />
    ),
};

export default Homepage;
