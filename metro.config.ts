const {getDefaultConfig} = require('expo/metro-config');

const exclusionList = require('metro-config/src/defaults/exclusionList');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver = {
  blacklist: exclusionList([/docs\/.*/]),
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
  resolverMainFields: [
    'sbmodern',
    ...defaultConfig.resolver.resolverMainFields,
  ],
};

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = defaultConfig;
