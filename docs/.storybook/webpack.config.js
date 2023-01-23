const { resolve } = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');

const ttfLoaderConfig = {
  test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
  include: [
    resolve(__dirname, '../', "node_modules/react-native-vector-icons"),
    resolve(__dirname, '../', "node_modules/dooboo-ui/components/Icon"),
  ],
};

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            'babel-preset-expo', '@babel/preset-typescript'
          ],
          plugins: [
            '@babel/plugin-transform-react-jsx',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-modules-commonjs',
          ],
        }
      },
    ],
  });

  config.module.rules.push(ttfLoaderConfig);

  config.resolve.extensions = [
    '.web.js',
    '.js',
    '.json',
    '.web.jsx',
    '.jsx',
    'ts',
    'tsx',
  ];

  config.resolve.alias = {
    'react-native': 'react-native-web',
    '@storybook/react-native': '@storybook/react',
  };

  const configWithExpo = withUnimodules(config, {
    projectRoot: resolve(__dirname, '../'),
    // babel: {
    // dangerouslyAddModulePathsToTranspile: [
    //   'dooboo-ui',
    // ],
    // },
  });

  configWithExpo.output.publicPath = '';
  return configWithExpo;
};
