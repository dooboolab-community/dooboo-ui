module.exports = {
  root: true,
  extends: [
    '@dooboo/eslint-config-react-native',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
};
