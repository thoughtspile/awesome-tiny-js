# Awesome Tiny JS [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

<div align="center">
  <a href="https://github.com/thoughtspile/awesome-tiny-js#readme">
    <img src="./awesome-logo.png" width="300" height="207">
  </a>
</div>

Tiny front-end libraries to put your bundle on a diet. Rules:

- Size is under 2 kB-ish, min + gzip, with all dependencies, except where noted.
- For multi-purpose libraries, the size of a useful subset must be under 2 kB-ish.
- Useful client-side. I haven't figured out participation rules for node-only libraries, and I'm not too worried about them.
- Second-level libraries only allowed for React, Vue, Angular, svelte. 
- 100+ GitHub stars. Libraries with less are awesome, too, but stars indicate some community review.
- No zero-JS (CSS- or type-only) libraries. It's not awesome-css or something.

## Contents

- [UI Frameworks](#ui-frameworks)
- [Event Emitters](#event-emitters)
- [Reactive Programming](#reactive-programming)
- [State Managers](#state-managers)
- [Routers and URL Utils](#routers-and-url-utils)
- [API Layer](#api-layer)
- [I18N](#i18n)
- [Dates and Time](#dates-and-time)
- [Generic Utilities](#generic-utilities)
- [Unique ID Generation](#unique-id-generation)
- [Colors](#colors)

## UI Frameworks

UI frameworks (libraries?) provide declarative templates, event bindings, and observable state to update the view. I've been generous and expanded the size limit for this category to 4.5 kB (if you're boring, count them as 2 libraries), but also increased the star limit to 2K. 

- [preact](https://github.com/preactjs/preact) - React-like API (pre-hooks). Cool ecosystem of similarly tiny tools and components. Highly recommended. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/preact.svg?label=&color=grey">

The following libraries are small and cool, but note they're about [500x less popular than preact.](https://npmtrends.com/fre-vs-hyperapp-vs-million-vs-preact-vs-redom-vs-riot) Kudos for deconstrucing the very essence of a "framework":

- [million](https://github.com/aidenybai/million) - Marketed as a _drop-in replacement for React._ <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/million.svg?label=&color=grey">
- [fre](https://github.com/frejs/fre) - React-like library with hooks and concurrency, 1–3 kB with tree-shaking. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/fre.svg?label=&color=grey">
- [hyperapp](https://github.com/jorgebucaran/hyperapp) - Declarative UI with pure JS syntax and immutable state. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/hyperapp.svg?label=&color=grey">
- [redom](https://github.com/redom/redom) - Hyperapp-style templates with _imperative_ event listeners and updates. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/redom.svg?label=&color=grey">

And if being declarative is not your thing:

- [umbrella](https://github.com/franciscop/umbrella) - jQuery-style DOM manipulation library. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/umbrellajs.svg?label=&color=grey">

## Event Emitters

Event emitter pattern is fairly easy to implement yourself, but why bother when you have these cool tools? With an arms race to build the smallest one, the limit is 0.5 kB.

- [mitt](https://github.com/developit/mitt) - Plain event emitter that I use on most projects. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/mitt.svg?label=&color=grey">
- [nanoevents](https://github.com/ai/nanoevents) - Nicer unsubscribe API, but no `*` event. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/nanoevents.svg?label=&color=grey">
- [eev](https://github.com/chrisdavies/eev) - More of the same. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/eev.svg?label=&color=grey">
- [onfire.js](https://github.com/hustcc/onfire.js) - Also has `.once` method. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/onfire.js.svg?label=&color=grey">

## Reactive Programming

A step up from a raw event emitter, reactive libraries can build chains of event transforms, filters, and side-effects. You can already use these to build UIs by manually updating DOM on state change:

- [flyd](https://github.com/paldepind/flyd) - Rx-styled event streams. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/flyd.svg?label=&color=grey">
- [callbag-basics](https://github.com/staltz/callbag-basics) - Rx-style event streams. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/callbag-basics.svg?label=&color=grey">
- [hyperactiv](https://github.com/elbywan/hyperactiv) - 4 functions to make objects observable and listen to changes (mobx-style). <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/hyperactiv.svg?label=&color=grey">
- [flimsy](https://github.com/fabiospampinato/flimsy) - Signals from Solid (it _almost_ fit into UI frameworks category itself). Author warning: _it's probably buggy._ <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/flimsy.svg?label=&color=grey">

Honorable mention: [oby](https://github.com/vobyjs/oby) _could_ make it _if_ it had tree-shaking, but otherwise is around 7 kB.

## State Managers

State managers combine observable state with actions and framework bindings, intended for app-wide state.

- [zustand](https://github.com/pmndrs/zustand) - Simple stores with pleasant actions and selectors. React <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/zustand.svg?label=&color=grey"> or vanilla <img align="top" height="24" src="https://deno.bundlejs.com/?q=zustand/vanilla&badge=">
- [nanostores](https://github.com/nanostores/nanostores) - Modular store with good tree-shaking support <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/zustand.svg?label=&color=grey"> Lots of framework connectors (e.g. React <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@nanostores/react.svg?label=&color=grey">).
- [exome](https://github.com/marcisbee/exome) - Atomic store with lots of framework connectors <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/exome.svg?label=&color=grey">
- [reatom](https://github.com/artalar/reatom) - Reactive stores. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@reatom/core.svg?label=&color=grey">
- [storeon](https://github.com/storeon/storeon) - Minimal redux-styled store with lots of framework connectors <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/storeon.svg?label=&color=grey">
- [unistore](https://github.com/developit/unistore) - Centralized store with actions for React / preact <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/unistore.svg?label=&color=grey">
- [teaful](https://github.com/teafuljs/teaful) - Store with useState-like API for React / preact <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/teaful.svg?label=&color=grey">

## Routers and URL Utils

Do stuff on URL / history changes, with path matching and parsing:

- [wouter](https://github.com/molefrog/wouter) - Declarative router for (p)react <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/wouter.svg?label=&color=grey">, also available as a 400-byte hook.
- [@nanostores/router](https://github.com/nanostores/router) - Routes as a nanostores store (framework-agnostic) <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@nanostores/router.svg?label=&color=grey">
- [navaid](https://github.com/lukeed/navaid) - History-based observable router <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/navaid.svg?label=&color=grey">
- [routie](https://github.com/jgallen23/routie) - Hash-based observable router <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/routie.svg?label=&color=grey">

Just want to parse or match URL paths without observing them? Here you go:

- [matchit](https://github.com/lukeed/matchit) - Route parser and matcher in <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/matchit.svg?label=&color=grey">
- [regexparam](https://github.com/lukeed/regexparam) - Convert path to regexp in <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/regexparam.svg?label=&color=grey">
- [qss](https://github.com/lukeed/qss) - Parse querystrings <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/qss.svg?label=&color=grey">. Not sure you need it, [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL) support is good. 

## API Layer

`fetch` API has some boilerplate associated with it: serialize & parse data, reject on non-200 response, etc. These tiny packages handle it for you:

- [redaxios](https://github.com/developit/redaxios) - Drop-in axios replacement for modern browsers <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/redaxios.svg?label=&color=grey">
- [wretch](https://github.com/elbywan/wretch) - Chainable API with error processing and lots of extra plugins. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/wretch.svg?label=&color=grey">
- [gretchen](https://github.com/truework/gretchen) - Chainable API with type-safe errors. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/gretchen.svg?label=&color=grey">

If for some reason you still need a fetch polyfill, try this one:

- [unfetch](https://github.com/developit/unfetch) - Loose fetch polyfill. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/unfetch.svg?label=&color=grey">

## I18N

A map of strings might seem enough to translate an app, but these tools also handle interpolation and some extra goodies:

- [@nanostores/i18n](https://github.com/nanostores/i18n) - Detect locale, load dictionaries, format dates / numbers. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@nanostores/i18n.svg?label=&color=grey">
- [rosetta](https://github.com/lukeed/rosetta) - Bare-bones template strings (`{{hello}}, {{username}}`) and custom functions for everyting else. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/rosetta.svg?label=&color=grey">
- [lingui](https://github.com/lingui/js-lingui) - small core with template strings, babel-depenent. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@lingui/core.svg?label=&color=grey"> Optional react connector: <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@lingui/react.svg?label=&color=grey">
- [eo-locale](https://github.com/ibitcy/eo-locale) - Interpolation & dates / numbers, <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/eo-locale.svg?label=&color=grey"> including react bindings.

## Dates and Time

Date and time manipulation in pure JS is verbose. Luckily, two of the top date libraries have sensible size:

- [date-fns](https://github.com/date-fns/date-fns/) - Not tiny as a whole, but [most functions](https://bundlephobia.com/package/date-fns) are under 1 kB each (format and parse are quite heavy).
- [dayjs](https://github.com/iamkun/dayjs) - _Almost_ moment.js-compatible API, covers most use cases. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/dayjs.svg?label=&color=grey">

And some more packages that only do formatting:

- [tinytime](https://github.com/aweary/tinytime) - Simple date / time formatter: `{h}:{mm} -> 9:33`. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/tinytime.svg?label=&color=grey">
- [tinydate](https://github.com/lukeed/tinydate) - Date / time formatter, only supports padded numeric output (`September -> 09`). <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/tinydate.svg?label=&color=grey">
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - More of the same. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/time-stamp.svg?label=&color=grey">
- [ms](https://github.com/vercel/ms) - Parse & format ms durations, e.g. `"1m" <-> 60000`. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/ms.svg?label=&color=grey">
- [timeago.js](https://github.com/hustcc/timeago.js) - Format dates into stuff like _X minutes ago_ or _in X hours._ <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/timeago.js.svg?label=&color=grey">
- [fromnow](https://github.com/lukeed/fromnow) - More of the same. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/fromnow.svg?label=&color=grey">

Note that the built-in [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) has decent support.

## Generic Utilities

Something you'd find in lodash or ramda, but smaller. Most are pretty similar and very small, with minor differences in package structure (single / package-per-helper) and tree shaking vs direct helper import.

- [remeda](https://github.com/remeda/remeda) - 90 tree-shakable helpers. [(list).](https://bundlephobia.com/package/remeda)
- [rambda](https://github.com/selfrefactor/rambda) - 187 tree-shakable helpers [(list).](https://bundlephobia.com/package/rambda)
- [just](https://github.com/angus-c/just) - 82 helpers in separate packages. [(list).](https://anguscroll.com/just/)
- [@tinkoff/utils](https://github.com/Tinkoff/utils.js) - 173 helpers, 1 import per helper. Conservative browser target.
- [@fxts/core](https://github.com/marpple/FxTS) - 96 tree-shakable helpers. Lazy evaluation support.

Honorable mention: [underscore,](https://github.com/jashkenas/underscore) outshined by lodash by chance, contains many sub-1 kB helpers. It does not tree-shake as well as the libraries above due to codebase structure.

Note: lodash itself is not tree-shakable, but has made many attempts at modulaity with `lodash.method` packages, imports from `lodash/method`, and `lodash-es`, none of which work well in practice.

Also note that much of the original lodash functionality comes built-in with modern ES. Prefer native versions over libraries as your browser target allows.

## Unique ID Generation

Unique ID generation does not take a lot of code, but it's not someting I'd want to write myself. Limit is 500 bytes. Also note that the [native `crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) has [OK support.](https://caniuse.com/mdn-api_crypto_randomuuid)

- [@lukeed/uuid](https://github.com/lukeed/uuid) - Real UUIDs, <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/@lukeed/uuid.svg?label=&color=grey">
- [nanoid](https://github.com/ai/nanoid) - Random IDs with larger alphabet, <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/nanoid.svg?label=&color=grey">
- [uid](https://github.com/lukeed/uid) - More of the same, <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/uid.svg?label=&color=grey">
- [hexoid](https://github.com/lukeed/hexoid) - Hexadecimal IDs, <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/hexoid.svg?label=&color=grey">

## Colors

Color manipulation is rare in pure UI development, but very helpful for data visualization, and uses [freaky math.](https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae) Don't fry your brain, take these:

- [colord](https://github.com/omgovich/colord) - Manipulate colors and convert between spaces <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/colord.svg?label=&color=grey"> Extra features come as plugins, 150b to 1.5 kB each.
- [colr](https://github.com/stayradiated/colr) - Manipulate colors and convert between spaces in <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/colr.svg?label=&color=grey" >
- [polychrome](https://github.com/cdonohue/polychrome) - Color manipulation <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/polychrome.svg?label=&color=grey">
- [randomcolor](https://github.com/davidmerfield/randomColor) - Attractive random colors with configuration. <img align="top" height="24" src="https://img.shields.io/bundlephobia/minzip/randomcolor.svg?label=&color=grey">

## Contributing

Suggestions welcome! See [contributing.md](contributing.md), or drop an [issue](https://github.com/thoughtspile/awesome-tiny-js/issues).

## Footnotes

See [WIP](wip.md) for possibly awesome libraries I have found, but not yet analyzed deeply, and [incubate](incubate.md) for awesome libraries that don't meet popularity criteria yet.

Collected and reviewed by [Vladimir Klepov](https://blog.thoughtspile.tech) in 2023.
