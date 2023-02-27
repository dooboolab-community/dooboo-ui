const {getDefaultConfig} = require('expo/metro-config');

const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = async (): Promise<any> => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig(__dirname);

  return {
    blacklist: exclusionList([/docs\/.*/]),
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
};

const defaultConfig = config();

module.exports = defaultConfig;
