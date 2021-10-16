import React, {ReactElement} from 'react';

import NetworkImageStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'NetowkrImage',
};

export const toStorybook = (): ReactElement => <NetworkImageStory />;

toStorybook.story = {
  name: 'NetworkImage',
};

/**
 * Below are stories for app
 */
storiesOf('NetworkImage', module)
  .add('NetworkImage - light', () => (
    <ThemeProvider initialThemeType="light">
      <NetworkImageStory />
    </ThemeProvider>
  ))
  .add('NetworkImage - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <NetworkImageStory />
    </ThemeProvider>
  ));
