import intro from "./src/intro.mdx";
import mdx from "./src/mdx.mdx";
import mdxDeck from "./src/mdxDeck.mdx";

export { default as theme } from "./src/themes/first.js";

export default [...intro, ...mdx, ...mdxDeck];
