const {getDefaultConfig} = require('expo/metro-config');

const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = async (): Promise<any> => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;

  return {
    blacklist: exclusionList([/docs\/.*/]),
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      resolverMainFields: [
        'sbmodern',
        ...defaultConfig.resolver.resolverMainFields,
      ],
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    watchFolders: [...defaultConfig.watchFolders, './.ondevice'],
  };
};

module.exports = config();
