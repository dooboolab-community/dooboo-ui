import type {Theme} from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export const colors = {
  apple: '#151E22',
  google: '#E04238',
  facebook: '#345997',
  lightPrimary: '#000000',
  darkPrimary: '#FFFFFF',
  secondary: '#00D9D5',
  danger: '#FF002E',
  warning: '#FFEB14',
  info: '#5398FF',
  success: '#33FF2F',
  light: '#EDEDED',
};

export const light = {
  bg: {
    default: '#FFFFFF',
    paper: '#EDEDED',
    disabled: '#C4C4C4',
    border: 'rgba(0,0,0,0.2)',
  },
  role: {
    primary: colors.lightPrimary,
    secondary: colors.secondary,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    light: colors.light,
  },
  text: {
    default: '#000000',
    primary: '#000000',
    placeholder: '#6D6D6D',
    disabled: '#C4C4C4',
    contrast: '#FFFFFF',
    validation: '#FF002E',
    secondary: '#404040',
    link: '#393D7A',
    accent: '#B446BF',
  },
  button: {
    primary: {
      text: '#FFFFFF',
      bg: colors.lightPrimary,
    },
    secondary: {
      text: '#000000',
      bg: colors.secondary,
    },
    success: {
      text: '#000000',
      bg: colors.success,
    },
    danger: {
      text: '#FFFFFF',
      bg: colors.danger,
    },
    warning: {
      text: '#000000',
      bg: colors.warning,
    },
    info: {
      text: '#000000',
      bg: colors.info,
    },
    light: {
      text: '#000000',
      bg: colors.light,
    },
  },
};

export const dark: typeof light = {
  bg: {
    default: '#000000',
    paper: '#414141',
    disabled: '#C4C4C4',
    border: 'rgba(255,255,255,0.2)',
  },
  role: {
    primary: colors.darkPrimary,
    secondary: colors.secondary,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    light: colors.light,
  },
  text: {
    default: '#FFFFFF',
    primary: '#000000',
    placeholder: '#6D6D6D',
    disabled: '#C4C4C4',
    contrast: '#000000',
    validation: '#FF002E',
    secondary: '#D3D8E8',
    link: '#E0E0E0',
    accent: '#8A96DC',
  },
  button: {
    primary: {
      text: '#000000',
      bg: colors.darkPrimary,
    },
    secondary: {
      text: '#000000',
      bg: colors.secondary,
    },
    success: {
      text: '#000000',
      bg: colors.success,
    },
    danger: {
      text: '#FFFFFF',
      bg: colors.danger,
    },
    warning: {
      text: '#000000',
      bg: colors.warning,
    },
    info: {
      text: '#000000',
      bg: colors.info,
    },
    light: {
      text: '#000000',
      bg: colors.light,
    },
  },
};

export type Colors = typeof colors;

export type DoobooTheme = typeof light & {
  isPortrait?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
};

export interface ThemeParam {
  light?: Partial<Theme>;
  dark?: Partial<Theme>;
}
