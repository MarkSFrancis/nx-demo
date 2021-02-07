# [Nx](https://nx.dev)

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

This project shows what an Nx workspace is like. 

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Examples include:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

You can also use custom tools and generators. A [custom builder](https://nx.dev/latest/angular/workspace/executors/creating-custom-builders) has been added to this repository as an example. It echos "Hello world" to the terminal when executed. You can run it with `yarn nx run todo-api:echo`

## Generate apps and libs

Run `nx g @nrwl/react:app my-app` to generate an application.  
Run `nx g @nrwl/react:lib my-lib` to generate a library. 

Many of the plugins above can be used to generate apps and libraries.

When using Nx, you can create multiple applications and libraries in the same workspace.

Libraries are shareable across libraries and applications. They can be imported from `@markf/mylib`.

## Development server

Run `nx serve my-app` for a dev server. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

Although nx is capable of e2e tests, this example repo does not include any. 

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
