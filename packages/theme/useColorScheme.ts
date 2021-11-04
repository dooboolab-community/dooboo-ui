import {Appearance, ColorSchemeName} from 'react-native';
import {useEffect, useState} from 'react';

export const useColorScheme = (): ColorSchemeName => {
  const [colorType, setColorType] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const listener = (): void => setColorType(Appearance.getColorScheme());

    Appearance.addChangeListener(listener);

    return function cleanup() {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  return colorType;
};

export default useColorScheme;
