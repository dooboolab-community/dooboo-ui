import Basic from './basic';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

export const basicStory = (): ReactElement => <Basic />;

basicStory.light = {
  name: 'Basic - light',
  notes: 'Basic [ButtonGroup] with light mode.',
};

basicStory.dark = {
  name: 'Basic - dark',
  notes: 'Basic [ButtonGroup] with dark mode.',
};

storiesOf('ButtonGroup', module)
  .add(
    basicStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <Basic />
      </ThemeProvider>
    ),
    {notes: basicStory.light.notes},
  )
  .add(
    basicStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <Basic />
      </ThemeProvider>
    ),
    {notes: basicStory.dark.notes},
  );