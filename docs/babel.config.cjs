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
      'react-require',
      'react-native-web',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
