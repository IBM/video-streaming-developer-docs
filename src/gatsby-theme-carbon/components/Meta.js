import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from 'gatsby-theme-carbon/src/util/hooks';

const Meta = ({ pageTitle, pageDescription, pageKeywords, titleType }) => {
  const { title, description, keywords, lang } = useMetadata();

  const getPageTitle = () => {
    switch (titleType) {
      case 'page':
        // use site title for fallback
        return pageTitle || title;
      case 'site':
        return title;
      case 'append':
        return `${title}${pageTitle ? ` – ${pageTitle}` : ''}`;
      case 'prepend':
        return `${pageTitle ? `${pageTitle} – ` : ''}${title}`;
      default:
        return null;
    }
  };

  return (
    <Helmet
      title={getPageTitle()}
      meta={[
        {
          name: 'description',
          content: pageDescription || description,
        },
        {
          name: 'keywords',
          content: pageKeywords || keywords,
        },
      ]}
    >
      <script type="text/javascript">
        {`
window.digitalData = {
    page: {
      pageInfo: {
        ibm: {
        siteID: 'IBM_VideoStreaming'
      }
      },
        category: {
        primaryCategory: 'IBM_VideoStreaming'
      }
    }
};`}
      </script>
      <script src="//1.www.s81c.com/common/stats/ida_stats.js" type="text/javascript" async="async" />
      <html lang={lang} />
    </Helmet>
  );
};

export default Meta;
