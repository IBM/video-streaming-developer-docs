import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon/src/components/Homepage';
import Main from 'gatsby-theme-carbon/src/components/Main';
import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';
import Layout from '../components/Layout';
import Carbon from '../../images/carbon.jpg';
import { homepageBackToTop } from './Homepage.module.scss';

function Homepage({ children, Banner, FirstCallout, location, pageContext }) {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme="light"
      location={location}
    >
      {Banner}
      {FirstCallout}
      <Main>{children}</Main>
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
      <div className={homepageBackToTop}>
        <BackToTopBtn />
      </div>
    </Layout>
  );
}

Homepage.defaultProps = {
  Banner: <HomepageBanner renderText={() => <h1>IBM Video Streaming APIs</h1>} image={Carbon} />,
};

export default Homepage;
