module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', {jsxRuntime: 'automatic'}],
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {runtime: 'automatic', importSource: '@emotion/react'},
      ],
    ],
    plugins: [
      ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
      '@emotion',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
