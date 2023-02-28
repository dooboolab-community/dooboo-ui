# @dooboo-ui/theme

> Current package supports styling [react native](reactnative.dev) component in `light` and `dark` mode.

## Installation

```sh
yarn add @dooboo-ui/theme
```

## Usage

Documented in [dooboo-ui.dooboolab.com](https://dooboo-ui.dooboolab.com/?path=/docs/overview-theming--page).


## Variables

```ts
export const colors = {
  primaryLight: '#47498A',
  secondaryLight: '#9E45B3',
  acceptLight: '#6BF3C5',
  infoLight: '#307EF1',
  linkLight: '#A351F4',
  successLight: '#0FC70C',
  warningLight: '#EBBD1A',
  dangerLight: '#F84444',

  primaryDark: '#585DFA',
  secondaryDark: '#C93AEB',
  acceptDark: '#6BF3C5',
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
    accent: colors.acceptLight,
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
      text: colors.gray3,
      bg: colors.gray1,
    },
  },
};

export const dark: typeof light = {
  bg: {
    basic: colors.black,
    paper: colors.gray9,
    disabled: colors.gray7,
  },
  role: {
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    accent: colors.acceptDark,
    info: colors.infoDark,
    link: colors.linkDark,
    success: colors.successDark,
    warning: colors.warningDark,
    danger: colors.dangerDark,
    border: colors.gray6,
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
      text: colors.gray7,
      bg: colors.gray9,
    },
  },
}
```
