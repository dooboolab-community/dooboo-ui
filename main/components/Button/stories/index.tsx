import DefaultStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <DefaultStory themeType="light" />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <DefaultStory themeType="dark" />
    </ThemeProvider>
  ));
