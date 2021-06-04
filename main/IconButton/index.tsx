import {ActivityIndicator, Platform, TouchableOpacity} from 'react-native';
import {DoobooTheme, light, withTheme} from '../theme';
import React, {useRef} from 'react';
import type {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import type {FC} from 'react';
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
  width?: number;
  height?: number;
  outlined?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
}>`
  padding: 4px;
  border-width: ${({outlined}) => (outlined ? '1px' : 0)};
  height: ${({size}) =>
    size === 'large' ? '80px' : size === 'medium' ? '50px' : '32px'};
  width: ${({size}) =>
    size === 'large' ? '80px' : size === 'medium' ? '50px' : '32px'};
  border-radius: ${({size}) =>
    size === 'large' ? '45px' : size === 'medium' ? '50px' : '32px'};
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

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export interface IconButtonProps {
  testID?: string;
  indicatorColor?: string;
  loading?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  icon: React.ReactElement;
  onPress?: TouchableOpacityProps['onPress'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
  type?: ButtonType;
  size?: ButtonSize;
}

const StyledButton: FC<IconButtonProps & {theme: DoobooTheme}> = ({
  testID,
  theme,
  disabled,
  loading,
  style,
  styles,
  indicatorColor = theme.disabled,
  activeOpacity = 0.6,
  icon,
  onPress,
  touchableOpacityProps,
  type = 'primary',
  outlined = false,
  size = 'medium',
}) => {
  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);

  const compositeStyles: Styles = {
    disabledButton: {
      backgroundColor: !outlined ? theme.disabled : theme.background,
      borderColor: theme.disabled,
    },
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
          size={size}
          type={type}
          disabled={disabled}
          outlined={outlined}>
          {icon}
        </ButtonContainer>
      )}
    </TouchableOpacity>
  );
};

StyledButton.defaultProps = {theme: light};

export const IconButton = withTheme(StyledButton);
