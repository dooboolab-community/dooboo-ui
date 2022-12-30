import {isEmptyObject} from '../utils';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {light} from '@dooboo-ui/theme';
import styled from '@emotion/native';

export type ButtonType = 'text' | 'contained' | 'outlined';

export type ButtonColorType =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'accept'
  | 'info'
  | 'light';

export type ButtonTextType = {
  theme?: DoobooTheme;
  type?: ButtonType;
  color?: ButtonColorType;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
};

const getTheme = (theme): DoobooTheme => {
  return isEmptyObject(theme) || theme === undefined ? light : theme;
};

export const ButtonTextColor = ({
  theme,
  type,
  color,
  disabled,
  href,
}: ButtonTextType): string => {
  theme = getTheme(theme);

  if (disabled) {
    return theme.text.disabled;
  }

  if (type === 'text') {
    if (href) {
      return theme.button['link'].bg;
    }
    return theme.button[color ?? 'primary'].bg;
  }

  if (type === 'outlined') {
    return theme.text.default;
  }

  return theme.button[color ?? 'primary'].text;
};

export const ButtonText = styled.Text<ButtonTextType>``;

export const ButtonWrapper = styled.View<{
  type?: ButtonType;
  color?: ButtonColorType;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}>`
  border-width: ${({type}) => (type === 'outlined' ? '1px' : undefined)};
  background-color: ${({theme, type, color, loading, disabled, href}) => {
    theme = isEmptyObject(theme) ? light : theme;

    if (loading) {
      if (type === 'text' || type === 'outlined') {
        return undefined;
      }

      return theme.button[color ?? 'primary'].bg;
    }

    if (disabled) {
      return undefined;
    }

    if (type === 'text' || type === 'outlined') {
      return theme.bg.default;
    }

    if (href) {
      return theme.button['link'].bg;
    }

    return theme.button[color ?? 'primary'].bg;
  }};
  border-color: ${({theme, color, disabled, href}) => {
    if (disabled) {
      return theme.bg.default;
    }

    if (href) {
      return theme.button['link'].bg;
    }

    return theme.button[color ?? 'primary'].bg;
  }};
`;
