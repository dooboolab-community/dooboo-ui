import Dialog from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('AlertDialog', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <Dialog />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <Dialog />
    </ThemeProvider>
  ));
