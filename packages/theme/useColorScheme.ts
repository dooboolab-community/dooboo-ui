import {Appearance, ColorSchemeName} from 'react-native';
import {useEffect, useState} from 'react';

export const useColorScheme = (): ColorSchemeName => {
  const deviceThemeType = Appearance.getColorScheme();
  const [colorType, setColorType] = useState(deviceThemeType);

  useEffect(() => {
    const listener = ({colorScheme}): void => {
      setColorType(colorScheme);
    };

    Appearance.addChangeListener(listener);

    return function cleanup() {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return colorType;
};

export default useColorScheme;
