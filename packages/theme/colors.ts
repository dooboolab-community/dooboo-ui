export type ThemeType = 'light' | 'dark';

export const light = {
  bg: {
    basic: '#FFFFFF',
    paper: '#EDEDED',
    disabled: '#BEBEBE',
  },
  role: {
    primary: '#1B1B1B',
    secondary: '#3D8BFF',
    accent: '#6BF3C5',
    info: '#307EF1',
    link: '#A351F4',
    success: '#1CD66C',
    warning: '#E2B101',
    danger: '#F84444',
    border: '#CCCCCC',
  },
  text: {
    basic: '#000000',
    label: '#4D4D4D',
    placeholder: '#787878',
    disabled: '#BEBEBE',
    validation: '#DA0000',
    contrast: '#FFFFFF',
  },
  button: {
    primary: {
      bg: '#1B1B1B',
      text: '#FFFFFF',
    },
    secondary: {
      bg: '#3D8BFF',
      text: '#FFFFFF',
    },
    success: {
      bg: '#1CD66C',
      text: '#FFFFFF',
    },
    danger: {
      bg: '#F84444',
      text: '#FFFFFF',
    },
    warning: {
      bg: '#E2B101',
      text: '#FFFFFF',
    },
    info: {
      bg: '#307EF1',
      text: '#FFFFFF',
    },
    light: {
      bg: '#E8E8E8',
      text: '#232323',
    },
    disabled: {
      text: '#EDEDED',
      bg: '#BEBEBE',
    },
  },
};

export const dark: typeof light = {
  bg: {
    basic: '#242424',
    paper: '#1E1D1D',
    disabled: '#474747',
  },
  role: {
    primary: '#FFFFFF',
    secondary: '#3D8BFF',
    accent: '#6BF3C5',
    info: '#2998FF',
    link: '#A351F4',
    success: '#2FFA86',
    warning: '#F4CC3E',
    danger: '#FF3C3C',
    border: '#363636',
  },
  text: {
    basic: '#FFFFFF',
    label: '#BEBEBE',
    placeholder: '#909090',
    disabled: '#4D4D4D',
    validation: '#FF2C2C',
    contrast: '#000000',
  },
  button: {
    primary: {
      bg: '#FFFFFF',
      text: '#000000',
    },
    secondary: {
      bg: '#3D8BFF',
      text: '#000000',
    },
    success: {
      bg: '#2FFA86',
      text: '#000000',
    },
    danger: {
      bg: '#FF3C3C',
      text: '#000000',
    },
    warning: {
      bg: '#F4CC3E',
      text: '#000000',
    },
    info: {
      bg: '#2998FF',
      text: '#000000',
    },
    light: {
      bg: '#313131',
      text: '#232323',
    },
    disabled: {
      text: '#292929',
      bg: '#BEBEBE',
    },
  },
};

export type Colors = typeof light;

export type DoobooTheme = typeof light & {
  isPortrait?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
};

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type DoobooThemeParams = RecursivePartial<DoobooTheme>;

export type ThemeObjParams = {
  bg: Partial<typeof light.bg>;
  role: Partial<typeof light.role>;
  text: Partial<typeof light.text>;
  button: Partial<typeof light.button>;
};

export interface ThemeParam {
  light?: Partial<ThemeObjParams & any>;
  dark?: Partial<ThemeObjParams & any>;
}
