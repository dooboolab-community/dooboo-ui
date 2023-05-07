module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {runtime: 'automatic', importSource: '@emotion/react'},
      ],
    ],
    plugins: [
      'react-docgen',
      'react-require',
      'react-native-web',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
