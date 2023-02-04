import React from 'react';
import SnackbarContent from './BasicStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('Snackbar', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarContent />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SnackbarContent />
    </ThemeProvider>
  ));
