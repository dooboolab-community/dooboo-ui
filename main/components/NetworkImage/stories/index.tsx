import NetworkImageStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('NetworkImage', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <NetworkImageStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <NetworkImageStory />
    </ThemeProvider>
  ));
