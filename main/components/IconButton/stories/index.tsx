import IconButtonStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('Icon Button', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <IconButtonStory themeType="light" />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <IconButtonStory themeType="dark" />
    </ThemeProvider>
  ));
