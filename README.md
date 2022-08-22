<div align="center">
    <a href="https://wafflecss-jithinqw.vercel.app/" target="_blank">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg" 
            width="300px" 
            alt="wiki waffle image"
        />
    </a>
</div>

<h1 align="center">WaffleCSS</h1>
<p align="center">A React component library for ease of use.</p>

<div align="center">

![Code Quality](https://img.shields.io/lgtm/grade/javascript/github/Jithinqw/wafflecss)
![version](https://img.shields.io/npm/v/wafflecss)
![Project license](https://img.shields.io/badge/license-MIT-blue.svg)
![File Size](https://img.shields.io/bundlephobia/minzip/wafflecss)
![Downloads](https://img.shields.io/npm/dm/wafflecss)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

</div>

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), you can install `wafflecss` with this command:

```sh
npm install --save wafflecss
```

## Documentation

WaffleCSS documentation is developed under [Docs](wafflecss-docs.vercel.app/), which is
not currently stable. You can run storybook to access documentation and APIs.
Run 

```sh
npm run build-storybook
```

in your terminal and view on `http://localhost:6006/` in your browser.

## Testing

### UI Testing

UI testing is done using storybook. After installing [storybook](https://storybook.js.org/), you can run 
storybook using.

```sh
npm run storybook
```

Storybook can be build as an UI. Use

```sh
npm run build-storybook
```

Current version of storybook is deployed to Vercel can be found [here](https://wafflecss-jithinqw.vercel.app/.

### Unit Testing

Unit testing is done using Jest. After installing [Jest](https://jestjs.io/), you can run Jest test suits using.

```sh
run run unittest
```

## Style Accessibility Guide

WaffleCSS follows [A11y](https://a11y-style-guide.com/style-guide/section-general.html) for 
accessibility features.

## Contributing

We invite PRs if you're interested in contributing to WaffleCSS. Moreover, if your pull request contains patches or features, you must include relevant unit tests (Storybook and Jest). Please try not to lower performance for a component by testing component aganist Storybook performance addon.

WaffleCSS always take following metrics before merging PRs.

- Initial Render
- Re Render
- Hydrate
- Complete Render

If your pull request is a candidate for release, please add `[Release candidate]` tag as starting name of PR.

## Version

WaffleCSS is maintained under the [Semantic Versioning guidelines](https://semver.org/).

## Bundle Analysis

Please access bundle analysis for WaffleCSS [here](https://bundlephobia.com/package/wafflecss@1.0.46).

## License

[MIT](./LICENSE) &copy; [Jithin Zacharia](https://jithinqw.github.io/).

## Packages

[Here are the list of packages in WaffleCSS](./packages.md).