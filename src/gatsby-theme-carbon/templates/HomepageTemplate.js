import React from 'react';
import Layout from '../components/Layout';
import { HomepageBanner } from 'gatsby-theme-carbon/src/components/Homepage';
import Carbon from '../../images/carbon.jpg';
import Main from 'gatsby-theme-carbon/src/components/Main';

import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';

const Homepage = ({
  children,
  Banner,
  FirstCallout,
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
      location={location}
    >
      {Banner}
      {FirstCallout}
      <Main>{children}</Main>
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
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
};

export default Homepage;
