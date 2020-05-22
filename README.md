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

## Creating a new page

in order to create a new page, you have to 

1. extend the nav items file:
src/data/nav-items.yaml
Each api url must starts with the api name. `api-basics`, `channel-api`, `viewer-authentication`, `player-api`, `analytics-api`
2. pages are in markdown format. Create the new mdx file in the `src/pages/` directory, or edit an existing mdx file.
Pages can be in the root in the pages directory. For example `/player-api-usage`,
or it can be in a separate directory, `/player-api-examples/basic-embed`. Use directory is page if grouped in a main menu, use file if it stands alone.
Examples of the page contants can be found here:
src/pages/channel-api-topic.mdx
https://pages.github.ibm.com/ustream-web/developers/channel-api-topic

## Deployment

The build and deployment process is automated with Travis CI and triggered by pushing to the master branch.

You can check the deployment logs here: https://travis.ibm.com/ustream-web/developers

For a change, please create a branch, and make a pull request to master.
On every push to master, deployment will start automatically, triggered by Travis.
After 5-10 minutes, the changes will takes effect on the developer site live environment
https://pages.github.ibm.com/ustream-web/developers

### additional details

Travis runs `gatsby build --prefix-paths`, which generates the production code in the /public directory.   
Then gh-pages node command will copy the /public directory's content into gh-pages branch.
The gitlab pages url serves the content of the gh-pages branch.

### Tips
To add MDX support for your editor:
- PHPStorm IDE: https://youtrack.jetbrains.com/issue/WEB-32599#focus=streamItem-27-3699900.0-0
- VS Code: https://github.com/silvenon/vscode-mdx 

