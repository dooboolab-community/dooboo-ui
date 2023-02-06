import CheckboxStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('Checkbox', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <CheckboxStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <CheckboxStory />
    </ThemeProvider>
  ));
