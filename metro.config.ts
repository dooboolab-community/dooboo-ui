const {getDefaultConfig} = require('expo/metro-config');

// Below should be replaced when expo use `react-native>=0.64`.
// https://stackoverflow.com/questions/41813211/how-to-make-react-native-packager-ignore-certain-directories
//
// const exclusionList = require('metro-config/src/defaults/exclusionList');

const blacklist = require('metro-config/src/defaults/blacklist');

const config = async (): Promise<any> => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig(__dirname);

  return {
    blacklistRE: blacklist([/docs\/.*/]),
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
};

const defaultConfig = config();

module.exports = defaultConfig;
