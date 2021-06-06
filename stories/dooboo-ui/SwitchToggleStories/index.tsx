import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import SwitchToggleDefaultStory from './SwitchToggleDefaultStory';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'SwitchToggle',
};

export const toStorybook = (): ReactElement => <SwitchToggleDefaultStory />;

toStorybook.story = {
  name: 'switch toggle',
};

/**
 * Below are stories for app
 */
storiesOf('SwitchToggle', module)
  .addDecorator(ContainerDeco)
  .add('switch toggle - light', () => (
    <ThemeProvider initialThemeType="light">
      <SwitchToggleDefaultStory />
    </ThemeProvider>
  ))
  .add('switch toggle - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SwitchToggleDefaultStory />
    </ThemeProvider>
  ));
