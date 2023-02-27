const {getDefaultConfig} = require('expo/metro-config');

const exclusionList = require('metro-config/src/defaults/exclusionList');
const defaultConfig = getDefaultConfig(__dirname);

const config = async (): Promise<any> => {
  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;

  return {
    blacklist: exclusionList([/docs\/.*/]),
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    watchFolders: [...defaultConfig.watchFolders],
  };
};

module.exports = config();
