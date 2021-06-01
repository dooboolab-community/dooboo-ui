import {Appearance} from 'react-native';
import {useEffect, useState} from 'react';
import {ThemeType} from './colors';

export const useColorScheme = (): any => {
  const deviceThemeType = Appearance.getColorScheme();
  const [colorType, setColorType] = useState(deviceThemeType);

  useEffect(() => {
    const listener = ({colorScheme}): void => {
      setColorType(colorScheme === 'light' ? ThemeType.LIGHT : ThemeType.DARK);
    };

    Appearance.addChangeListener(listener);

    return function cleanup() {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return colorType;
};

export default useColorScheme;
