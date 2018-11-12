import { default as base } from "mdx-deck/themes";
import { BlinkingText } from "../components";
import markdown from "react-syntax-highlighter/languages/prism/markdown";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";
import * as colors from "../colors.js"

/**
 * > It"s recommended that all custom themes extend the default theme as a base.
 * @see [Custom Themes]{@link https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md#custom-themes}
 */
export default {
    ...base,
    prism: {
        style: tomorrow,
        languages: {
            md: markdown
        }
    },
    font: "'Avenir Next', system-ui, sans-serif",
    /* you _must_ include all keys in the colors object for theming to work properly */
    colors: {
        ...base.colors,
        background: "#111",
        code: colors.reactBlue,
        link: colors.reactBlue,
        pre: colors.reactBlue,
        preBackground: "#000",
        text: "#fff"
    },
    hr: {
        borderColor: colors.rxPink
    },
    heading: {
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontWeight: 600,
        color: colors.reactBlue,
        "&:hover": {
            color: colors.vueGreen
        }
    },
    quote: {
        fontWeight: 600
    },
    components: {
        h6: BlinkingText
    },
    li: {
        "list-style-type": "square"
    },
    /*
    mdx components using styled-components https://github.com/jxnblk/mdx-deck/blob/master/src/components.js
    with styled-system https://github.com/jxnblk/styled-system/blob/master/docs/api.md#fontsize
    */
    fontSizes: ["1rem", "1rem", "1.5rem", "2rem", "3rem", "4rem"],
    p: {
        fontSize: "1.5rem"
    },
    css: {
        strong: {
            color: colors.yellowLite
        },
        text: colors.rxPink,
        color: colors.rxPink,
        color: { text: colors.rxPink },
        textAlign: "left",
        fontSize: "1.5rem",
        "@media screen and (min-width:64em)": {
            fontSize: "32px",
            p: {
                fontSize: "1.5rem"
            }
        },
        "& .Slide > div": {
            minWidth: "80vw",
            minHeight: "60vh"
        }
    }
};
