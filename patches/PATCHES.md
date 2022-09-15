# Patches

## Why this is needed?
One of our third-party package `carbon-gatsby-theme` latest version uses `gatsby v3`
which contains some CRITICAL security vulnerabilities in its dependencies.
The newest `gatsby v4` resolves these dependency vulnerabilites, but unfortunatelly the `carbon-gatsby-theme` 
is not ready to use Gatsby v4.

- Affected `immer` version: `< 9.0.6`
- Patched `immer` version: `9.0.6`

#### Vulnerability tree:
```json
└─┬ gatsby@3.14.6
  └─┬ react-dev-utils@11.0.4
    └── immer@8.0.1 (this is the package which can lead to Prototype Pollution attacks)
```
Detailes: https://github.com/IBM/video-streaming-developer-docs/security/dependabot/12

## The patch
The workaround is to use the [`patch-package` npm package](https://www.npmjs.com/package/patch-package) and create a patched package.json for `gatsby`
with the non-vulnerable `react-dev-utils` v12.

After the patch this project will install the following dependency tree for gatsby:

```json
└─┬ gatsby@3.14.6
  └─┬ react-dev-utils@12.0.1
    └── immer@9.0.15
```

This patch is stored in the `patches` folder, and with the newly added `"postinstall": "patch-package"` npm script
will be patched after every `npm install`.

The `gatsby+3.14.6.patch` also resolves one more CRITICAL security vulnerability.
The affected package is the `shell-qoute` package which is also fixed in the `react-dev-utils` dependency.

- Affected version: `<= 1.7.2`
- Patched version: `1.7.3`

```json
└─┬ gatsby@3.14.6
  └─┬ react-dev-utils@12.0.1
    └── shell-quote@1.7.3
```
