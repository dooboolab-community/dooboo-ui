module.exports = {
  addons: ['@storybook/addon-ondevice-actions/register', '@storybook/addon-ondevice-knobs/register'],
  framework: '@storybook/react',
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
};
