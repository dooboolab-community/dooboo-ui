module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxRuntime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {runtime: 'automatic', importSource: '@emotion/react'},
      ],
    ],
    plugins: [
      '@emotion',
      'react-native-reanimated/plugin',
      ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
    ],
  };
};
