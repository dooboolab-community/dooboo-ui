import type {Theme} from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export const colors = {
  apple: '#151E22',
  google: '#E04238',
  facebook: '#345997',
};

export const light = {
  bg: {
    default: '#FFFFFF',
    paper: '#EDEDED',
    disabled: '#C4C4C4',
    border: 'rgba(0,0,0,0.2)',
  },
  role: {
    primary: '#000000',
    secondary: '#414141',
    danger: '#FF002E',
    warning: '#FFEB14',
    info: '#5398FF',
    success: '#33FF2F',
    light: '#EDEDED',
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
};

export const dark: typeof light = {
  bg: {
    default: '#000000',
    paper: '#414141',
    disabled: '#C4C4C4',
    border: 'rgba(255,255,255,0.2)',
  },
  role: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    danger: '#FF002E',
    warning: '#FFEB14',
    info: '#5398FF',
    success: '#33FF2F',
    light: '#414141',
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
