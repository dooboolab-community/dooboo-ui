import Basic from './basic';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'EditText',
};

export const basicStory = (): ReactElement => <Basic />;

basicStory.light = {
  name: 'Basic - light',
  notes: 'Basic [EditText] with light mode.',
};

basicStory.dark = {
  name: 'Basic - dark',
  notes: 'Basic [EditText] with dark mode.',
};

/**
 * Below are stories for app
 */

storiesOf('EditText', module)
  .add(
    basicStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <Basic />
      </ThemeProvider>
    ),
    {
      notes: basicStory.light.notes,
    },
  )
  .add(
    basicStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <Basic />
      </ThemeProvider>
    ),
    {
      notes: basicStory.light.notes,
    },
  );
