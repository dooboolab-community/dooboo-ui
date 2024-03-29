import type {StatusBarStyle} from 'react-native';
import {StatusBar} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

function StatusBarBrightness(): JSX.Element {
  const {themeType} = useTheme();

  const statusColor: StatusBarStyle =
    themeType === 'light' ? 'dark-content' : 'light-content';

  return <StatusBar barStyle={statusColor} />;
}

export default StatusBarBrightness;
