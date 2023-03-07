import {create} from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  brandImage: '/assets/icon.png',

  colorPrimary: 'black',
  colorSecondary: '#47498A',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#EDEDED',
  appBorderRadius: 1,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#1E1E1E',
  barSelectedColor: '#47498A',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#414141',
  inputTextColor: 'black',
  inputBorderRadius: 1,
});
