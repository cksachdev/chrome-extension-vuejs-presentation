import { future } from "mdx-deck/themes";
import * as colors from "../colors.js";
import markdown from "react-syntax-highlighter/languages/prism/markdown";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";

const headings = {
    fontSize: "4rem",
    color: colors.reactBlue,
    "&:hover": {
        color: colors.vueGreen
    }
}

export default {
    ...future,
    /*
    Syntax Highlighting - Styles that apply to blocks of code surrounded by
    triple back ticks; eg
    ```js
    my code
    ```

    MDX > Syntax Highlighting https://github.com/jxnblk/mdx-deck/blob/118f7fd439fba16c5bf08724741368d2802d9b77/docs/theming.md#syntax-highlighting
    Prism > languages https://prismjs.com/#languages-list
    */
    prism: {
        style: tomorrow,
        languages: {
            md: markdown
        }
    },
    css: {
        ...future.css,
        "h1, h2": {
            ...headings
        },
        h2: {
            ...headings,
            fontSize: "3rem",
        }
    }
};
