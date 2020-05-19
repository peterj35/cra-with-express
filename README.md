# CRA with Express.js

This is a starter boilerplate template for a full stack app using [Create React App](https://create-react-app.dev/) in the frontend, and [Express.js](https://expressjs.com/) in the backend.

## Setup

Run `yarn install` in both directories to download packages.

Run `yarn start` in both directories to begin both apps.

## Changes to defaults

For the backend, `nodemon` (live code reloading) and `cross-env` (for port setting) have been added.

For the client, the proxy port has been set (in `package.json`) to point to the backend app.