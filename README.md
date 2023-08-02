# TagTrack DOCS

TagTrack API and Hardware Documentation

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Changes to the master branch in this repo will cause an automatic build event in AWS Amplify which automatically updates the site.

### Domain

The production site is hosted at [docs.mytagtrack.com](docs.mytagtrack.com) configured with AWS Amplify.

