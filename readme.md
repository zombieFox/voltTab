# Volt Tab

A new tab page with bookmark groups and open all controls.

[![voltTab screenshot](asset/screenshot/screenshot-001.gif)](https://zombiefox.github.io/voltTab/)

## [See the demo in action](https://zombiefox.github.io/voltTab/)

* * *

## Development

When developing use:

-   `npm start`

A development server will automatically open the project in your browser. Normally here: `http://localhost:8080`.

To build the project use:

-   `npm run build`

A web ready folder will be created in `/dist/web/`.
A browser addon/extension ready zip will be created in `/dist/extension/`.

## Customise

Edit the [`src/config.js`](src/config.js) file to change the bookmarks, colours and background.

All colours are defined as [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) values in an array. Eg:

A colour defined as:

```
hsl: [204, 100, 72]
```

Will be converted to CSS as:

```
selector {
  color: hsl(204, 100%, 72%);
}
```