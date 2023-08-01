const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// The code below is a workaround for an issue arising when importing stylis from emotion.
// This problem is due to stylis being built as an ES module (ESM).
config.resolver.assetExts.push('mjs');

module.exports = config;
