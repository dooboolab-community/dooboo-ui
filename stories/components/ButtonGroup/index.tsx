import Basic from './basic';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

export const ButtonGroupBasic = (): ReactElement => <Basic />;

ButtonGroupBasic.light = {
  name: 'Basic - light',
  notes: 'Basic [ButtonGroup] with light mode.',
};

ButtonGroupBasic.dark = {
  name: 'Basic - dark',
  notes: 'Basic [ButtonGroup] with dark mode.',
};

storiesOf('ButtonGroup', module)
  .add(
    ButtonGroupBasic.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <Basic />
      </ThemeProvider>
    ),
    {notes: ButtonGroupBasic.light.notes},
  )
  .add(
    ButtonGroupBasic.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <Basic />
      </ThemeProvider>
    ),
    {notes: ButtonGroupBasic.dark.notes},
  );
