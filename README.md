# Awesome smol JS

A collection of tiny JS libraries to put your bundle on a diet. Curated by [Vladimir Klepov](https://blog.thoughtspile.tech) Rules:

- Size is under 2Kb-ish, min + gzip, with all deps, except where noted.
- For multi-purpose libraries, the size of a useful subset must be under 2Kb-ish.
- Second-level libraries only allowed for React, Vue, Angular, svelte. 
- Useful client-side. I haven't figured out participation rules for node-only libraries, and I'm not too worried about them.
- 100+ GitHub stars. Adding every obsure library will dilute the list.
- No zero-JS (CSS- or type-only) libraries. It's not awesome-css or something.

Disclaimers:

- I haven't used all these libraries personally. The ones I tried and enjoyed are marked with :star:
- Most framework-specific libraries are for React, because that's what I'm familiar with.

Suggestions welcome! Please check that the lib you're suggesting is not already in [WIP](./WIP.md) and drop an [issue](https://github.com/thoughtspile/awesome-tiny-js/issues).

## Categories

- [UI Frameworks](#ui-frameworks)
- [Event Emitters](#event-emitters)
- [Reactive programming](#reactive-programming)
- [State managers](#state-managers)
- [Routers and URL utils](#routers-and-url-utils)
- [API Layer](#api-layer)
- [I18N](#i18n)

The list is actively updated to include more categories and tools.

## UI Frameworks

UI frameworks (libraries?) provide declarative templates, event bindings, and observable state to update the view. I've been generous and expanded the size limit for this category to 4Kb, but also increased the star limit to 3K. These libs can be used to study how frameworks work under the hood.

- [preact](https://github.com/preactjs/preact) :star: — React-like API (pre-hooks) in 4Kb. Cool ecosystem of similarly tiny tools and components. Highly recommended.
- [million](https://github.com/aidenybai/million) — Marketed as a _drop-in replacement for React,_ but in under 2Kb.
- [fre](https://github.com/frejs/fre) — React-like library with hooks and concurrency, 1–3Kb.
- [hyperapp](https://github.com/jorgebucaran/hyperapp) — Declarative UI with pure JS syntax and immutable state, under 2Kb.
- [redom](https://github.com/redom/redom) — Hyperapp-style templates with _imperative_ event listeners and updates, around 2Kb.
- [umbrella](https://github.com/franciscop/umbrella) is not a _framework,_ but a jQuery-style DOM manipulation library in 3Kb.

## Event emitters

Event emitter pattern is fairly easy to implement yourself, but why bother when you have these cool tools? With an arms race to build the smallest one, the limit is 0.5Kb.

- [mitt](https://github.com/developit/mitt) :star: — 200-byte emitter. I use it on most projects.
- [nanoevents](https://github.com/ai/nanoevents) — smaller and with nicer unsubscribe API, but no '*' event.
- [eev](https://github.com/chrisdavies/eev) — more of the same in 500b.
- [onfire.js](https://github.com/hustcc/onfire.js) — 500b, but has `.once`.

## Reactive programming

A step up from the raw event emitter, we reactive libraries can build chains of event transforms, filters, and side-effects. You can already use these to build UIs by manually updating DOM on state change:

- [hyperactiv](https://github.com/elbywan/hyperactiv) — 4 functions to make objects observable and listen to changes, in 1Kb.
- [flimsy](https://github.com/fabiospampinato/flimsy) — 1Kb reactive core of [solid.js] that _almost_ fit into UI frameworks category. Author warning: _is probably buggier._

Honorable mentions: [callbag-basics](https://github.com/staltz/callbag-basics) and [oby](https://github.com/vobyjs/oby) _could_ make it _if_ they supported tree-shaking, but otherwise are around 7Kb.

## State managers

State managers combine observable state with actions and framework bindings, intended for app-wide state.

- [zustand](https://github.com/pmndrs/zustand) :star: — ~1Kb store with pleasant actions and selectors. React / vanilla.
- [nanostores](https://github.com/nanostores/nanostores) — modular store in sub-1Kb with lots of framework connectors.
- [storeon](https://github.com/storeon/storeon) — minimal 400-byte redux-styled store. React / preact / third-party connectors.
- [unistore](https://github.com/developit/unistore) :star: — redux-styled store from preact developers. Has react support. Sub-1Kb.
- [teaful](https://github.com/teafuljs/teaful) — React / preact store with useState-like API in 1Kb.

## Routers and URL utils

Do stuff on URL / history changes. Maybe with framework bindings.

- [wouter](https://github.com/molefrog/wouter) — Declarative routes for react / preact in 1.5Kb, or a 400-byte hook.
- [navaid](https://github.com/lukeed/navaid) — history-based route parser & observer, sub-1Kb.
- [routie](https://github.com/jgallen23/routie) — hash-based route parser & observer, sub-1Kb.

Just want to parse or match URL paths without observing them? Here you go:

- [matchit](https://github.com/lukeed/matchit) — route parser and matcher, sub-1Kb.
- [regexparam](https://github.com/lukeed/regexparam) — convert path to regexp in 400 bytes.
- [qss](https://github.com/lukeed/qss) — parse querystrings in 300b. Not sure you need it with good [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL) support.

## API Layer

`fetch` API has some boilerplate associated with it: serialize & parse data, reject on non-200 response, and so on. Here are tiny packages that handle it for you:

- [redaxios](https://github.com/developit/redaxios) — drop-in axios replacement in 800 bytes.
- [wretch](https://github.com/elbywan/wretch) — chainable API with error processing in 2Kb, and lots of extra plugins.
- [gretchen](https://github.com/truework/gretchen) — chainable API with type-safe errors in 2Kb.

If for some reason you still need a fetch polyfill, try this one:

- [unfetch](https://github.com/developit/unfetch) :star: — loose fetch polyfill in 500 bytes.

## I18N

A map of strings might seem enough to translate an app, but these tools also handle interpolation and have some extra goodies:

- [@nanostores/i18n](https://github.com/nanostores/i18n) — detect locale, load dictionaries, format dates / numbers in sub-1Kb.
- [rosetta](https://github.com/lukeed/rosetta) — bare-bones interpolation in 300 bytes.
- [lingui](https://github.com/lingui/js-lingui) — 1.7Kb core with template strings and optional react connector. babel-depenent.
- [eo-locale](https://github.com/ibitcy/eo-locale) — interpolation & dates / numbers in under 2Kb, including react bindings.

## To be continued!

See [WIP.md](./WIP.md) for a list of small libraries I have found, but not yet analyzed deeply.

---

Collected and reviewed by [Vladimir Klepov](https://blog.thoughtspile.tech) in 2023. [CC0 license.](./LICENSE)
