import {Theme} from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export const colors = {
  black: 'black',
  white: 'white',
  charcoalGray: '#414141',
  gray: '#6D6D6D',
  cloud: '#C4C4C4',
  lightGray: '#EDEDED',
  brightTurquoise: '#00D9D5',
  ruddy: '#FF002E',
  yellow: '#FFEB14',
  blueberry: '#5398FF',
  harlequin: '#33FF2F',
  apple: '#151E22',
  google: '#E04238',
  facebook: '#345997',
  negative: '#ff7676',
  positive: '#00BA90',
};

export type Colors = typeof colors;

export const light = {
  primary: colors.black,
  paper: colors.lightGray,
  disabled: colors.cloud,
  background: colors.white,
  secondary: colors.brightTurquoise,
  danger: colors.ruddy,
  warning: colors.yellow,
  light: colors.lightGray,
  info: colors.blueberry,
  success: colors.harlequin,
  textPrimary: colors.black,
  text: colors.black,
  placeholder: colors.gray,
  textDisabled: colors.cloud,
  textContrast: colors.white,
  textValidation: colors.ruddy,
};

export type DoobooTheme = typeof light & {
  isPortrait?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
};

export const dark = {
  primary: colors.white,
  paper: colors.charcoalGray,
  disabled: colors.charcoalGray,
  background: colors.black,
  secondary: colors.brightTurquoise,
  danger: colors.ruddy,
  warning: colors.yellow,
  light: colors.charcoalGray,
  info: colors.blueberry,
  success: colors.harlequin,
  textPrimary: colors.white,
  text: colors.white,
  placeholder: colors.gray,
  textDisabled: colors.charcoalGray,
  textContrast: colors.black,
  textValidation: colors.ruddy,
};

export const theme = {
  light,
  dark,
};

export interface ThemeParam {
  light: Partial<Theme>;
  dark: Partial<Theme>;
}

export const createDoobooTheme = ({
  type,
  themes,
}: {
  type?: ThemeType;
  themes?: ThemeParam;
}): Partial<Theme> => {
  switch (type) {
    case 'dark':
      return {...theme.dark, ...themes?.dark};
    case 'light':
    default:
      return {...theme.light, ...themes?.light};
  }
};
