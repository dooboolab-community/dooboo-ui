import React, {ReactElement} from 'react';

import ButtonDefault from './ButtonDefaultStory';
import {ThemeProvider} from '../../theme';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

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
  .addDecorator(withKnobs)
  .addDecorator(withActions)
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
