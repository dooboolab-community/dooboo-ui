import AlertDialogContent from './BasicStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('AlertDialog', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <AlertDialogContent />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <AlertDialogContent />
    </ThemeProvider>
  ));
