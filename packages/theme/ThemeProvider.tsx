import type {Colors, DoobooTheme, ThemeParam, ThemeType} from './colors';
import {ThemeProvider as EmotionThemeProvider, withTheme} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {colors, dark, light} from './colors';

import type {ColorSchemeName} from 'react-native';
import type {Theme as DefaultTheme} from '@emotion/react';
import createDoobooContext from './createDoobooContext';
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
  theme: DefaultTheme & DoobooTheme;
  changeThemeType: (themeType?: ColorSchemeName) => void;
  colors: Colors;
}

const [useCtx, DoobooProvider] = createDoobooContext<Context>();

interface Props {
  children?: React.ReactElement;
  initialThemeType?: ThemeType;
  customTheme?: ThemeParam;
}

const genTheme = (type: ThemeType, themeParam: ThemeParam): any => {
  const theme = type === 'light' ? light : dark;

  return {
    ...themeParam?.[type],
    bg: {
      ...theme.bg,
      ...(themeParam?.[type]?.bg || {}),
    },
    role: {
      ...theme.role,
      ...(themeParam?.[type]?.role || {}),
    },
    text: {
      ...theme.text,
      ...(themeParam?.[type]?.text || {}),
    },
    button: {
      ...theme.button,
      brand: {
        ...theme.button.brand,
        ...(themeParam?.[type]?.button?.brand || {}),
      },
      primary: {
        ...theme.button.primary,
        ...(themeParam?.[type]?.button?.primary || {}),
      },
      secondary: {
        ...theme.button.secondary,
        ...(themeParam?.[type]?.button?.secondary || {}),
      },
      accept: {
        ...theme.button.accept,
        ...(themeParam?.[type]?.button?.accept || {}),
      },
      info: {
        ...theme.button.info,
        ...(themeParam?.[type]?.button?.info || {}),
      },
      link: {
        ...theme.button.link,
        ...(themeParam?.[type]?.button?.link || {}),
      },
      success: {
        ...theme.button.success,
        ...(themeParam?.[type]?.button?.success || {}),
      },
      warning: {
        ...theme.button.warning,
        ...(themeParam?.[type]?.button?.warning || {}),
      },
      danger: {
        ...theme.button.danger,
        ...(themeParam?.[type]?.button?.danger || {}),
      },
      light: {
        ...theme.button.light,
        ...(themeParam?.[type]?.button?.light || {}),
      },
      disabled: {
        ...theme.button.disabled,
        ...(themeParam?.[type]?.button?.disabled || {}),
      },
    },
  };
};

function ThemeProvider({
  children,
  initialThemeType,
  customTheme = {},
}: Props): React.ReactElement {
  const isPortrait = useMediaQuery({orientation: 'portrait'});
  const isMobile = useMediaQuery({maxWidth: 767});
  const isTablet = useMediaQuery({minWidth: 767, maxWidth: 992});
  const isDesktop = useMediaQuery({minWidth: 992});

  const colorScheme = useColorScheme();

  const [themeType, setThemeType] = useState(initialThemeType ?? colorScheme);

  useEffect(() => {
    if (!initialThemeType) {
      setThemeType(colorScheme);
    }
  }, [colorScheme, initialThemeType]);

  const changeThemeType = (themeTypeProp?: ColorSchemeName): void => {
    if (!themeTypeProp) {
      setThemeType(themeType === 'light' ? 'dark' : 'light');

      return;
    }

    setThemeType(themeTypeProp);
  };

  const theme: Omit<
    DoobooTheme,
    'isPortrait' | 'isMobile' | 'isTablet' | 'isDesktop'
  > = {
    light: genTheme('light', customTheme),
    dark: genTheme('dark', customTheme),
  }[themeType ?? 'light'];

  const media = {
    isPortrait,
    isMobile,
    isTablet,
    isDesktop,
  };

  return (
    <DoobooProvider
      value={{
        media,
        themeType,
        changeThemeType,
        theme,
        colors,
      }}
    >
      <EmotionThemeProvider theme={{...theme, ...media}}>
        {children}
      </EmotionThemeProvider>
    </DoobooProvider>
  );
}

export {useCtx as useTheme, ThemeProvider, withTheme};
