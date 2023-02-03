import {FABStory} from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('FAB', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <FABStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <FABStory />
    </ThemeProvider>
  ));
