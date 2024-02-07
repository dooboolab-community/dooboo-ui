import {create} from '@storybook/theming';

const commonTheme = {
  brandTitle: 'dooboo-ui',
  brandUrl: 'https://dooboo-ui.dooboolab.com',
  brandImage: '/static/icon.png',
  brandTarget: '_self',
  stylePreview: true,
};

export const lightTheme = create({
  ...commonTheme,
  base: 'light',
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
  ...commonTheme,
  base: 'dark',
  colorPrimary: 'white',
  colorSecondary: '#1E1D1D',

  // UI
  appBg: '#1D1E1E',
  appContentBg: '#1D1E1E',
  appBorderColor: '#1D1E1E',
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
  barBg: '#1D1E1E',

  // Form colors
  inputBg: 'black',
  inputBorder: '#414141',
  inputTextColor: 'white',
  inputBorderRadius: 1,

  appPreviewBg: '#1D1E1E',
});
