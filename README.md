# Awesome Tiny JS [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

A collection of tiny JS libraries to put your bundle on a diet. Curated by [Vladimir Klepov](https://blog.thoughtspile.tech) Rules:

- Size is under 2Kb-ish, min + gzip, with all deps, except where noted.
- For multi-purpose libraries, the size of a useful subset must be under 2Kb-ish.
- Second-level libraries only allowed for React, Vue, Angular, svelte. 
- Useful client-side. I haven't figured out participation rules for node-only libraries, and I'm not too worried about them.
- 100+ GitHub stars. Adding every obsure library will dilute the list.
- No zero-JS (CSS- or type-only) libraries. It's not awesome-css or something.

Disclaimers:

- Most framework-specific libraries are for React, because that's what I'm familiar with.

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
- [To be Continued](#to-be-continued)

## UI Frameworks

UI frameworks (libraries?) provide declarative templates, event bindings, and observable state to update the view. I've been generous and expanded the size limit for this category to 4Kb, but also increased the star limit to 3K. 

- [preact](https://github.com/preactjs/preact) - React-like API (pre-hooks) in 4Kb. Cool ecosystem of similarly tiny tools and components. Highly recommended.

The following libraries are small and cool, but note they're about [500x less popular than preact.](https://npmtrends.com/fre-vs-hyperapp-vs-million-vs-preact-vs-redom-vs-riot) Kudos for deconstrucing the very essence of a "framework":

- [million](https://github.com/aidenybai/million) - Marketed as a _drop-in replacement for React,_ but in under 2Kb.
- [fre](https://github.com/frejs/fre) - React-like library with hooks and concurrency, 1–3Kb.
- [hyperapp](https://github.com/jorgebucaran/hyperapp) - Declarative UI with pure JS syntax and immutable state, under 2Kb.
- [redom](https://github.com/redom/redom) - Hyperapp-style templates with _imperative_ event listeners and updates, around 2Kb.

And if being declarative is not your thing:

- [umbrella](https://github.com/franciscop/umbrella) - jQuery-style DOM manipulation library in 3Kb.

## Event Emitters

Event emitter pattern is fairly easy to implement yourself, but why bother when you have these cool tools? With an arms race to build the smallest one, the limit is 0.5Kb.

- [mitt](https://github.com/developit/mitt) - 200-byte emitter. I use it on most projects.
- [nanoevents](https://github.com/ai/nanoevents) - Smaller and with nicer unsubscribe API, but no '*' event.
- [eev](https://github.com/chrisdavies/eev) - More of the same in 500b.
- [onfire.js](https://github.com/hustcc/onfire.js) - 500b, but has `.once`.

## Reactive Programming

A step up from a raw event emitter, reactive libraries can build chains of event transforms, filters, and side-effects. You can already use these to build UIs by manually updating DOM on state change:

- [flyd](https://github.com/paldepind/flyd) - Rx-styled event streams in a 2Kb-ish package.
- [hyperactiv](https://github.com/elbywan/hyperactiv) - 4 functions to make objects observable and listen to changes, in 1Kb.
- [flimsy](https://github.com/fabiospampinato/flimsy) - 1Kb reactive core of solid.js that _almost_ fit into UI frameworks category. Author warning: _is probably buggier._

Honorable mentions: [callbag-basics](https://github.com/staltz/callbag-basics) and [oby](https://github.com/vobyjs/oby) _could_ make it _if_ they had tree-shaking, but otherwise are around 7Kb.

## State Managers

State managers combine observable state with actions and framework bindings, intended for app-wide state.

- [zustand](https://github.com/pmndrs/zustand) - ~1Kb store with pleasant actions and selectors. React / vanilla.
- [nanostores](https://github.com/nanostores/nanostores) - Modular store in sub-1Kb with lots of framework connectors.
- [reatom](https://github.com/artalar/reatom) — Reactive stores with a 2Kb core. React / svelte connectors cost extra.
- [storeon](https://github.com/storeon/storeon) - Minimal 400-byte redux-styled store. (p)react, has third-party connectors.
- [unistore](https://github.com/developit/unistore) - Sub-1Kb store with actions from preact developers, (p)react support.
- [teaful](https://github.com/teafuljs/teaful) - (p)react store with useState-like API in 1Kb.

## Routers and URL Utils

Do stuff on URL / history changes, with path matching and parsing:

- [wouter](https://github.com/molefrog/wouter) - Declarative routes for (p)react in 1.5Kb, or a 400-byte hook.
- [@nanostores/router](https://github.com/nanostores/router) - Routes as a nanostores store (framework-agnostic), sub-1Kb.
- [navaid](https://github.com/lukeed/navaid) - History-based observable router, sub-1Kb.
- [routie](https://github.com/jgallen23/routie) - Hash-based observable router, sub-1Kb.

Just want to parse or match URL paths without observing them? Here you go:

- [matchit](https://github.com/lukeed/matchit) - Route parser and matcher, sub-1Kb.
- [regexparam](https://github.com/lukeed/regexparam) - Convert path to regexp in 400 bytes.
- [qss](https://github.com/lukeed/qss) - Parse querystrings in 300b. Not sure you need it, [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL) support is good.

## API Layer

`fetch` API has some boilerplate associated with it: serialize & parse data, reject on non-200 response, etc. These tiny packages handle it for you:

- [redaxios](https://github.com/developit/redaxios) - Drop-in axios replacement in 800 bytes.
- [wretch](https://github.com/elbywan/wretch) - Chainable API with error processing in 2Kb, and lots of extra plugins.
- [gretchen](https://github.com/truework/gretchen) - Chainable API with type-safe errors in 2Kb.

If for some reason you still need a fetch polyfill, try this one:

- [unfetch](https://github.com/developit/unfetch) - Loose fetch polyfill in 500 bytes.

## I18N

A map of strings might seem enough to translate an app, but these tools also handle interpolation and some extra goodies:

- [@nanostores/i18n](https://github.com/nanostores/i18n) - Detect locale, load dictionaries, format dates / numbers in sub-1Kb.
- [rosetta](https://github.com/lukeed/rosetta) - Bare-bones interpolation in 300 bytes.
- [lingui](https://github.com/lingui/js-lingui) - 1.7Kb core with template strings and optional react connector. babel-depenent.
- [eo-locale](https://github.com/ibitcy/eo-locale) - Interpolation & dates / numbers in under 2Kb, including react bindings.

## Dates and Time

Date and time manipulation in pure JS is quite verbose. Luckily, two of the top date libraries have sensible size:

- [date-fns](https://github.com/date-fns/date-fns/) - Not tiny as a whole, but most functions are under 1Kb each (`format` is quite heavy).
- [dayjs](https://github.com/iamkun/dayjs) - 2Kb-ish library with _alomost_ moment.js-compatible API, covers most use cases.

And here are some more packages that only do formatting:

- [tinytime](https://github.com/aweary/tinytime) - Simple 1Kb date formatter, like `{h}:{mm} -> 9:33`.
- [tinydate](https://github.com/lukeed/tinydate) - 400-byte date formatter, only supports padded numeric format (September -> 09).
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - More of the same, in 700 bytes.
- [ms](https://github.com/vercel/ms) - Parse & format ms durations, e.g. `"1m" <-> 60000`, in 900 bytes.
- [timeago.js](https://github.com/hustcc/timeago.js) - Format dates into stuff like _X minutes ago_ or _in X hours,_ 2Kb.
- [fromnow](https://github.com/lukeed/fromnow) - More of the same, but in 350 bytes.

Note that the built-in [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) has decent support.

## Generic Utilities

Something you'd find in lodash or ramda, but smaller. Most are pretty similar and very small, with minor differences in package structure (single / package-per-helper) and tree shaking vs direct helper import.

- [remeda](https://github.com/remeda/remeda) - 90 tree-shakable helpers.
- [rambda](https://github.com/selfrefactor/rambda) - 187 tree-shakable helpers.
- [just](https://github.com/angus-c/just) - 82 helpers in separate packages.
- [@tinkoff/utils](https://github.com/Tinkoff/utils.js) - 173 helpers, 1 import per helper. Conservative browser target.
- [@fxts/core](https://github.com/marpple/FxTS) - 96 tree-shakable helpers. Lazy evaluation support.

Honorable mention: [underscore,](https://github.com/jashkenas/underscore) outshined by lodash by chance, contains many sub-1Kb helpers. It does not tree-shake as well as the libraries above due to codebase structure.

Note: lodash itself is not tree-shakable, but has made many attempts at modulaity with `lodash.method` packages, imports from `lodash/method`, and `lodash-es`, none of which work well in practice. But yes, lodash does handle some corner cases.

Also note that much of the original lodash functionality comes built-in with modern ES. Prefer native versions over libraries as your browser target allows.

## Unique ID Generation

Unique ID generation does not take a lot of code, but it's not someting I'd want to write myself. Limit is 500 bytes. Also note that the [native `crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) has [OK support.](https://caniuse.com/mdn-api_crypto_randomuuid)

- [uuid](https://github.com/lukeed/uuid) - Real UUIDs in 240 bytes.
- [nanoid](https://github.com/ai/nanoid) - Random IDs with larger alphabet in 130 bytes.
- [uid](https://github.com/lukeed/uid) - Can do in in 130–205 bytes.
- [hexoid](https://github.com/lukeed/hexoid) - Hex IDs in 190 bytes.

## Colors

Color manipulation is rare in pure UI development, but very helpful for data visualization, and uses [freaky math.](https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae) Don't fry your brain, take these:

- [colord](https://github.com/omgovich/colord) - Manipulate colors and convert formats. 1.7Kb, exotic color spaces as plugins.
- [colr](https://github.com/stayradiated/colr) - Fits more color spaces, but fewer manipulations than colord, into 1.9Kb.
- [randomcolor](https://github.com/davidmerfield/randomColor) - Random attractive colors with configuration, just above 2Kb.
- [polychrome](https://github.com/cdonohue/polychrome) - Color manipulation in 2Kb.

## To be Continued

See [WIP.md](./WIP.md) for a list of small libraries I have found, but not yet analyzed deeply.

Suggestions welcome! Please check that the lib you're suggesting:

- Fits the [criteria.](#awesome-tiny-js)
- Is not already in [WIP.](./WIP.md) 

And drop a pull request or an [issue](https://github.com/thoughtspile/awesome-tiny-js/issues).

---

Collected and reviewed by [Vladimir Klepov](https://blog.thoughtspile.tech) in 2023. [CC0 license.](./LICENSE)
