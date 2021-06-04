import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import IconButtonStory from './IconButtonStory';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Icon',
};

export const toStorybook = (): ReactElement => <IconButtonStory />;

toStorybook.story = {
  name: 'font icons',
};

/**
 * Below are stories for app
 */
storiesOf('Icon', module)
  .addDecorator(ContainerDeco)
  .add('font icons - light', () => (
    <ThemeProvider initialThemeType="light">
      <IconButtonStory />
    </ThemeProvider>
  ))
  .add('font icons - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <IconButtonStory />
    </ThemeProvider>
  ));
