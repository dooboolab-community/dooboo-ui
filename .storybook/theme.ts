import {create} from '@storybook/theming';

export const lightTheme = create({
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
  barBg: '#00D9D5',

  // Form colors
  inputBg: 'white',
  inputBorder: '#414141',
  inputTextColor: 'black',
  inputBorderRadius: 1,
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboolab.github.io/dooboo-ui',
  brandImage: '/assets/icon.png',

  colorPrimary: 'white',
  colorSecondary: '#585DFA',

  // UI
  appBg: 'black',
  appContentBg: '#1E1E1E',
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

  appPreviewBg: '#1E1E1E',
});
