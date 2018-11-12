/**
 * Used with webpack-merge.
 * @see [MDX-Deck > custom-webpack-config]{@link https://github.com/jxnblk/mdx-deck/blob/master/docs/advanced.md#custom-webpack-config}
 */
module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: "react-svg-loader" }
                ]
            },
            {
                test: /\.txt$/,
                use: "raw-loader"
            }
        ]
    }
};
