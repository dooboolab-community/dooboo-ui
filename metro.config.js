// Below should be replaced when expo use `react-native>=0.64`.
// https://stackoverflow.com/questions/41813211/how-to-make-react-native-packager-ignore-certain-directories
//
// const exclusionList = require('metro-config/src/defaults/exclusionList');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([/docs\/.*/]),
  },
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
};
