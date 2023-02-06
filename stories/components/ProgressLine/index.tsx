import ProgressLineDefaultStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('ProgressLine', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <ProgressLineDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <ProgressLineDefaultStory />
    </ThemeProvider>
  ));
