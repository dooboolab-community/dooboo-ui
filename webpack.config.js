const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['dooboo-ui', '@dooboo-ui'],
      },
    },
    argv,
  );

  config.resolve.alias = {
    'react-native': 'react-native-web',
    '@storybook/react-native': '@storybook/react',
  };

  return config;
};
