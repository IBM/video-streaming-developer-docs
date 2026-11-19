# vendor/

Patched copies of third-party packages that have no released fix compatible with this project's
dependency tree. They are wired in through `overrides` in the root `package.json`
(`"file:vendor/<name>"`). Each carries a `-vendored.N` pre-release version that sorts above the
vulnerable range so audit tooling does not match it.

| Directory | Upstream base | Fixes | Change |
|---|---|---|---|
| `picomatch/` | `picomatch@4.0.7` | CVE-2026-112366 / GHSA-fc5q-39xc-vjpf (ReDoS via single-branch repeated extglobs; no patched release exists, vulnerable range is `<= 4.0.7`) | `lib/parse.js` patched with upstream PR [micromatch/picomatch#273](https://github.com/micromatch/picomatch/pull/273) (library code only). Upstream test suite passes against it. |
| `parcel-reporter-dev-server/` | `@parcel/reporter-dev-server@2.8.3` | CVE-2025-56648 / GHSA-qm9p-f9j5-w83w (dev server sends `Access-Control-Allow-Origin: *`, letting any website read source code) | `setHeaders()` no longer emits the `Access-Control-Allow-*` headers (`src/Server.js` and the compiled `lib/ServerReporter.js`). Upstream's fix is in 2.16.4, but gatsby@5 pins `@parcel/core@2.8.3` and 2.16.4 requires `parcel ^2.16.4`, so the real 2.16.4 cannot be loaded. |
| `decode-uri-component/` | `decode-uri-component@0.5.1` | GHSA-vcc3-ghjq-m6fr and GHSA-qr28-fpjm-wq7f (ReDoS / quadratic DoS via percent-encoded input; vulnerable range `<= 0.5.0`) | Upstream 0.5.1 is ESM-only, but `query-string@6` loads it with `require()`. `index.js` is the unchanged 0.5.1 logic converted to CommonJS (`module.exports`). Overridden for all dependents (gatsby, gatsby-plugin-manifest, gatsby-theme-carbon via query-string and source-map-resolve). |
| `file-type/` | `file-type@16.5.4` | GHSA-5v7r-6r5c-r473 (infinite loop in ASF parser on a zero-size sub-header; vulnerable range `>=13.0.0 <21.3.1`). 21.3.2 is ESM-only and requires Node >=20, so gatsby's `require("file-type")` cannot load it. | `core.js` ASF loop breaks when `header.size < 24` instead of looping forever. The rest of the package is unchanged. |


## Removing these
- `picomatch`: delete the override and `vendor/picomatch` once a picomatch release newer than 4.0.7 is published.
- `parcel-reporter-dev-server`: delete the override and directory once gatsby moves to `@parcel/core >= 2.16.4`.
- `decode-uri-component`: delete the override and directory once gatsby, gatsby-plugin-manifest, and gatsby-theme-carbon depend on `decode-uri-component >= 0.5.1` (query-string@7+ or equivalent) and the `require()` path is no longer used.
- `file-type`: delete the override and `vendor/file-type` once gatsby-core-utils and gatsby-source-filesystem accept `file-type >= 21.3.2` through a `require()`-compatible build.

