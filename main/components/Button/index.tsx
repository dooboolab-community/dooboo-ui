import type {FC, ReactElement, ReactNode} from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useRef} from 'react';
import type {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styled, {css} from '@emotion/native';

import type {DoobooTheme} from '@dooboo-ui/theme';
import {LoadingIndicator} from '../LoadingIndicator';
import {getTheme} from '../../utils';
import {useHover} from 'react-native-web-hooks';
import {useTheme} from '@dooboo-ui/theme';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  disabled?: StyleProp<ViewStyle>;
  disabledText?: StyleProp<TextStyle>;
  hovered?: StyleProp<ViewStyle>;
};

export type ButtonType = 'text' | 'solid' | 'outlined';

export type ButtonColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light';

export type ButtonSizeType = 'small' | 'medium' | 'large';

const ButtonStyles = ({
  theme,
  type = 'solid',
  color = 'primary',
  size = 'medium',
  loading,
  disabled,
}: {
  theme?: DoobooTheme;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  disabled?: boolean;
  loading?: boolean;
}): {
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  textColor?: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
} => {
  theme = getTheme(theme);

  let backgroundColor = theme.button[color].bg;
  let borderColor = theme.button[color].bg;
  let textColor = theme.button[color].bg;

  if (disabled) {
    backgroundColor = theme.button.disabled.bg;
    borderColor = theme.button.disabled.text;
    textColor = theme.button.disabled.text;
  }

  if (['text', 'outlined'].includes(type)) {
    backgroundColor = theme.bg.basic;
  }

  if (type === 'solid' || color === 'light') {
    textColor = theme.button[color].text;
  }

  return {
    padding:
      size === 'large'
        ? '16px 32px'
        : size === 'small'
        ? '8px 16px'
        : '12px 24px',
    backgroundColor,
    borderWidth: type === 'outlined' ? '1px' : undefined,
    borderColor,
    textColor,
    disabledBackgroundColor:
      type === 'solid' && !loading ? theme.button.disabled.bg : theme.bg.basic,
    disabledBorderColor: theme.bg.disabled,
    disabledTextColor: theme.button.disabled.text,
  };
};

const ButtonContainer = styled.View<{
  type: ButtonType;
  size?: ButtonSizeType;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
}>`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export type Props = {
  testID?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  disabled?: boolean;
  loading?: boolean;
  loadingElement?: ReactElement;
  text?: string;
  borderRadius?: number;
  startElement?: ReactElement;
  endElement?: ReactElement;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  onPress?: TouchableOpacityProps['onPress'];
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
};

export const Button: FC<Props> = (props) => {
  const {
    testID,
    type = 'solid',
    color = 'primary',
    size = 'medium',
    disabled,
    loading = false,
    loadingElement,
    text,
    startElement,
    endElement,
    style,
    styles,
    onPress,
    activeOpacity = 0.6,
    touchableOpacityProps,
    borderRadius,
  } = props;

  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);

  const {theme} = useTheme();

  const {
    padding,
    backgroundColor,
    borderColor,
    borderWidth,
    textColor,
    disabledBackgroundColor,
    disabledBorderColor,
    disabledTextColor,
  } = ButtonStyles({theme, type, color, size, loading, disabled});

  const compositeStyles: Styles = {
    container: css`
      padding: ${padding};
      background-color: ${backgroundColor};
      border-color: ${borderColor};
      border-width: ${borderWidth};
    `,
    text: {
      color: textColor,
    },
    disabled: css`
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledBorderColor};
    `,
    disabledText: {
      color: disabledTextColor,
    },
    hovered: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.24,
      shadowRadius: 16,
      elevation: 10,
    },
    ...styles,
  };

  const renderContainer = useCallback(
    (children: ReactNode): ReactElement => {
      return (
        <ButtonContainer
          testID={loading ? 'loading-view' : 'button-container'}
          style={[
            compositeStyles.container,
            hovered && !disabled && compositeStyles.hovered,
            disabled && compositeStyles.disabled,
            {borderRadius: borderRadius ?? 4},
          ]}
          type={type}
          size={size}
          disabled={disabled}
        >
          {children}
        </ButtonContainer>
      );
    },
    [
      borderRadius,
      compositeStyles.container,
      compositeStyles.disabled,
      compositeStyles.hovered,
      disabled,
      hovered,
      loading,
      size,
      type,
    ],
  );

  const LoadingView = loadingElement ?? (
    <LoadingIndicator size="small" color={theme.text.basic} />
  );

  const ChildView = (
    <>
      {startElement}
      <Text
        style={[compositeStyles.text, disabled && compositeStyles.disabledText]}
      >
        {text}
      </Text>
      {endElement}
    </>
  );

  return (
    <TouchableOpacity
      testID={testID}
      ref={Platform.select({
        web: ref,
        default: undefined,
      })}
      activeOpacity={activeOpacity}
      onPress={onPress}
      delayPressIn={50}
      disabled={disabled || loading}
      style={style}
      {...touchableOpacityProps}
    >
      {renderContainer(loading ? LoadingView : ChildView)}
    </TouchableOpacity>
  );
};
