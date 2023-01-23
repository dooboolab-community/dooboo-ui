import {Animated} from 'react-native';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {isEmptyObject} from '../../utils';
import {light} from '@dooboo-ui/theme';
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

      return theme.button[type!].bg;
    }

    if (disabled) {
      return undefined;
    }

    if (outlined) {
      return theme.bg.basic;
    }

    return theme.button[type ?? 'primary'].bg;
  }};
  border-color: ${({theme, type, disabled}) => {
    if (disabled) {
      return theme.bg.basic;
    }

    return theme.button[type!].bg;
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

    if (outlined) {
      return theme.text.basic;
    }

    if (disabled) {
      return theme.text.disabled;
    }

    return theme.button[type!].text;
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
      return theme.bg.disabled;
    }

    if (type === 'light') {
      return theme.role.primary;
    }

    return theme.button[type ?? 'primary'].bg;
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
      return theme.bg.disabled;
    }

    if (type === 'light') {
      return theme.role.primary;
    }

    return theme.button[type ?? 'primary'].bg;
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
      return theme.bg.disabled;
    }

    if (!selected) {
      return theme.text.basic;
    }

    if (type === 'light') {
      return theme.role.primary;
    }

    return theme.button[type ?? 'primary'].bg;
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
      return theme.bg.disabled;
    }

    if (!selected) {
      return theme.role.primary;
    }

    return theme.button[type ?? 'primary'].bg;
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
      return theme.text.basic;
    }

    if (type === 'light') {
      return theme.role.primary;
    }

    return theme.button[type ?? 'primary'].bg;
  }};
`;

export const SnackbarWrapper = styled(Animated.View as any)<{
  type?: SnackbarType;
  checked?: boolean;
}>`
  background-color: ${({theme, type}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (type === 'default') {
      return theme.bg.disabled;
    }

    return theme.button[type ?? 'light'].bg;
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
