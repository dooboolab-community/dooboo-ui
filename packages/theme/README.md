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
export const light = {
  bg: {
    default: '#FFFFFF',
    paper: '#EDEDED',
    disabled: '#C4C4C4',
  },
  role: {
    primary: '#000000',
    secondary: '#414141',
    danger: '#FF002E',
    warning: '#FFEB14',
    info: '#5398FF',
    success: '#33FF2F',
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
  },
  role: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    danger: '#FF002E',
    warning: '#FFEB14',
    info: '#5398FF',
    success: '#33FF2F',
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
```