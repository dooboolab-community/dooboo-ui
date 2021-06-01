import {
  ActivityIndicator,
  LayoutRectangle,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {DoobooTheme, light, withTheme} from '../theme';
import React, {useRef, useState} from 'react';
import type {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import type {FC} from 'react';
import {TypographyInverted} from '../Typography';
import styled from '@emotion/native';
import {useHover} from 'react-native-web-hooks';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  disabledButton?: StyleProp<ViewStyle>;
  disabledText?: StyleProp<TextStyle>;
  hovered?: StyleProp<ViewStyle>;
};

type ButtonType = 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
type ButtonSize = 'small' | 'medium' | 'large';

const Container = styled.View<{type: ButtonType; size?: ButtonSize}>`
  align-self: stretch;
  padding: 10px 20px;
  background-color: ${({theme, type}) =>
    type === 'primary' ? theme.primary : theme.secondary};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export interface ButtonProps {
  testID?: string;
  indicatorColor?: string;
  loading?: boolean;
  disabled?: boolean;
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

const StyledButton: FC<ButtonProps & {theme: DoobooTheme}> = ({
  testID,
  theme,
  disabled,
  loading,
  style,
  styles,
  indicatorColor = theme.disabled,
  leftElement,
  rightElement,
  activeOpacity = 0.6,
  text,
  onPress,
  touchableOpacityProps,
  textProps,
  type = 'primary',
  size,
}) => {
  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);
  const [layout, setLayout] = useState<LayoutRectangle>();

  const compositeStyles: Styles = {
    disabledButton: {
      backgroundColor: theme.disabled,
      borderColor: theme.disabled,
    },
    disabledText: {
      color: theme.disabled,
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
      delayPressIn={200}
      disabled={disabled}
      style={style}
      {...touchableOpacityProps}>
      {loading ? (
        <Container
          type={type}
          size={size}
          testID="loading-view"
          style={[
            compositeStyles.container,
            {
              width: layout?.width,
              height: layout?.height,
            },
            hovered && !disabled && compositeStyles.hovered,
            disabled && compositeStyles.disabledButton,
          ]}>
          <ActivityIndicator size="small" color={indicatorColor} />
        </Container>
      ) : (
        <Container
          type={type}
          size={size}
          testID="button-view"
          style={[
            compositeStyles.container,
            hovered && !disabled && compositeStyles.hovered,
            disabled && compositeStyles.disabledButton,
          ]}
          onLayout={(e) => setLayout(e.nativeEvent.layout)}>
          {leftElement}
          <TypographyInverted.Body1
            style={[
              compositeStyles.text,
              disabled && compositeStyles.disabledText,
            ]}
            {...textProps}>
            {text}
          </TypographyInverted.Body1>
          {rightElement}
        </Container>
      )}
    </TouchableOpacity>
  );
};

StyledButton.defaultProps = {theme: light};

export const Button = withTheme(StyledButton);
