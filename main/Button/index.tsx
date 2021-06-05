import {
  ActivityIndicator,
  LayoutRectangle,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  ButtonText,
  ButtonType,
  ButtonWrapper,
} from '../Styled/StyledComponents';
import {DoobooTheme, light, withTheme} from '../theme';
import React, {useRef, useState} from 'react';
import type {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styled, {css} from '@emotion/native';

import type {FC} from 'react';
import {useHover} from 'react-native-web-hooks';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  disabledButton?: StyleProp<ViewStyle>;
  disabledText?: StyleProp<TextStyle>;
  hovered?: StyleProp<ViewStyle>;
};

type ButtonSize = 'small' | 'medium' | 'large';

const ButtonContainer = styled(ButtonWrapper)<{
  type: ButtonType;
  size?: ButtonSize;
  outlined?: boolean;
  disabled?: boolean;
}>`
  align-self: stretch;
  padding: ${({size}) =>
    size === 'large'
      ? '14px 24px'
      : size === 'small'
      ? '4px 12px'
      : '10px 20px'};
  border-radius: ${({size}) => (size === 'large' ? '24px' : '20px')};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export interface ButtonProps {
  testID?: string;
  indicatorColor?: string;
  loading?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  text?: string;
  onPress?: TouchableOpacityProps['onPress'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
  textProps?: Partial<TextProps>;
  type?: ButtonType;
  size?: ButtonSize;
}

const ButtonComponent: FC<ButtonProps & {theme: DoobooTheme}> = ({
  testID,
  theme,
  disabled,
  loading,
  style,
  styles,
  indicatorColor = theme.text,
  leftElement,
  rightElement,
  activeOpacity = 0.6,
  text,
  onPress,
  touchableOpacityProps,
  textProps,
  type = 'primary',
  size,
  outlined = false,
}) => {
  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);
  const [layout, setLayout] = useState<LayoutRectangle>();

  const compositeStyles: Styles = {
    disabledButton: css`
      background-color: ${!outlined ? theme.disabled : theme.background};
      border-color: ${theme.disabled};
    `,
    disabledText: {
      color: !outlined ? theme.background : theme.textDisabled,
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
      {...touchableOpacityProps}>
      {loading ? (
        <ButtonContainer
          testID="loading-view"
          disabled
          style={[
            compositeStyles.container,
            {
              width: layout?.width,
              height: layout?.height,
            },
            hovered && !disabled && compositeStyles.hovered,
            disabled && compositeStyles.disabledButton,
          ]}
          type={type}
          size={size}
          outlined={outlined}>
          <ActivityIndicator size="small" color={indicatorColor} />
        </ButtonContainer>
      ) : (
        <ButtonContainer
          testID="button-container"
          style={[
            compositeStyles.container,
            hovered && !disabled && compositeStyles.hovered,
            disabled && compositeStyles.disabledButton,
          ]}
          onLayout={(e) => setLayout(e.nativeEvent.layout)}
          type={type}
          size={size}
          disabled={disabled}
          outlined={outlined}>
          {leftElement}
          <ButtonText
            outlined={outlined}
            type={type}
            style={[
              compositeStyles.text,
              disabled && compositeStyles.disabledText,
            ]}
            {...textProps}>
            {text}
          </ButtonText>
          {rightElement}
        </ButtonContainer>
      )}
    </TouchableOpacity>
  );
};

ButtonComponent.defaultProps = {theme: light};

export const Button = withTheme(ButtonComponent);
