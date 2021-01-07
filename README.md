![Node.js CI](https://github.com/rosebox/rosebox/workflows/Node.js%20CI/badge.svg)
<p align="center">
<img width="400" style="margin-left: auto; margin-right:auto; display: block" alt="portfolio_view" src="./logo.svg">
</p>

<div align="center"><h2>CSS in Typescript</h2></div>

Rosebox is a CSS-in-Typescript library that provides features like strong types (e.g., [`Length`](https://www.rosebox.dev/api/#rb-type-length)), typed functions (e.g., [`linGrad`](https://www.rosebox.dev/api/#rb-vc-lingrad)), extra shorthand properties(e.g., [`marginX`](https://www.rosebox.dev/api/#rb-prop-paddingx), [`paddingX`](https://www.rosebox.dev/api/#rb-prop-paddingx)), an object-based syntax for the values of complex properties (e.g., [`animation`](https://www.rosebox.dev/api/#rb-prop-animation)), and support for high-quality IntelliSense.

## Usage

1. Install the following packages

```shell
npm i @rosebox/core @rosebox/react
```

2. Install the [VScode-extension](https://marketplace.visualstudio.com/items?itemName=hugonteifeh.rosebox-language-server-extension).

3. Write your styles in files that match the pattern `*.rb.ts`.

## Example

Here is a simple example of how you can use rosebox in your react-app:

```tsx
import * as React from "react";
import "./styles.css";
import { rgb, px, ms } from "@rosebox/core";
import { createUseStyles, StylesProvider } from "@rosebox/react";

const useStyles = createUseStyles({
  titleStyle: {
    fontSize: px(48),
    transition: ["color", ms(300), "ease-in-out"],
    color: "black",
    "&query": {
      "&:nth-child(2)": {
        fontSize: px(32)
      },
      "&:hover": {
        color: rgb(239, 71, 111)
      }
    }
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <StylesProvider>
      <div className="App">
        <h1 className={classes.titleStyle}>Hover over me please</h1>
        <h1 className={classes.titleStyle}>I come next</h1>
      </div>
    </StylesProvider>
  );
}
```

## IMPORTANT NOTE 📢

You can already use all the CSS properties with Rosebox. Missing ones in the api only indicate that they are not **YET** strongly typed. The library exposes all the weakly-typed properties by prefixing them with an underscore (e.g., `_borderImageStyle`, `_all`). These weakly-typed props have type `string`. When a property becomes strongly-typed, its underscore-prefixed version gets deprecated immediately. However, its removal may only be considered after a minimum of 1 major release since the deprecation—for example, if `_borderImageStyle` gets deprecated in 0.6.4, it means that it will be removed in 1.0.0.

## Docs

[Docs](https://rosebox.dev)

## Demos

- [https://codesandbox.io/s/rosebox-in-react-q5854](https://codesandbox.io/s/rosebox-in-react-q5854)

## VScode extension 📟

There is a new [VScode-extension](https://marketplace.visualstudio.com/items?itemName=hugonteifeh.rosebox-language-server-extension) for rosebox, which provides color intellisense in files matching the `*.rb.ts` pattern.

## Roadmap and future releases

Refer to [milestones](https://github.com/hugonteifeh/rosebox/milestones/) for information about releases and the [roadmap project](https://github.com/hugonteifeh/rosebox/projects/14) for roadmap.

## Help and questions 🙋

If you have a question or need help, feel free to create an issue here 👌.
