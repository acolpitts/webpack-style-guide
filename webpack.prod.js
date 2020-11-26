const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const package = require("./package.json");
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, package.main),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `[name].bundle.v${package.version}.js`,
    publicPath: "/",
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        title: 'Frontend Design System',
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].styles.v${package.version}.css`,
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
});
