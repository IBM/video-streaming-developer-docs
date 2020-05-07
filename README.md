# Developer Tools
:construction:A documentation site for IBM Video Streaming APIs, SDKs and use cases - [Preview URL](https://pages.github.ibm.com/ustream-web/developers/) :construction:

## About
This site is the redesigned one of the old developer tools site: https://developers.video.ibm.com/

With this repository Video Streaming developers can easily update their API and SDK documentations.
The site content is in `mdx` format.
MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast 🚀. MDX seeks to make writing with Markdown and JSX simpler while being more expressive.

## How To
The site content and page structure can be found here: `developers/src/pages/`

For example, you want to update the [Channel API/Security/Embed Restriction](https://pages.github.ibm.com/ustream-web/developers/channel-api-security/embed-restriction) page. Just navigate to `developers/src/pages/channel-api-security/` folder and update the `embed-restriction.mdx` file.

You can use Github UI to edit this file or you can checkout the repo and edit locally.
For local development you can find instructions below.

Check out this article template file for available mdx components: [TODO ARTICLE TEMPLATE](https://github.ibm.com/ustream-web/developers/src/pages)


## Local development
1. Prerequisite: 
  - Install NodeJS - `brew install node`

2. Check out the repo
3. CD into the repo dir
4. Install the dependencies - `npm install`
5. Run the site locally - `npm run dev`


## Deployment
The build and deployment process is automated with Travis CI and triggered by pushing to the master branch.

You can check the deployment logs here: https://travis.ibm.com/ustream-web/developers
