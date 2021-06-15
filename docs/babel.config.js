module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: ['react-native-web', '@babel/plugin-transform-modules-commonjs'],
  };
};
