import React, {ReactElement} from 'react';

import IconStory from './DefaultStory';
import {ThemeProvider} from '../../theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Icon',
};

export const toStorybook = (): ReactElement => <IconStory />;

toStorybook.story = {
  name: 'font icons',
};

/**
 * Below are stories for app
 */
storiesOf('Icon', module)
  .add('font icons - light', () => (
    <ThemeProvider initialThemeType="light">
      <IconStory />
    </ThemeProvider>
  ))
  .add('font icons - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <IconStory />
    </ThemeProvider>
  ));
