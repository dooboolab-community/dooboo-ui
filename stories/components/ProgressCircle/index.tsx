import ProgressBarStory from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('ProgressCircle', module)
  .addDecorator(withKnobs)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <ProgressBarStory />
    </ThemeProvider>
  ));
