import '@expo/match-media';

import type {ReactElement} from 'react';
import {useEffect, useState} from 'react';
import type {ColorSchemeName} from 'react-native';
import {useMediaQuery} from 'react-responsive';
import type {Theme} from '@emotion/react';
import {ThemeProvider as EmotionThemeProvider, withTheme} from '@emotion/react';

import type {Colors, DoobooTheme, ThemeParam, ThemeType} from './colors';
import {colors, dark, light} from './colors';
import createDoobooContext from './createDoobooContext';
import useColorScheme from './useColorScheme';

export type ThemeContext = {
  themeType: ColorSchemeName;
  media: {
    isPortrait: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
  theme: Theme & DoobooTheme;
  changeThemeType: (themeType?: ColorSchemeName) => void;
  colors: Colors;
};

const [useCtx, DoobooProvider] = createDoobooContext<ThemeContext>();

export type ThemeProps = {
  children?: ReactElement;
  initialThemeType?: ThemeType;
  customTheme?: ThemeParam;
};

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
      primary: {
        ...theme.button.primary,
        ...(themeParam?.[type]?.button?.primary || {}),
      },
      secondary: {
        ...theme.button.secondary,
        ...(themeParam?.[type]?.button?.secondary || {}),
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
      info: {
        ...theme.button.info,
        ...(themeParam?.[type]?.button?.info || {}),
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

export function ThemeProvider({
  children,
  initialThemeType,
  customTheme = {},
}: ThemeProps): ReactElement {
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

export {useCtx as useTheme, withTheme};
