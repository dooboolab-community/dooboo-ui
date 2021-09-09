import {Colors, ThemeParam, ThemeType, colors, dark, light} from './colors';
import {
  Theme as DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';
import React, {useEffect, useState} from 'react';

import {ColorSchemeName} from 'react-native';
import createCtx from './createCtx';
import useColorScheme from './useColorScheme';
import {useMediaQuery} from 'react-responsive';

interface Context {
  themeType: ColorSchemeName;
  media: {
    isPortrait: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
  theme: DefaultTheme;
  changeThemeType: (themeType?: ColorSchemeName) => void;
  colors: Colors;
}

const [useCtx, Provider] = createCtx<Context>({theme: light} as Context);

interface Props {
  children?: React.ReactElement;
  // Using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
  customTheme?: ThemeParam;
}

function ThemeProvider({
  children,
  initialThemeType,
  customTheme,
}: Props): React.ReactElement {
  const isPortrait = useMediaQuery({query: '(orientation: portrait)'});
  const isMobile = useMediaQuery({maxWidth: 767});
  const isTablet = useMediaQuery({minWidth: 767, maxWidth: 992});
  const isDesktop = useMediaQuery({minWidth: 992});

  const colorScheme = useColorScheme();

  const [themeType, setThemeType] = useState(initialThemeType || colorScheme);

  useEffect(() => {
    if (!initialThemeType) setThemeType(colorScheme);
  }, [colorScheme, initialThemeType]);

  const changeThemeType = (themeTypeProp?: ColorSchemeName): void => {
    if (!themeTypeProp) {
      setThemeType(themeType === 'light' ? 'dark' : 'light');

      return;
    }

    setThemeType(themeTypeProp);
  };

  const defaultTheme =
    themeType === 'dark'
      ? {...dark, ...customTheme?.dark}
      : {...light, ...customTheme?.light};

  const media = {
    isPortrait,
    isMobile,
    isTablet,
    isDesktop,
  };

  const theme: DefaultTheme = {...defaultTheme, ...media};

  return (
    <Provider
      value={{
        media,
        themeType,
        changeThemeType,
        theme: defaultTheme,
        colors,
      }}>
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useTheme, ThemeProvider, withTheme};
