# component-router [![npm](https://img.shields.io/npm/v/component-router.svg?style=flat-square)](https://www.npmjs.com/package/component-router)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/in-flux/component-router.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/in-flux/component-router)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/component-router.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/component-router)
[![Coverage](https://img.shields.io/codecov/c/github/in-flux/component-router.svg?style=flat-square)](https://codecov.io/github/in-flux/component-router?branch=master)
[![Dependencies](https://img.shields.io/david/in-flux/component-router.svg?style=flat-square)](https://david-dm.org/in-flux/component-router)
[![Dev Dependencies](https://img.shields.io/david/dev/in-flux/component-router.svg?style=flat-square)](https://david-dm.org/in-flux/component-router#info=devDependencies)


Flux-based routing solution for components

**Not a replacement for `react-router`.** Could be used as addition to it. Or standalone.

**WARNING** Work in progress, though most of the functionality is there.

See [issues](https://github.com/in-flux/component-router/issues) for more info on what is going to happen.


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
2. We can keep their states in some specialized Flux Store and cache in `localStorage` or even user settings in database on the server. But we are losing ability to share this page with someone else (unless we have some special "copy/paste state" functionality)
3. At last we can keep state of each component in the URL as query parameter, which solves both problems.
  Current URL will be: `/app?chart=bar&filter=opened&data=sources`

Key feature is to update all links on the page if any of visible blocks changed its state. If lets all links to stay links, so it is possible to open link in a new tab, for instance. It is fixed by ComponentRouter.


## Installation

### NPM
```sh
npm install --save redux history qs component-router
```

Don't forget to manually install peer dependencies (`redux`, `history`, `qs`) if you use npm@3.


### 1998 Script Tag:
```html
<script src="https://unpkg.com/qs/dist/qs.js"></script>
<script src="https://unpkg.com/history/umd/history.min.js"></script>
<script src="https://unpkg.com/component-router/build/component-router.min.js"></script>
(Module exposed as `ComponentRouter`)
```


## Demo


[http://in-flux.github.io/component-router](http://in-flux.github.io/component-router)


## Codepen demo

[http://codepen.io/nkbt/pen/BNXamG?editors=101](http://codepen.io/nkbt/pen/BNXamG)

Since ComponentRouter is working with browser location and navigation, it is not really possible
to debug router in Codepen's Editor mode, but completely possible in Debug mode:
[http://s.codepen.io/nkbt/debug/BNXamG] (http://s.codepen.io/nkbt/debug/BNXamG)


## Minimal Example

```js
// TODO
```

![foobar.gif](foobar.gif)

You can see the Minimal example on demo page http://in-flux.github.io/component-router/#/?page=foobar.


## Quick-start

Quick-start is a step-by-step walk-through to implement UI based on ASCII example from above.

### 1. Add App and main blocks: Chart, Filter, Data

```js
// TODO
```

### 2. Add second-level blocks (not yet used for now)

```js
// TODO
```

### 3. Add ComponentRouter

Wrap each main component, give it a namespace and config

Also render Location provider (locationHistory for History-API links or locationHash for hash-links).

```js
// TODO
```

### 4. Update your main components with links

```js
// TODO
```

### 5. PROFIT

Compile your code, the routing is now completed.


![Quickstart.gif](quickstart.gif)

**NOTE** href changes, so we can open link in new tab.


You can see the full QuickStart example on Demo page http://in-flux.github.io/component-router/#/?page=quickstart.


## Development and testing

Currently is being developed and tested with the latest stable `Node 7` on `OSX`.

To run example covering all `ComponentRouter` features, use `npm start dev`, which will compile `example/index.js`

```bash
git clone git@github.com:in-flux/component-router.git
cd component-router
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
