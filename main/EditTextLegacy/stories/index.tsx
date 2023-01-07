import EditTextLegacyBoxed from './EditTextBoxedStory';
import EditTextLegacyColumn from './EditTextColumnStory';
import EditTextLegacyRow from './EditTextRowStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'EditTextLegacy',
};

export const columnStory = (): ReactElement => <EditTextLegacyColumn />;
export const rowStory = (): ReactElement => <EditTextLegacyRow />;
export const boxStory = (): ReactElement => <EditTextLegacyBoxed />;

columnStory.light = {
  name: 'column (default) - light',
  notes: 'Default [EditTextLegacy] with light mode.',
};

columnStory.dark = {
  name: 'column - dark',
  notes: 'Default [EditTextLegacy] with dark mode.',
};

rowStory.light = {
  name: 'row - light',
  notes: '[EditTextLegacy] in row.',
};

rowStory.dark = {
  name: 'row - dark',
  notes: '[EditTextLegacy] in row with dark mode.',
};

boxStory.light = {
  name: 'boxed - light',
  notes: '[EditTextLegacy] boxed',
};

boxStory.dark = {
  name: 'boxed - dark',
  notes: '[EditTextLegacy] boxed',
};

/**
 * Below are stories for app
 */
storiesOf('EditTextLegacy', module)
  .add(
    columnStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextLegacyColumn />
      </ThemeProvider>
    ),
    {
      notes: columnStory.light.notes,
    },
  )
  .add(
    columnStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextLegacyColumn />
      </ThemeProvider>
    ),
    {
      notes: columnStory.dark.notes,
    },
  )
  .add(
    rowStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextLegacyRow />
      </ThemeProvider>
    ),
    {
      notes: rowStory.light.notes,
    },
  )
  .add(
    rowStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextLegacyRow />
      </ThemeProvider>
    ),
    {
      notes: rowStory.light.notes,
    },
  )
  .add(
    boxStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextLegacyBoxed />
      </ThemeProvider>
    ),
    {
      notes: boxStory.light.notes,
    },
  )
  .add(
    boxStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextLegacyBoxed />
      </ThemeProvider>
    ),
    {
      notes: boxStory.light.notes,
    },
  );
