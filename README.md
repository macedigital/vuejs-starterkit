# vuejs-starterkit

[![Greenkeeper badge](https://badges.greenkeeper.io/macedigital/vuejs-starterkit.svg)](https://greenkeeper.io/)

An opionated Vue.js PWA starter-kit project integrating `vue-router`, `vuex`, `vue-loader` and `webpack3` for non-trivial projects.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

You can provide custom port-numbers via the environment variable `PORT`:

```sh
# run dev-server on port 1337
PORT=1337 node run dev

# run e2e tests on port 8888
PORT=8888 node run e2e
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Demo

Go to the [vuejs-starterkit-demo](https://macedigital.github.io/vuejs-starterkit/) demo page.

## Roadmap

- [x] Fix aliases path-resolution issues with webpack.
- [ ] Fix issues with [vue-loader](https://vue-loader.vuejs.org/) webpack resolvers.
- [ ] Add useful example components from [vue guide](https://vuejs.org/v2/guide/).
- [ ] Add more sophisticated [vue-router](https://router.vuejs.org/) examples.
- [ ] Add [vuex](https://vuex.vuejs.org/) integration for state-management.
- [ ] Add first-class [Typescript support](https://www.typescriptlang.org/).
- [ ] Revisit unit- and e2e-testing strategy, plenty of frameworks and styles to choose from.
