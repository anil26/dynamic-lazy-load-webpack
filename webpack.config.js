const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const presetConfig = require("./build-utils/loadPresets");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode: "none",
      output: {
        filename: "bundle.js"
      },
      module: {
          rules: [
              {
                  test: /\.(jpeg|jpg)/,
                  use: [
                      {
                        loader: "url-loader",
                        options: {
                            limit: 5000,
                        }
                      }
                      
                  ],
              }
          ]
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({mode, presets})
  );
};