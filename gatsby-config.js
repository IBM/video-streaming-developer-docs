module.exports = {
  siteMetadata: {
    title: 'IBM Video Streaming Developers',
    description:
      'Customize and control the viewing experience for your audience or create your own streaming applications, analyze engagement and telemetry data with the APIs and SDKs of the IBM Video Streaming platform.',
    keywords: 'gatsby,video,video streaming,developer,developers,sdk,api,player,ios,android,broadcast',
  },
  pathPrefix: `/video-streaming-developer-docs`,
  // local build
  // pathPrefix: `/developers/public/`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/channel-api-getting-started',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: 'https://github.com/IBM/video-streaming-developer-docs',
          subDirectory: '',
          branch: 'master',
        },
      },
    },
  ],
};
