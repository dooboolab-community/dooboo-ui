import {Colors, ThemeParam, ThemeType, colors, dark, light} from './colors';
import {
  Theme as DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';
import React, {useEffect, useState} from 'react';

import createCtx from './createCtx';
import useColorScheme from './useColorScheme';
import {useMediaQuery} from 'react-responsive';

interface Context {
  themeType: ThemeType;
  media: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
  theme: DefaultTheme;
  changeThemeType: () => void;
  colors: Colors;
}

const [useCtx, Provider] = createCtx<Context>();

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
  const isMobile = useMediaQuery({maxWidth: 767});
  const isTablet = useMediaQuery({minWidth: 767, maxWidth: 992});
  const isDesktop = useMediaQuery({minWidth: 992});
  const colorScheme = useColorScheme();

  const [themeType, setThemeType] = useState(initialThemeType || colorScheme);

  useEffect(() => {
    if (!initialThemeType) setThemeType(colorScheme);
  }, [colorScheme, initialThemeType]);

  const changeThemeType = (): void => {
    const newThemeType = themeType;

    setThemeType(newThemeType);
  };

  const defaultTheme =
    themeType === 'dark'
      ? {...dark, ...customTheme?.dark}
      : {...light, ...customTheme?.light};

  const media = {
    isMobile,
    isTablet,
    isDesktop,
  };

  const theme: DefaultTheme = {...defaultTheme, ...media};

  return (
    <Provider
      value={{
        media,
        themeType: 'light',
        changeThemeType,
        theme: defaultTheme,
        colors,
      }}>
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useTheme, ThemeProvider, withTheme};
