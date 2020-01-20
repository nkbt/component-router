# component-router [![npm](https://img.shields.io/npm/v/component-router.svg?style=flat-square)](https://www.npmjs.com/package/component-router)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/component-router.svg?style=flat-square&label=build)](https://circleci.com/gh/nkbt/component-router)
[![Dependencies](https://img.shields.io/david/nkbt/component-router.svg?style=flat-square)](https://david-dm.org/nkbt/component-router)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/component-router.svg?style=flat-square)](https://david-dm.org/nkbt/component-router#info=devDependencies)

## Idea

The idea of partial routing is coming from the need to track state of independent components in the URL.

Commonly used routers are mostly hierarchical. The great example of such a router is [react-router](https://github.com/rackt/react-router).
Unfortunately it is not possible to store component's state independently from the other component in a different "branch" of hierarchy.

They work perfectly for most of the UIs.
But as soon as we are trying to build a complex UI with multiple independent components and each of those has own state you would like to preserve, it becomes a challenging task. ComponentRouter was created to provide a simple way of keeping such state in the URL with query params.


Here is an example of such interface.

1. Chart block, which can be switched from `bar` to `pie`
2. Filter block, that can be `opened` or `closed`
3. Data panel with two tabs: `sources` and `destinations`

```
+------------------------------------------------------------------------------+
|  App "/app"                                                                  |
|                                                                              |
|  +------------------------------+  +---------------------------------------+ |
|  |  chart                       |  |  filter                               | |
|  |  [->bar] [pie]               |  |  [->opened] [closed]                  | |
|  |                              |  |                                       | |
|  |                              |  |                                       | |
|  |                              |  |                                       | |
|  |                              |  |                                       | |
|  |                              |  |                                       | |
|  +------------------------------+  +---------------------------------------+ |
|                                                                              |
|  +---------------------------------------------------+                       |
|  |  data                                             |                       |
|  |  [->sources] [destinations]                       |                       |
|  |                                                   |                       |
|  +---------------------------------------------------+                       |
|                                                                              |
+------------------------------------------------------------------------------+
```

As you can see each of these blocks has its own independent navigation and, for example, Filter can be closed or opened independently from currently displayed Chart type or Data tab selected.

1. We can always keep the state of each block, but you will loose that state on page refresh.
2. We can keep their states in some specialized Redux Store and cache in `localStorage` or even user settings in database on the server. But we are losing ability to share this page with someone else (unless we have some special "copy/paste state" functionality)
3. At last we can keep state of each component in the URL as query parameter, which solves both problems.
  Current URL will be: `/app?chart=bar&filter=opened&data=sources`

Key feature is to update all links on the page if any of visible blocks changed its state. If lets all links to stay links, so it is possible to open link in a new tab, for instance. It is fixed by ComponentRouter.


# Minimal example


![Minimal example](./example/minimal.gif)


# Better example

**NOTE** href changes, so we can open link in new tab.

![Better example](./example/moar.gif)


## Demo


[http://nkbt.github.io/component-router](http://nkbt.github.io/component-router)


## Codepen demo

[http://codepen.io/nkbt/pen/BNXamG?editors=101](http://codepen.io/nkbt/pen/BNXamG)

Since ComponentRouter is working with browser location and navigation, it is not really possible
to debug router in Codepen's Editor mode, but completely possible in Debug mode:
[http://s.codepen.io/nkbt/debug/BNXamG] (http://s.codepen.io/nkbt/debug/BNXamG)


## Installation

### NPM

```sh
npm install --save redux history qs component-router
```

Don't forget to manually install peer dependencies (`redux`, `history`, `qs`) if you use npm@3.

```sh
yarn add component-router 
```

### 1998 Script Tag:
```html
<script src="https://unpkg.com/redux/dist/redux.min.js"></script>
<script src="https://unpkg.com/qs/dist/qs.js"></script>
<script src="https://unpkg.com/history/umd/history.min.js"></script>
<script src="https://unpkg.com/component-router/build/component-router.min.js"></script>
(Module exposed as `ComponentRouter`)
```


## Usage

See [example/App/index.js](example/App/index.js)


## Development and testing

Currently is being developed and tested with the latest stable `Node` on `OSX`.

To run example covering all `ComponentRouter` features, use `yarn start`, which will compile `example/index.js`

```bash
git clone git@github.com:nkbt/component-router.git
cd component-router
yarn install
yarn start

# then
open http://localhost:8080
```

## Tests

```bash
# to run ESLint check
yarn lint

# to run tests
yarn test
```

## License

MIT
