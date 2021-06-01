import {
  ActivityIndicator,
  LayoutRectangle,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {DoobooTheme, light, useTheme, withTheme} from '../theme';
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

const ButtonContainer = styled.View<{
  type: ButtonType;
  size?: ButtonSize;
  outlined?: boolean;
}>`
  align-self: stretch;
  padding: ${({size}) =>
    size === 'large'
      ? '14px 24px'
      : size === 'small'
      ? '4px 12px'
      : '10px 20px'};
  border-radius: ${({size}) => (size === 'large' ? '24px' : '20px')};
  border-width: ${({outlined}) => (outlined ? '1px' : 0)};
  background-color: ${({theme, type, outlined}) =>
    outlined
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
  border-color: ${({theme, type}) =>
    type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary};

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
  outlined = false,
}) => {
  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);
  const [layout, setLayout] = useState<LayoutRectangle>();
  const {themeType} = useTheme();

  const mainColor =
    type === 'info'
      ? theme.info
      : type === 'secondary'
      ? theme.secondary
      : type === 'danger'
      ? theme.danger
      : type === 'warning'
      ? theme.warning
      : theme.primary;

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
      delayPressIn={50}
      disabled={disabled}
      style={style}
      {...touchableOpacityProps}>
      {loading ? (
        <ButtonContainer
          testID="loading-view"
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
          outlined={outlined}>
          {leftElement}
          <TypographyInverted.Heading3
            style={[
              {
                color:
                  themeType === 'dark' && !outlined
                    ? theme.textContrast
                    : outlined && type === 'warning'
                    ? theme.text
                    : outlined
                    ? mainColor
                    : type !== 'primary'
                    ? theme.text
                    : theme.textContrast,
              },
              compositeStyles.text,
              disabled && compositeStyles.disabledText,
            ]}
            {...textProps}>
            {text}
          </TypographyInverted.Heading3>
          {rightElement}
        </ButtonContainer>
      )}
    </TouchableOpacity>
  );
};

StyledButton.defaultProps = {theme: light};

export const Button = withTheme(StyledButton);
