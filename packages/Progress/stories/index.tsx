import ProgressStory from './DefaultStory';
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {ThemeProvider} from '@dooboo-ui/theme';

storiesOf('ProgressStory', module)
  .addDecorator(withKnobs)
  .add('progress', () => (
    <ThemeProvider initialThemeType="light">
      <ProgressStory />
    </ThemeProvider>
  ));
