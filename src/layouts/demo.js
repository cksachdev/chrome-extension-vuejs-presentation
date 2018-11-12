/**
 * @module layouts/demo
 *
 * @see [Built-in layouts]{@link https://github.com/jxnblk/mdx-deck/blob/master/docs/components.md#layouts}
 * @see [Built-in layout source code]{@link https://github.com/jxnblk/mdx-deck/tree/master/src/layouts}
 * @see [Custom layouts]{@link https://github.com/jxnblk/mdx-deck/blob/master/docs/layouts.md}
 */

import React from "react";

export default ({ children }) => (
    <div
        style={{
            width: "100vw",
            height: "100vw",
            backgroundColor: "tomato"
        }}
    >
        {children}
    </div>
);
