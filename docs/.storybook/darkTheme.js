import {create} from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  brandImage: '/assets/icon.png',

  colorPrimary: 'white',
  colorSecondary: '#585DFA',

  // UI
  appBg: 'black',
  appContentBg: 'black',
  appBorderColor: '#1E1E1E',
  appBorderRadius: 1,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: '#EDEDED',
  barSelectedColor: '#585DFA',
  barBg: 'black',

  // Form colors
  inputBg: 'black',
  inputBorder: '#414141',
  inputTextColor: 'white',
  inputBorderRadius: 1,
});
