module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-ondevice-actions/register',
    '@storybook/addon-ondevice-knobs/register',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react",
};
