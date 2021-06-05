import {DoobooTheme, light} from '../theme';

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
  border-width: ${({outlined}) => (outlined ? '1px' : 0)};
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
        ? theme.warning === light.warning
          ? theme.text
          : theme.warning
        : theme.text
      : disabled
      ? theme.textContrast
      : type === 'primary'
      ? theme.textContrast
      : 'black'};
`;
