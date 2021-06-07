import {DoobooTheme, light} from '../theme';

import {Animated} from 'react-native';
import styled from '@emotion/native';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'info';

export const ButtonWrapper = styled.View<{
  type: ButtonType;
  outlined?: boolean;
  disabled?: boolean;
}>`
  border-width: ${({outlined}) => (outlined ? '1px' : undefined)};
  background-color: ${({theme, type, outlined, disabled}) =>
    disabled
      ? undefined
      : outlined
      ? theme.background
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
  border-color: ${({theme, type, disabled}) =>
    disabled
      ? theme.disabled
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;

export const ButtonText = styled.Text<{
  outlined?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  theme?: DoobooTheme;
}>`
  color: ${({theme, outlined, type, disabled}) =>
    outlined
      ? type === 'primary'
        ? theme.primary
        : type === 'info'
        ? theme.info
        : type === 'secondary'
        ? theme.secondary
        : type === 'danger'
        ? theme.danger
        : type === 'warning'
        ? theme.background === light.background
          ? theme.text
          : theme.warning
        : theme.text
      : disabled
      ? theme.disabled
      : type === 'primary'
      ? theme.textContrast
      : 'black'};
`;

export const CheckboxWrapperOutlined = styled(Animated.View)<{
  type: ButtonType;
  disabled?: boolean;
  checked?: boolean;
}>`
  border-width: 1px;
  border-color: ${({theme, type, disabled}) =>
    disabled
      ? theme.disabled
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;

export const CheckboxWrapper = styled(Animated.View)<{
  type: ButtonType;
  disabled?: boolean;
  checked?: boolean;
}>`
  background-color: ${({theme, checked, type, disabled}) =>
    disabled
      ? undefined
      : !checked
      ? theme.background
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;

export const RadioButtonWrapper = styled.View<{
  type: ButtonType;
  selected?: boolean;
  disabled?: boolean;
}>`
  border-width: 1px;
  border-color: ${({theme, type, selected, disabled}) =>
    disabled
      ? theme.disabled
      : !selected
      ? theme.text
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;

export const RadioWrapper = styled(Animated.View)<{
  type: ButtonType;
  disabled?: boolean;
  selected?: boolean;
}>`
  background-color: ${({theme, selected, type, disabled}) =>
    disabled
      ? theme.disabled
      : !selected
      ? theme.background
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;

export const ColoredText = styled.Text<{
  type: ButtonType;
  disabled?: boolean;
  selected?: boolean;
}>`
  color: ${({theme, selected, type, disabled}) =>
    disabled
      ? undefined
      : !selected
      ? theme.text
      : type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};
`;
