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
    brand: '#9E45B3',
    primary: '#34356C',
    secondary: '#6BF3C5',
    accept: '#00D8CB',
    info: '#307EF1',
    link: '#A351F4',
    success: '#0FC70C',
    warning: '#EBBD1A',
    danger: '#F84444',

    white: '#FFFFFF',
    gray1: '#EDEDED',
    gray2: '#CCCCCC',
    gray3: '#BEBEBE',
    gray4: '#909090',
    gray5: '#787878',
    gray6: '#4D4D4D',
    gray7: '#474747',
    gray8: '#1E1E1E',
    black: '#000000',
    red1: '#FF2C2C',
    red2: '#DA0000',
};

export const light = {
    bg: {
        default: colors.white,
        paper: colors.gray1,
        disabled: colors.gray3,
        border: colors.gray2,
        borderContrast: colors.gray7,
    },
    role: {
        brand: colors.brand,
        primary: colors.primary,
        secondary: colors.secondary,
        accept: colors.accept,
        info: colors.info,
        link: colors.link,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
    },
    text: {
        default: colors.black,
        label: colors.gray6,
        placeholder: colors.gray5,
        disabled: colors.gray3,
        validation: colors.red2,
        contrastBasic: colors.white,
        contrastLabel: colors.gray3,
        contrastPlaceholder: colors.gray4,
        contrastDisabled: colors.gray6,
        contrastValidation: colors.red1,
    },
    button: {
        brand: {
            text: colors.white,
            bg: colors.brand,
        },
        primary: {
            text: colors.white,
            bg: colors.primary,
        },
        secondary: {
            text: colors.white,
            bg: colors.secondary,
        },
        accept: {
            text: colors.white,
            bg: colors.accept,
        },
        info: {
            text: colors.white,
            bg: colors.info,
        },
        link: {
            text: colors.white,
            bg: colors.link,
        },
        success: {
            text: colors.white,
            bg: colors.success,
        },
        warning: {
            text: colors.white,
            bg: colors.warning,
        },
        danger: {
            text: colors.white,
            bg: colors.danger,
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
        default: colors.black,
        paper: colors.gray8,
        disabled: colors.gray7,
        border: colors.gray6,
        borderContrast: colors.gray2,
    },
    role: {
        brand: colors.brand,
        primary: colors.primary,
        secondary: colors.secondary,
        accept: colors.accept,
        info: colors.info,
        link: colors.link,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
    },
    text: {
        default: colors.white,
        label: colors.gray3,
        placeholder: colors.gray4,
        disabled: colors.gray6,
        validation: colors.red1,
        contrastBasic: colors.black,
        contrastLabel: colors.gray6,
        contrastPlaceholder: colors.gray5,
        contrastDisabled: colors.gray3,
        contrastValidation: colors.red2,
    },
    button: {
        brand: {
            text: colors.black,
            bg: colors.brand,
        },
        primary: {
            text: colors.black,
            bg: colors.primary,
        },
        secondary: {
            text: colors.black,
            bg: colors.secondary,
        },
        accept: {
            text: colors.black,
            bg: colors.accept,
        },
        info: {
            text: colors.black,
            bg: colors.info,
        },
        link: {
            text: colors.black,
            bg: colors.link,
        },
        success: {
            text: colors.black,
            bg: colors.success,
        },
        warning: {
            text: colors.black,
            bg: colors.warning,
        },
        danger: {
            text: colors.black,
            bg: colors.danger,
        },
        light: {
            text: colors.white,
            bg: colors.gray8,
        },
        disabled: {
            text: colors.gray7,
            bg: colors.gray8,
        },
    },
};
```
