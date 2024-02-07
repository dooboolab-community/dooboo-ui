import type {Preview} from '@storybook/react';
import {darkTheme, lightTheme} from './theme';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
    },
  },
};
