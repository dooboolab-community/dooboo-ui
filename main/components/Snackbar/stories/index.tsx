import React from 'react';
import SnackbarContent from './ProviderStory';
import SnackbarDefaultStory from './DefaultStory';
import SnackbarWithActionStory from './ActionStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('Snackbar', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Provider', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarContent />
    </ThemeProvider>
  ))
  .add('Action', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarWithActionStory />
    </ThemeProvider>
  ));
