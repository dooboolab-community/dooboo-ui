import React, {ReactElement} from 'react';

import CheckboxStory from './CheckboxStory';
import {ContainerDeco} from '../../../storybook/decorators';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Icon',
};

export const toStorybook = (): ReactElement => <CheckboxStory />;

toStorybook.story = {
  name: 'Checkbox',
};

/**
 * Below are stories for app
 */
storiesOf('Checkbox', module)
  .addDecorator(ContainerDeco)
  .add('Checkbox - light', () => (
    <ThemeProvider initialThemeType="light">
      <CheckboxStory />
    </ThemeProvider>
  ))
  .add('Checkbox - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <CheckboxStory />
    </ThemeProvider>
  ));
