import type {DoobooTheme} from '@dooboo-ui/theme';
import {dark, light} from '@dooboo-ui/theme';

import {Animated} from 'react-native';
import {isEmptyObject} from '../utils';
import styled from '@emotion/native';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light';

export type SnackbarType =
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger';

export const ButtonWrapper = styled.View<{
  type?: ButtonType;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
}>`
  border-width: ${({outlined}) => (outlined ? '1px' : undefined)};
  background-color: ${({theme, type, outlined, loading, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (loading) {
      if (outlined) {
        return undefined;
      }

      return theme[type!];
    }

    if (disabled) {
      return undefined;
    }

    if (outlined) {
      return theme.background;
    }

    return theme[type ?? 'primary'];
  }};
  border-color: ${({theme, type, disabled}) => {
    if (disabled) {
      return theme.disabled;
    }

    return theme[type!];
  }};
`;

export const ButtonText = styled.Text<{
  outlined?: boolean;
  type?: ButtonType | SnackbarType;
  disabled?: boolean;
  loading?: boolean;
  theme?: DoobooTheme;
}>`
  color: ${({theme, outlined, type, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    const isDarkBackground = theme.background === dark.background;

    if (outlined) {
      if (
        !isDarkBackground ||
        ['light', 'default', 'warning', undefined].includes(type)
      ) {
        return theme.text;
      }

      return theme[type!];
    }

    if (isDarkBackground) {
      return ['default', 'danger', 'light'].includes(type!) ? 'white' : 'black';
    }

    if (disabled) {
      return theme.disabled;
    }

    if (['primary', 'danger'].includes(type!)) {
      return theme.textContrast;
    }

    return 'black';
  }};
`;

export const CheckboxWrapperOutlined = styled(Animated.View as any)<{
  type: ButtonType;
  disabled?: boolean;
  checked?: boolean;
}>`
  border-width: 1px;
  border-color: ${({theme, type, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (disabled) {
      return theme.disabled;
    }

    if (type === 'light') {
      return theme.primary;
    }

    return theme[type ?? 'primary'];
  }};
`;

export const CheckboxWrapper = styled(Animated.View as any)<{
  type: ButtonType;
  disabled?: boolean;
  checked?: boolean;
}>`
  background-color: ${({theme, checked, type, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (disabled) {
      return undefined;
    }

    if (!checked) {
      return theme.background;
    }

    if (type === 'light') {
      return theme.primary;
    }

    return theme[type ?? 'primary'];
  }};
`;

export const RadioButtonWrapper = styled.View<{
  type: ButtonType;
  selected?: boolean;
  disabled?: boolean;
}>`
  border-width: 1px;
  border-color: ${({theme, type, selected, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (disabled) {
      return theme.disabled;
    }

    if (!selected) {
      return theme.text;
    }

    if (type === 'light') {
      return theme.primary;
    }

    return theme[type ?? 'primary'];
  }};
`;

export const RadioWrapper = styled(Animated.View as any)<{
  type: ButtonType;
  disabled?: boolean;
  selected?: boolean;
}>`
  background-color: ${({theme, selected, type, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (disabled) {
      return theme.disabled;
    }

    if (!selected) {
      return theme.background;
    }

    return theme[type ?? 'primary'];
  }};
`;

export const ColoredText = styled.Text<{
  type: ButtonType;
  disabled?: boolean;
  selected?: boolean;
}>`
  color: ${({theme, selected, type, disabled}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (disabled) {
      return undefined;
    }

    if (!selected) {
      return theme.text;
    }

    if (type === 'light') {
      return theme.primary;
    }

    return theme[type ?? 'primary'];
  }};
`;

export const SnackbarWrapper = styled(Animated.View as any)<{
  type?: SnackbarType;
  checked?: boolean;
}>`
  background-color: ${({theme, type}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (type === 'default') {
      return theme.paper;
    }

    return theme[type ?? 'paper'];
  }};
  flex-direction: row;
  text-align: left;
  align-items: center;
  align-self: center;
  position: absolute;
  font-size: 16px;
  padding: 10px 20px;
  bottom: 20px;
  border-radius: 20px;
`;
