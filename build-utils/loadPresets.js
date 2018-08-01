const webpackMerge = require("webpack-merge");

module.exports = env => {
  const { presets } = env;
  if (!presets) {
    return {}
  }
  console.log("presets =>>>>>>>>>>>>>>.", presets)
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(
    presetName => require(`./presets/webpack.${presetName}`)(env) // call the preset and pass env also
  );

  return webpackMerge({}, ...mergedConfigs);
};