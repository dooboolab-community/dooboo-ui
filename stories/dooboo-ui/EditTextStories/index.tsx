import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import EditTextColumn from './EditTextColumnStory';
import EditTextRow from './EditTextRowStory';
import EditTextRowWithTheme from './EditTextWithThemeStory';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'EditText',
};

export const toStorybook1 = (): ReactElement => <EditTextColumn />;
export const toStorybook2 = (): ReactElement => <EditTextRow />;

toStorybook1.story1 = {
  name: 'column (default) - light',
  notes: 'Default [EditText] with light mode.',
};

toStorybook1.story2 = {
  name: 'column - dark',
  notes: 'Default [EditText] with dark mode.',
};

toStorybook2.story = {
  name: 'row',
  notes: '[EditText] aligned in row.',
};

/**
 * Below are stories for app
 */
storiesOf('EditText', module)
  .addDecorator(ContainerDeco)
  .add(
    toStorybook1.story1.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextColumn />
      </ThemeProvider>
    ),
    {
      notes: toStorybook1.story1.notes,
    },
  )
  .add(
    toStorybook1.story2.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextColumn />
      </ThemeProvider>
    ),
    {
      notes: toStorybook1.story2.notes,
    },
  )
  .add(toStorybook2.story.name, () => <EditTextRow />, {
    notes: toStorybook2.story.notes,
  })
  .add('with dark theme', () => (
    <ThemeProvider initialThemeType="dark">
      <EditTextRowWithTheme />
    </ThemeProvider>
  ));
