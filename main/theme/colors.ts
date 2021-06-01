import {Theme} from '@emotion/react';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

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
  apple: '#151E22',
  google: '#E04238',
  facebook: '#345997',
  negative: '#ff7676',
  positive: '#00BA90',
};

export type Colors = typeof colors;

export const light = {
  primary: colors.black,
  disabled: colors.cloud,
  background: colors.white,
  secondary: colors.brightTurquoise,
  danger: colors.ruddy,
  warning: colors.yellow,
  info: colors.blueberry,
  textPrimary: colors.black,
  text: colors.black,
  placeholder: colors.gray,
  textDisabled: colors.cloud,
  textContrast: colors.white,
  textDanger: colors.ruddy,
};

export type DoobooTheme = typeof light & {
  isDesktop?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
};

export const dark = {
  primary: colors.white,
  disabled: colors.charcoalGray,
  background: colors.black,
  secondary: colors.brightTurquoise,
  danger: colors.ruddy,
  warning: colors.yellow,
  info: colors.blueberry,
  textPrimary: colors.white,
  text: colors.white,
  placeholder: colors.gray,
  textDisabled: colors.charcoalGray,
  textContrast: colors.black,
  textDanger: colors.ruddy,
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
    case ThemeType.DARK:
      return {...theme.dark, ...themes?.dark};
    case ThemeType.LIGHT:
    default:
      return {...theme.light, ...themes?.light};
  }
};
