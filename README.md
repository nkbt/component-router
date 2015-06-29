# in-flux

[![Circle CI](https://circleci.com/gh/nkbt/in-flux.svg?style=svg)](https://circleci.com/gh/nkbt/in-flux)
[![Coverage Status](https://coveralls.io/repos/nkbt/in-flux/badge.svg?branch=master)](https://coveralls.io/r/nkbt/in-flux?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/in-flux.svg)](https://david-dm.org/nkbt/in-flux)
[![devDependency Status](https://david-dm.org/nkbt/in-flux/dev-status.svg)](https://david-dm.org/nkbt/in-flux#info=devDependencies)

Flux-based partial routing solution

**Not a replacement for `react-router`.** Could be used as addition to it. Or standalone.

**WARNING** Work in progress, though most of the functionality is there.

See [issues](https://github.com/nkbt/in-flux/issues) for more info on what is going to happen.


## Idea

The idea of partial routing is coming from the need to track state of independent components in the URL.

Commonly used routers are mostly hierarchical. The great example of such a router is [react-router](https://github.com/rackt/react-router).
Unfortunately it is not possible to store component's state independently fom the other component in a different "branch" of hierarchy.

They work perfectly for most of the UIs. 
But as soon as we are trying to build a complex UI with multiple independent components and each of those has own state you would like to preserve, it becomes a challenging task. InFlux was created to provide a simple way of keeping such state in the URL with query params.


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
3. At last we can keep state of each component in the url as query parameter, which solves both problems.
  Current url will be: `/app?chart=bar&filter=opened&data=sources`

Key feature is to update all links on the page if any of visible blocks changed its state. And it is fixed by InFlux.

## Usage

Please, explore examples for usage until README is updated.

```js
// TODO: see examples
```

## Development and testing

```bash
npm install
npm start
```

Then 

```bash
open http://localhost:8080
```

## Demo

[http://nkbt.github.io/in-flux/example](http://nkbt.github.io/in-flux/example)


## Tests

Only UI tests for now, see [demo](http://nkbt.github.io/in-flux/example)

```js
// TODO: need automated tests
```

## License

MIT
