import StatusBarBrightness from '../../../main/components/StatusbarBrightness';
import SwitchToggleDefaultStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

storiesOf('SwitchToggle', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <>
        <StatusBarBrightness />
        <SwitchToggleDefaultStory />
      </>
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SwitchToggleDefaultStory />
    </ThemeProvider>
  ));
