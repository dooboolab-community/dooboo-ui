import {create} from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  brandImage: '/assets/icon.png',

  colorPrimary: 'black',
  colorSecondary: '#00D9D5',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#F6F9FC',
  appBorderRadius: 1,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#F6F9FC',
  barSelectedColor: 'black',
  barBg: '#33FF2F',

  // Form colors
  inputBg: 'white',
  inputBorder: '#414141',
  inputTextColor: 'black',
  inputBorderRadius: 1,
});
