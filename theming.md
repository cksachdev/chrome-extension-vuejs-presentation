# Theming

MDX-deck is built using `styled-components` and `styled-system` so the syntax may be unfamiliar. On top of that, mdx-deck exposes only a select set of properties it allows you to extend and customize along with a `css` prop for all other customizations.

That doesn't mean you can't modify the css but it does make it more dificult if this is unfamiliar to you.

- [Theming](#theming)
  - [Resources](#resources)
  - [Using a Theme](#using-a-theme)
  - [Custom Theming](#custom-theming)
    - [Extending an Existing Theme](#extending-an-existing-theme)
    - [Creating a Custom Theme](#creating-a-custom-theme)
    - [Adding Custom Components](#adding-custom-components)


## Resources

- [styled-components](https://github.com/styled-components/styled-components)
- [styled-system](https://github.com/jxnblk/styled-system)
- [MDX-deck > exposed styled props](https://github.com/jxnblk/mdx-deck/blob/master/src/components.js) (see `export` at bottom)


## Using a Theme

A theme is provided by exporting it as `theme` from the mdx deck file or (if you used a `.js` file) javascript file.

Only have one theme per presentation.

```javascript
// Using a built-in theme
export { dark as theme } from "mdx-deck/themes"

# My First Slide Deck!
```

You can also export a custom theme!

```javascript
// Using a custom theme
export { default as theme } from "./mytheme"

# My First Slide Deck!
```

The same rules apply When using a javascript file for your slide-deck :)

See [Combining multiple MDX files](https://github.com/jxnblk/mdx-deck/blob/master/docs/advanced.md#combining-multiple-mdx-files)

```javascript
import firstSlides from "./slides/firstSlides";
import lastSlides from "./slides/lastSlides";

export { dark as theme } from "mdx-deck/themes";

export default [...firstSlides, ...lastSlides];
```

## Custom Theming

### Extending an Existing Theme

```javascript
// theme.js
import { future } from "mdx-deck/themes";
import Header from "./components/Header.js";
import customtheme from "./themes/first.js";

export default {
  ...future,
  paragraph: {
    fontFamily: "Courier, 'Comic Sans MS', Roboto",
    fontSize: "5rem"
  },
  /*
    you _must_ include all keys in the `colors` object for theming to
    work properly. Use object destructuring to help with this.
    */
  colors: {
    /*
     destructure the theme you are extending to ensure you don't
     forget any colors props (all props from colors are required!)
    */
    ...future.colors,
    background: "#111",
    code: reactBlue,
    link: reactBlue,
    pre: reactBlue,
    preBackground: "#000",
    text: "#fff"
  }
};
```

### Creating a Custom Theme

> It"s recommended that all custom themes extend the `default` theme as a base.

```javascript
/* import the default theme, per recommendation */
import { default as base } from "mdx-deck/themes";

const reactBlue = "#61dafb";
const vueGreen = "#4fc08d";

export default {
  ...base,
  /* Add our customizations */
  font: "'Avenir Next', system-ui, sans-serif",
  colors: {
    ...base.colors,
    background: "#111",
    code: reactBlue,
    link: reactBlue,
    pre: reactBlue,
    preBackground: "#000",
    text: vueGreen
  },
  /* more customizations */
  css: {
    textAlign: "left",
    fontSize: "16px",
    "@media screen and (min-width:64em)": {
      fontSize: "32px"
    },
    "& .Slide > div": {
      minWidth: "80vw",
      minHeight: "60vh"
    }
  }
};
```

### Adding Custom Components

> to provide custom components to the MDXProvider, add a `components` object to the theme.

See [Custom MDX Components](https://github.com/jxnblk/mdx-deck/blob/master/docs/advanced.md#custom-mdx-components)

```javascript
/* import the default theme, per recommendation */
import { default as base } from "mdx-deck/themes";

export default {
  ...base,
  /* Map custom jsx components on `components` */
  components: {
    h3: Header
  }
};
```
