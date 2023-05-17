export type ThemeType = 'light' | 'dark';

export const colors = {
  primaryLight: '#1B1B1B',
  secondaryLight: '#3D8BFF',
  accentLight: '#6BF3C5',
  infoLight: '#307EF1',
  linkLight: '#A351F4',
  successLight: '#1CD66C',
  warningLight: '#E2B101',
  dangerLight: '#F84444',

  primaryDark: '#FFFFFF',
  secondaryDark: '#1F50FF',
  accentDark: '#6BF3C5',
  infoDark: '#2998FF',
  linkDark: '#A351F4',
  successDark: '#2FFA86',
  warningDark: '#F4CC3E',
  dangerDark: '#FF3C3C',

  white: '#FFFFFF',
  gray1: '#EDEDED',
  gray2: '#CCCCCC',
  gray3: '#BEBEBE',
  gray4: '#909090',
  gray5: '#787878',
  gray6: '#4D4D4D',
  gray7: '#474747',
  gray8: '#282828',
  gray9: '#1E1E1E',
  black: '#000000',
  red1: '#FF2C2C',
  red2: '#DA0000',
};

export const light = {
  bg: {
    basic: colors.white,
    paper: colors.gray1,
    disabled: colors.gray3,
  },
  role: {
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    accent: colors.accentLight,
    info: colors.infoLight,
    link: colors.linkLight,
    success: colors.successLight,
    warning: colors.warningLight,
    danger: colors.dangerLight,
    border: colors.gray2,
  },
  text: {
    basic: colors.black,
    label: colors.gray6,
    placeholder: colors.gray5,
    disabled: colors.gray3,
    validation: colors.red2,
    contrast: colors.white,
  },
  button: {
    primary: {
      text: colors.white,
      bg: colors.primaryLight,
    },
    secondary: {
      text: colors.white,
      bg: colors.secondaryLight,
    },
    success: {
      text: colors.white,
      bg: colors.successLight,
    },
    warning: {
      text: colors.white,
      bg: colors.warningLight,
    },
    danger: {
      text: colors.white,
      bg: colors.dangerLight,
    },
    info: {
      text: colors.white,
      bg: colors.infoLight,
    },
    light: {
      text: colors.black,
      bg: colors.gray1,
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
    disabled: colors.gray7,
  },
  role: {
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    accent: colors.accentDark,
    info: colors.infoDark,
    link: colors.linkDark,
    success: colors.successDark,
    warning: colors.warningDark,
    danger: colors.dangerDark,
    border: '#363636',
  },
  text: {
    basic: colors.white,
    label: colors.gray3,
    placeholder: colors.gray4,
    disabled: colors.gray6,
    validation: colors.red1,
    contrast: colors.black,
  },
  button: {
    primary: {
      text: colors.black,
      bg: colors.primaryDark,
    },
    secondary: {
      text: colors.black,
      bg: colors.secondaryDark,
    },
    success: {
      text: colors.black,
      bg: colors.successDark,
    },
    warning: {
      text: colors.black,
      bg: colors.warningDark,
    },
    danger: {
      text: colors.black,
      bg: colors.dangerDark,
    },
    info: {
      text: colors.black,
      bg: colors.infoDark,
    },
    light: {
      text: colors.gray1,
      bg: colors.gray8,
    },
    disabled: {
      text: '#474747',
      bg: '#292929',
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
