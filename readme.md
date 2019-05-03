Resources
https://www.youtube.com/watch?v=eUxVbVAitKM
https://github.com/TylerLeonhardt/seattle-code-camp
https://www.pscp.tv/w/1ynJOVOzAAqGR

https://github.com/huixisheng/chrome-extensions/tree/01592980de1f53afee74387469b3775ec0ee438c
# Sensational Slides with MDX-Deck


https://github.com/HaNdTriX/generator-chrome-extension-kickstart


http://yixi.pro/ChromeExtensionDocument/tut_oauth.html

More sample: https://github.com/GoogleChrome/chrome-app-samples
oauth https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/extensions/gdocs/
This is a presentation given at SEM.js 11/2018.

cool tools: https://github.com/didikee/Dev_Tools
icon generation: https://android-material-icon-generator.bitdroid.de/#section-material-icons


Extension samples: https://github.com/orbitbot/chrome-extensions-examples

Creating presentations using MDX-Deck & Code-Surfer. Includes a the [informational deck](./deck.js) and the [demo deck](./demo.mdx). An additional how-to guide on theming mdx-decks is included in the [theming guide](./theming.md).

A live stream is also shared on the [SEMjs Youtube channel](https://youtu.be/UW6YycsYzHY?t=660) (35-ish min)

Wnat to know more about SEMjs, visit:

- [SEMjs](https://www.meetup.com/SEM-JS/)
- [SEMjs > YouTube](https://www.youtube.com/channel/UC0mZnyjQpFUfcqMtMZjorXw)
- [SEMjs > Github](https://github.com/sem-js)

**Table of Contents**

- [Sensational Slides with MDX-Deck](#sensational-slides-with-mdx-deck)
  - [Install](#install)
  - [Getting Started](#getting-started)
  - [MX-Deck Keyboard Shortcuts](#mx-deck-keyboard-shortcuts)
  - [Presentation Modes](#presentation-modes)
  - [Speaker Notes](#speaker-notes)
  - [Resources](#resources)


## Install

```bash
git clone      # or download a zip
npm i          # install depedencies
```

## Getting Started

```bash
npm start      # run the presentation
npm run demo   # run the demo
```

```
<div>
    <ul>
        <Appear>
            <li><b>❤️ Power</b> through components</li>
            <li><b>🔧 Customizable</b></li>
            <li><b>📚 Markdown-based</b></li>
            <li><b>🔥 Blazingly blazing fast</b></li>
            <p>They even have a specification 😲</p>
        </Appear>
    </ul>
</div>
```

```
<Appear>
    <div>
        <Center>Just MDX</Center>
        <br />
    </div>
    <div>
        <Center><em>With</em> built-in utilities for creating presentation slides!</Center>
    </div>
</Appear>
```

```
## Example of Customized MDX

```js
/* ./components */
export const BlinkingText = ({ children: title }) => (
    <h1 className="blinkingText">
        {title}
    </h1>
)
```
Set the component inside your theme

```js
/* ./themes/MyTheme.js */
components: { h6: BlinkingText }
```

---
```

## MX-Deck Keyboard Shortcuts

_This information is a summation of documentation scattered across different projects. Included here as a quick reference._

See also the included [how-to document](./how-to.md)

[Keyboard Shortcuts](https://github.com/jxnblk/mdx-deck#keyboard-shortcuts)

| Key         | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Left Arrow  | Go to previous slide (or step in [Appear][])                        |
| Right Arrow | Go to next slide (or step in [Appear][])                            |
| Space       | Go to next slide (or step in [Appear][])                            |
| Up Arrow    | Hide current step in [Appear][] component without navigating slides |
| Down Arrow  | Show next step in [Appear][] component without navigating slides    |
| Option + P  | Toggle [Presenter Mode](#presenter-mode)                            |
| Option + O  | Toggle [Overview Mode](#overview-mode)                              |
| Option + G  | Toggle grid view mode                                               |


## Presentation Modes

| Key         | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Option + P  | Toggle [Presenter Mode](#presenter-mode)                            |
| Option + O  | Toggle [Overview Mode](#overview-mode)                              |
| Option + G  | Toggle grid view mode                                               |


## Speaker Notes

Speaker notes can be included on decks using the following markdown code block syntax:

    ```notes
    These are only visible in presenter mode.
    Styled with markdown syntax.
    ```

A `<Notes>` component is also available if you want more flexibility with the display of your notes. Render notes according to your custom markdup and css!

Use by opening a second browser window pressing the `Option + P (Alt + P)` key to enter presenter mode and view speaker notes

## Resources

- [mdx](mdx)
- [mdx-deck](mdx-deck)
- mdx > [original specification](https://spectrum.chat/thread/1021be59-2738-4511-aceb-c66921050b9a)
- mdx > [language and AST definitions](https://github.com/mdx-js/specification#specification)
- [code-surfer](code-surfer)
- [Theming Guide](./theming.md) for more complex **theming** & **customizations**

**Other Slide-share Libraries**

- [spectacle](https://github.com/FormidableLabs/spectacle) ReactJS based presentation library
- [reveal](https://github.com/hakimel/reveal.js/) HTML Presentation Framework
- 💲 [slides](https://slides.com/features)

<!-- alias for reference links -->

[mdx]: https://github.com/mdx-js/mdx
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[code-surfer]: https://github.com/pomber/code-surfer
