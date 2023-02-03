import RadioGroupDefaultStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('RadioGroup', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ));
