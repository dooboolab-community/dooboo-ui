const path = require('path');
const {getDefaultConfig} = require('expo/metro-config');
const {generate} = require('@storybook/react-native/scripts/generate');

const exclusionList = require('metro-config/src/defaults/exclusionList');

generate({
  configPath: path.resolve(__dirname, './.ondevice'),
});

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

const config = async (): Promise<any> => {
  const {
    resolver: {sourceExts, assetExts},
  } = await defaultConfig;

  return {
    blacklist: exclusionList([/docs\/.*/]),
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
};

const newConfig = config();

module.exports = newConfig;
