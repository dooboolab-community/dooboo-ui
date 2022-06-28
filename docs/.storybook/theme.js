import {create} from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  brandImage: '/assets/icon.png',

  colorPrimary: 'white',
  colorSecondary: '#00D9D5',

  // UI
  appBg: 'black',
  appContentBg: '#111',
  appBorderColor: '#414141',
  appBorderRadius: 1,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: '#414141',
  barSelectedColor: 'white',
  barBg: '#33FF2F',

  // Form colors
  inputBg: 'black',
  inputBorder: '#414141',
  inputTextColor: 'white',
  inputBorderRadius: 1,
});
