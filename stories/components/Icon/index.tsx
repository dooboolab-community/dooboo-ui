import IconStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('Icon', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <IconStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <IconStory />
    </ThemeProvider>
  ));
