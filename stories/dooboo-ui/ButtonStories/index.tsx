import React, {ReactElement} from 'react';
import {ThemeProvider, ThemeType} from '../../../main/theme';

import ButtonDefault from './ButtonDefaultStory';
import {ContainerDeco} from '../../../storybook/decorators';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Button',
};

export const toStorybook = (): ReactElement => <ButtonDefault />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Button', module)
  .addDecorator(ContainerDeco)
  .add('button - light', () => (
    <ThemeProvider initialThemeType="light">
      <ButtonDefault />
    </ThemeProvider>
  ))
  .add('button - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <ButtonDefault />
    </ThemeProvider>
  ));
