# Developer Tools

A documentation site for IBM Video Streaming APIs, SDKs and use cases - [URL](https://ibm.github.io/video-streaming-developer-docs//)

## About

With this repository Video Streaming developers can easily update their API and SDK documentations.
The site content is in `mdx` format.
MDX is like an extension of markdown documents. MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast 🚀. MDX seeks to make writing with Markdown and JSX simpler while being more expressive.

## How to contribute
To collaborate with this repository in GitHub you need to follow these steps:
- Fork the repository into your own GitHub
- Clone the repository to your local machine
- Create a new branch for your changes
- Make some changes and commit them with useful messages ([Conventional Commit messages](https://www.conventionalcommits.org/en/v1.0.0/) preferred)
- Push the changes to your repository
- Create a Pull Request from your repository back to the original one

Then the codeowners will review your Pull Request and if the PR is accepted and merged into master a Github Action will build and push the site to the `gh-pages` branch and the deployment is done. 

## How To

The site content and page structure can be found here: `src/pages/`

For example, you want to update the [Channel API/Security/Embed Restriction](https://developers.video.ibm.com/channel-api-security/embed-restriction/) page. Just navigate to `src/pages/channel-api-security/` folder and update the `embed-restriction.mdx` file.

You can use Github UI to edit this file or you can checkout the repo and edit locally.
For local development you can find instructions below.

Check out this article template file for available mdx components:

- [Example Article page](https://ibm.github.io/video-streaming-developer-docs/channel-api-topic)
- [Source mdx file for Example Article page](https://github.com/IBM/video-streaming-developer-docs/blob/master/src/pages/channel-api-topic.mdx)

## Local development


1. Check out the repo
2. CD into the repo dir
3. If Docker is already installed
    * Run: `docker run -it --rm -v $(pwd):/data -w=/data --user=$(id -u):$(id -g) -p 8000:8000 node:18 /bin/bash`
    * Stay in the container and jump to #5, no need to install NodeJS, but still must run the `npm` commands below.
4. Make sure NodeJS is installed, if not: `brew install node` or see https://nodejs.org/en/download/
5. Install the dependencies: `npm install`
    * Note: some package installation may hang. Just press `Ctrl+C` and restart the command
6. Run the site locally: `npm run dev`
7. Wait for the the address to be displayed, it may take a while
8. Open the [site](http://localhost:8000/) in the browser, changes in the source should be displayed automatically

## Creating a new page

in order to create a new page, you have to

1. extend the nav items file:
   `src/data/nav-items.yaml`

   Each api url must starts with the api name. `api-basics`, `channel-api`, `viewer-authentication`, `player-api`, `analytics-api`
2. pages are in markdown format. Create the new mdx file in the `src/pages/` directory, or edit an existing mdx file.
   Pages can be in the root in the pages directory. For example `/player-api-usage`,
   or it can be in a separate directory, `/player-api-examples/basic-embed`. Use directory is page if grouped in a main menu, use file if it stands alone.
   Examples of page contents can be found here:
    - [Example Article page](https://ibm.github.io/video-streaming-developer-docs/channel-api-topic)
    - [Source mdx file for Example Article page](https://github.com/IBM/video-streaming-developer-docs/blob/master/src/pages/channel-api-topic.mdx)

## Deployment

The project uses this Github Action to build and publish the site: [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish)

### Tips

#### :construction_worker_man: WIP

To mark your PR as work in progress (eg.: you wrote documentation to a feature which is not released yet) write WIP inside the PR's title.
In this case merge is prevented by the WIP check. If the PR is ready to be merged (eg.: the documented feature is released) you could remove WIP from the title.

#### To add MDX support for your editor:
- PHPStorm IDE: https://youtrack.jetbrains.com/issue/WEB-32599#focus=streamItem-27-3699900.0-0
- VS Code: https://github.com/silvenon/vscode-mdx
