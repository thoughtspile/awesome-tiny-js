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
- 100+ GitHub stars _or_ 500+ weekly npm installs to focus on tools with some community review.
- No zero-JS (CSS- or type-only) libraries. It's not awesome-css or something.

## Contents

- [UI Frameworks](#ui-frameworks)
- [Event Emitters](#event-emitters)
- [State Managers](#state-managers)
  - [Signals](#signals)
  - [Reactive Programming](#reactive-programming)
- [Routers and URL Utils](#routers-and-url-utils)
- [API Layer](#api-layer)
- [I18N](#i18n)
- [Dates and Time](#dates-and-time)
- [Generic Utilities](#generic-utilities)
- [Validation](#validation)
- [Unique ID Generation](#unique-id-generation)
- [Colors](#colors)
- [Touch Gestures](#touch-gestures)
- [Text Search](#text-search)

## UI Frameworks

UI frameworks (libraries?) provide declarative templates, event bindings, and observable state to update the view. I've been generous and expanded the size limit for this category to 4.5 kB (if you're boring, count them as 2 libraries), but also increased the star limit to 2K. 

- [preact](https://github.com/preactjs/preact) - React-like API (pre-hooks). Cool ecosystem of similarly tiny tools and components. Highly recommended. <img align="top" height="24" src="./img/preact.svg">

The following libraries are small and cool, but note they're about [500x less popular than preact.](https://npmtrends.com/preact-vs-hyperapp-vs-redom) Kudos for deconstrucing the very essence of a "framework":

- [hyperapp](https://github.com/jorgebucaran/hyperapp) - vDOM framework with pure JS syntax and immutable state, <img align="top" height="24" src="./img/hyperapp.svg">
- [redom](https://github.com/redom/redom) - Hyperapp-style templates with _imperative_ event listeners and updates, <img align="top" height="24" src="./img/redom.svg">

Now, for the [openly experimental](https://npmtrends.com/@arrow-js/core-vs-fre-vs-hyperapp-vs-redom-vs-superfine-vs-vanjs-core) UI libraries:

- [fre](https://github.com/frejs/fre) - React-like library with hooks and concurrency, <img align="top" height="24" src="./img/fre.svg">
- [van](https://github.com/vanjs-org/van) - vDOM-based framework optimized for no-build setups, <img align="top" height="24" src="./img/vanjs-core.svg">
- [superfine](https://github.com/jorgebucaran/superfine) - Hyperapp with state & effect hooks removed, <img align="top" height="24" src="./img/superfine.svg">
- [arrowjs](https://github.com/justin-schroeder/arrow-js) - Tagged templates + reactive data, <img align="top" height="24" src="./img/arrow-jscore.svg">

And if being declarative is not your thing:

- [umbrella](https://github.com/franciscop/umbrella) - jQuery-style DOM manipulation library, <img align="top" height="24" src="./img/umbrellajs.svg">

## Event Emitters

Event emitter pattern is fairly easy to implement yourself, but why bother when you have these cool tools? With an arms race to build the smallest one, the limit is 0.5 kB.

- [mitt](https://github.com/developit/mitt) - Plain event emitter that I use on most projects, <img align="top" height="24" src="./img/mitt.svg">
- [nanoevents](https://github.com/ai/nanoevents) - Nicer unsubscribe API, but no `*` event, <img align="top" height="24" src="./img/nanoevents.svg">
- [onfire.js](https://github.com/hustcc/onfire.js) - Also has `.once` method, <img align="top" height="24" src="./img/onfirejs.svg">

## State Managers

State managers combine observable state with actions and framework bindings, intended for app-wide state.

- [zustand](https://github.com/pmndrs/zustand) - Simple stores with pleasant actions and selectors. Vanilla <img align="top" height="24" src="./img/zustandvanilla.svg">, React <img align="top" height="24" src="./img/zustand.svg">
- [nanostores](https://github.com/nanostores/nanostores) - Modular store with good tree-shaking support, <img align="top" height="24" src="./img/nanostores.svg"> vanilla, + React <img align="top" height="24" src="./img/nanostoresreact.svg"> extra. Supports all the top frameworks.
- [exome](https://github.com/marcisbee/exome) - Atomic stores with lots of framework connectors, <img align="top" height="24" src="./img/exome.svg"> + React <img align="top" height="24" src="./img/exomereact.svg"> extra. Supports all the top frameworks.
- [storeon](https://github.com/storeon/storeon) - Minimal redux-styled store with lots of framework connectors, <img align="top" height="24" src="./img/storeon.svg">. React extra <img align="top" height="24" src="./img/storeonreact.svg"> + Vue, Svelte, Angular.
- [unistore](https://github.com/developit/unistore) - Centralized store with actions, <img align="top" height="24" src="./img/unistore.svg"> + React <img align="top" height="24" src="./img/unistorereact.svg">
- [teaful](https://github.com/teafuljs/teaful) - Store with useState-like API, <img align="top" height="24" src="./img/teaful.svg">, including React / preact connector.

### Signals

A signal-styled state manager provides observable values (aka _signals_), derived values and effects.

- [@preact/signals](https://github.com/preactjs/signals) - The OG signals from preact <img align="top" height="24" src="./img/preactsignals-core.svg"> core, <img align="top" height="24" src="./img/preactsignals-react.svg"> with react integration.
- [usignal](https://github.com/WebReflection/usignal) - A smaller signal implementation, <img align="top" height="24" src="./img/usignal.svg">
- [hyperactiv](https://github.com/elbywan/hyperactiv) - 4 functions to make objects observable and listen to changes, <img align="top" height="24" src="./img/hyperactiv.svg">
- [flimsy](https://github.com/fabiospampinato/flimsy) - Signals from Solid (it _almost_ fit into UI frameworks category itself). Author warning: _it's probably buggy._ <img align="top" height="24" src="./img/flimsy.svg">

Honorable mention: [oby](https://github.com/vobyjs/oby) _could_ make it _if_ it had tree-shaking, but otherwise is around 7 kB.

### Reactive Programming

Another well-known state management approach is reactive programmning — operating on event streams, applying filters and transforms to end up with an observable value. Think RxJS, but tiny:

- [flyd](https://github.com/paldepind/flyd) - Rx-styled event streams, <img align="top" height="24" src="./img/flyd.svg">
- [callbag-basics](https://github.com/staltz/callbag-basics) - Rx-style event streams, <img align="top" height="24" src="./img/callbag-basics.svg">

## Routers and URL Utils

Do stuff on URL / history changes, with path matching and parsing:

- [wouter](https://github.com/molefrog/wouter) - Declarative router for React / preact, <img align="top" height="24" src="./img/wouter.svg">, also available as a standalone hook: <img align="top" height="24" src="./img/wouteruse-browser-location.svg">
- [@nanostores/router](https://github.com/nanostores/router) - Routes as a nanostores store (framework-agnostic), <img align="top" height="24" src="./img/nanostoresrouter.svg">
- [navaid](https://github.com/lukeed/navaid) - History-based observable router, <img align="top" height="24" src="./img/navaid.svg">

Just want to parse or match URL paths without observing them? Here you go:

- [matchit](https://github.com/lukeed/matchit) - Route parser and matcher in <img align="top" height="24" src="./img/matchit.svg">
- [regexparam](https://github.com/lukeed/regexparam) - Convert path to regexp in <img align="top" height="24" src="./img/regexparam.svg">
- [qss](https://github.com/lukeed/qss) - Parse querystrings in <img align="top" height="24" src="./img/qss.svg">. Not sure you need it, [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL) support is good. 

## API Layer

`fetch` API has some boilerplate associated with it: serialize & parse data, reject on non-200 response, etc. These tiny packages handle it for you:

- [redaxios](https://github.com/developit/redaxios) - Drop-in axios replacement for modern browsers, <img align="top" height="24" src="./img/redaxios.svg">
- [wretch](https://github.com/elbywan/wretch) - Chainable API with error processing and lots of extra plugins, <img align="top" height="24" src="./img/wretch.svg">
- [gretchen](https://github.com/truework/gretchen) - Chainable API with type-safe errors, <img align="top" height="24" src="./img/gretchen.svg">

If for some reason you still need a fetch polyfill, try this one:

- [unfetch](https://github.com/developit/unfetch) - Loose fetch polyfill, <img align="top" height="24" src="./img/unfetch.svg">

## I18N

A map of strings might seem enough to translate an app, but these tools also handle interpolation and some extra goodies:

- [@nanostores/i18n](https://github.com/nanostores/i18n) - Detect locale, load dictionaries, format dates / numbers, <img align="top" height="24" src="./img/nanostoresin.svg"> including nanostores.
- [eo-locale](https://github.com/ibitcy/eo-locale) - Interpolation and dates / numbers, <img align="top" height="24" src="./img/eo-localecore.svg">, or <img align="top" height="24" src="./img/eo-localereact.svg"> with react bindings.
- [rosetta](https://github.com/lukeed/rosetta) - Bare-bones template strings (`{{hello}}, {{username}}`) and custom functions for everyting else, <img align="top" height="24" src="./img/rosetta.svg">
- [lingui](https://github.com/lingui/js-lingui) - Small core with template strings, <img align="top" height="24" src="./img/linguicore.svg">

## Dates and Time

Date and time manipulation in pure JS is verbose. Luckily, two of the top date libraries have sensible size:

- [date-fns](https://github.com/date-fns/date-fns/) - Not tiny as a whole, but [most functions](https://bundlephobia.com/package/date-fns) are under 1 kB each (format and parse are quite heavy).
- [dayjs](https://github.com/iamkun/dayjs) - _Almost_ moment.js-compatible API, covers most use cases, <img align="top" height="24" src="./img/dayjsesm.svg">

And some more packages that only do formatting:

- [tinytime](https://github.com/aweary/tinytime) - Simple date / time formatter: `{h}:{mm} -> 9:33`, <img align="top" height="24" src="./img/tinytime.svg">
- [tinydate](https://github.com/lukeed/tinydate) - Date / time formatter, only supports padded numeric output (`September -> 09`), <img align="top" height="24" src="./img/tinydate.svg">
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - More of the same, <img align="top" height="24" src="./img/time-stamp.svg">
- [ms](https://github.com/vercel/ms) - Parse & format ms durations, e.g. `"1m" <-> 60000`, <img align="top" height="24" src="./img/ms.svg">
- [timeago.js](https://github.com/hustcc/timeago.js) - Format dates into stuff like _X minutes ago_ or _in X hours,_ <img align="top" height="24" src="./img/timeagojs.svg">
- [fromnow](https://github.com/lukeed/fromnow) - More of the same, <img align="top" height="24" src="./img/fromnow.svg">

Note that the built-in [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) has decent support.

## Generic Utilities

Something you'd find in lodash or ramda, but smaller. Most are pretty similar and very small, with minor differences in package structure (single / package-per-helper) and tree shaking vs direct helper import.

- [remeda](https://github.com/remeda/remeda) - 90 tree-shakable helpers [(list).](https://bundlephobia.com/package/remeda)
- [rambda](https://github.com/selfrefactor/rambda) - 187 tree-shakable helpers [(list).](https://bundlephobia.com/package/rambda)
- [just](https://github.com/angus-c/just) - 82 helpers in separate packages [(list).](https://anguscroll.com/just/)
- [@fxts/core](https://github.com/marpple/FxTS) - 96 tree-shakable helpers. Lazy evaluation support.

Honorable mention: [underscore,](https://github.com/jashkenas/underscore) contains many sub-1 kB helpers. It does not tree-shake as well as the libraries above due to codebase structure.

Note: lodash itself is not tree-shakable, but has made many attempts at modulaity with `lodash.method` packages, imports from `lodash/method`, and `lodash-es`, none of which work well in practice.

Also note that much of the original lodash functionality comes built-in with modern ES. Prefer native versions over libraries as your browser target allows.

## Validation

To check if an object matches an expected schema, you'd often use zod, yup, joi or ajv. But 90% of the time you can get what you need in under 2 kB. _Note:_ I compare a base validation subset (core + object / array + string / number / boolean) under tree-shaking to avoid punishing libs that have more features.

- [v8n](https://github.com/imbrn/v8n) - zod-style API with fine-grained checks: `v8n().string().minLength(5).first("H").last("o")`. No tree shaking, <img align="top" height="24" src="./img/vn.svg">
- [banditypes](https://github.com/thoughtspile/banditypes) - The smallest validation library: <img align="top" height="24" src="./img/banditypes.svg">
- [superstruct](https://github.com/ianstormtaylor/superstruct) - The most popular modular validation library with good tree-shaking, <img align="top" height="24" src="./img/superstruct.svg">
- [valibot](https://github.com/fabian-hiller/valibot) - Another modular validation library, <img align="top" height="24" src="./img/valibot.svg">
- [deep-waters](https://github.com/antonioru/deep-waters) - Composable functional validators, <img align="top" height="24" src="./img/deep-waterscompose-deep-watershasShape-deep-watersarrayOf-deep-watersisString-deep-watersisNumber-deep-watersisBoolean.svg">.

## Unique ID Generation

Unique ID generation does not take a lot of code, but it's not someting I'd want to write myself. Limit is 500 bytes. Also note that the [native `crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) has [OK support.](https://caniuse.com/mdn-api_crypto_randomuuid)

- [@lukeed/uuid](https://github.com/lukeed/uuid) - Real UUIDs, <img align="top" height="24" src="./img/lukeeduuid.svg">
- [nanoid](https://github.com/ai/nanoid) - Random IDs with larger alphabet, <img align="top" height="24" src="./img/nanoid.svg">
- [uid](https://github.com/lukeed/uid) - More of the same, <img align="top" height="24" src="./img/uid.svg">
- [hexoid](https://github.com/lukeed/hexoid) - Hexadecimal IDs, <img align="top" height="24" src="./img/hexoid.svg">

## Colors

Color manipulation is rare in pure UI development, but very helpful for data visualization, and uses [freaky math.](https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae) Don't fry your brain, take these:

- [colord](https://github.com/omgovich/colord) - Manipulate colors and convert between spaces, <img align="top" height="24" src="./img/colord.svg">. Extra features come as plugins, 150b to 1.5 kB each.
- [colr](https://github.com/stayradiated/colr) - More of the same, <img align="top" height="24" src="./img/colr.svg" >
- [polychrome](https://github.com/cdonohue/polychrome) - More of the same, <img align="top" height="24" src="./img/polychrome.svg">
- [randomcolor](https://github.com/davidmerfield/randomColor) - Attractive random colors with configuration. <img align="top" height="24" src="./img/randomcolor.svg">

## Touch Gestures

Touch gestures like swipe, drag, pinch or doubletap are a staple of mobile UX, but recognizing a series of touchmove / pointer events as a gesture is tricky, and testing is painful. Here are two libraries that do the heavy lifting for you:

- [alloyfinger](https://github.com/AlloyTeam/AlloyFinger) - Pan, swipe, tap, doubletap, longpress, _and_ pinch / rotate. My personal favorite. <img align="top" height="24" src="./img/alloyfinger.svg">.
- [tinygesture](https://github.com/sciactive/tinygesture) - Configurable pan, swipe, tap, doubletap, longpress. <img align="top" height="24" src="./img/tinygesture.svg">.

Even if you want to detect gestures yourself, juggling mouse, touch and pointer events is hard enough, and browser inconsistencies don't help. Here are two more libraries to assist with that:

- [pointer-tracker](https://github.com/GoogleChromeLabs/pointer-tracker) - Unified interface for mouse, touch and pointer events, <img align="top" height="24" src="./img/pointer-tracker.svg">
- [detect-it](https://github.com/rafgraph/detect-it) - Detect present and primary input method (touch / mouse) and supported events, <img align="top" height="24" src="./img/detect-it.svg">

Honorable mentions: [any-touch](https://github.com/any86/any-touch) attempts a modular approach to gesture detection, but the core is around 2 kB without any gesture recognizers. [rc-gesture,](https://github.com/react-component/gesture) used in ant design system, could be the only react component on the list, but babel-runtime / corejs polyfills hard-wired into the build push the ~2.5 kB size to over 10 kB.

## Text Search

Text search is important for client-side filtering and autosuggests. Naive `option.includes(search)` has no sensible order on the results, and ignoring word boundaries gives unexpected matches like _spa -> newSPAper._ First, here are some libraries that prioritize word matches:

- [js-search](https://github.com/bvaughn/js-search) - Feature-rich and customizable: multi-field indices, stop words, custom stemmers and tokenizers. <img align="top" height="24" src="./img/js-search.svg">
- [ndx](https://github.com/localvoid/ndx) - Similar to js-search, differs in [ranking](https://kmwllc.com/index.php/2020/03/20/understanding-tf-idf-and-bm-25/) and is less strict for multi-word queries [(compare)](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,ndx,Wade&search=twilight%20sag). Supports field weights. <img align="top" height="24" src="./img/ndx-ndxquery.svg">
- [wade](https://github.com/kbrsh/wade) - Also similar, [(compare)](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,Wade,ndx&search=twilight%20sag) <img align="top" height="24" src="./img/wade.svg">
- [libsearch](https://github.com/thesephist/libsearch) - Index-free search (slower, but easier to use) with sane ordering <img align="top" height="24" src="./img/libsearch.svg">

One way to find sensible inexact matches is _stemming_ — converting words to a root form. _Walked_ will match _walking,_ etc. Here are a few [Porter stemmers](https://vijinimallawaarachchi.com/2017/05/09/porter-stemming-algorithm/) for English language:

- [stemmer](https://github.com/words/stemmer) - <img align="top" height="24" src="./img/stemmer.svg">
- [porter-stemmer](https://github.com/jedp/porter-stemmer) - <img align="top" height="24" src="./img/porter-stemmer.svg">

For non-English words, I only have honorable mentions: [snowball-js](https://github.com/fortnightlabs/snowball-js) is 17 kB with 15 languages, [lunr-languages](https://github.com/MihaiValentin/lunr-languages) supports 30 languages but only works with [lunr,](https://github.com/olivernn/lunr.js) the most promising one is [natural](https://github.com/NaturalNode/natural/tree/master/lib/natural/stemmers) but it depends on Node.js.

### Fuzzy search

__Fuzzy search__ is another take on inexact matching — the words can be modified. First, we have libraries that only allow insertion: spacecat -> SPACECrAfT. Not perfect for general-purpose text search, but great for filename, command, or URL lookups.

- [fuzzy](https://github.com/mattyork/fuzzy) - Index-free, can highlight matches. <img align="top" height="24" src="./img/fuzzy.svg">
- [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search) - With stateful index. <img align="top" height="24" src="./img/fuzzy-search.svg">
- [fzy.js](https://github.com/jhawthorn/fzy.js) - Matches one string at a time, tree-shakeable scores and match highlighting. <img align="top" height="24" src="./img/fzyjs.svg"> total, or ~150 bytes for `hasMatch` only.
- [fuzzysearch](https://github.com/bevacqua/fuzzysearch) -  One string at a time, does not compute score / rank. <img align="top" height="24" src="./img/fuzzysearch.svg">
- [liquidmetal](https://github.com/rmm5t/liquidmetal) - Quicksilver algorithm, prioritizes matches at start of word for command abbreviations (e.g. `gp` -> `git push`). One string at a time. <img align="top" height="24" src="./img/liquidmetal.svg">
- [quick-score](https://github.com/fwextensions/quick-score) - Another quicksilver-based lib, tweaked for long strings. Built-in list filtering and sorting, <img align="top" height="24" src="./img/quick-score.svg"> or 1.2 kB for single-string scoring.

Finally, one library is specifically built for spellchecking:

- [fuzzyset](https://github.com/Glench/fuzzyset.js) - Find misspellings, e.g. missipissi -> Missisipi, <img align="top" height="24" src="./img/fuzzyset.svg"> Commercial usage costs $42.


## Contributing

Suggestions welcome! See [contributing.md](contributing.md), or drop an [issue](https://github.com/thoughtspile/awesome-tiny-js/issues).

## Footnotes

See [WIP](wip.md) for possibly awesome libraries I have found, but not yet analyzed deeply, and [incubate](incubate.md) for awesome libraries that don't meet popularity criteria yet.

Collected and reviewed by [Vladimir Klepov](https://blog.thoughtspile.tech) in 2023.
