import type {FC} from 'react';
import type {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {ActivityIndicator, Platform, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';

import styled from '@emotion/native';
import {useHover} from 'react-native-web-hooks';
import {useTheme} from '@dooboo-ui/theme';

import type {
  ButtonType,
  ButtonColorType,
  ButtonSizeType,
} from '../../stories/Styles/ButtonStyles';
import {
  ButtonTextColor,
  ButtonText,
  ButtonWrapper,
} from '../../stories/Styles/ButtonStyles';
import {css} from '@emotion/native/dist/emotion-native.cjs';

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  disabledButton?: StyleProp<ViewStyle>;
  disabledText?: StyleProp<TextStyle>;
  hovered?: StyleProp<ViewStyle>;
};

const ButtonContainer = styled(ButtonWrapper)<{
  type: ButtonType;
  width?: number;
  height?: number;
  outlined?: boolean;
  disabled?: boolean;
  size?: ButtonSizeType;
}>`
  padding: 4px;
  height: ${({size}) =>
    size === 'large' ? '80px' : size === 'medium' ? '50px' : '32px'};
  width: ${({size}) =>
    size === 'large' ? '80px' : size === 'medium' ? '50px' : '32px'};
  border-radius: ${({size}) =>
    size === 'large' ? '45px' : size === 'medium' ? '50px' : '32px'};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export interface IconButtonProps {
  testID?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  disabled?: boolean;
  loading?: boolean;
  indicatorColor?: string;
  icon: any;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  onPress?: TouchableOpacityProps['onPress'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    testID,
    type = 'contained',
    color = 'primary',
    size = 'medium',
    disabled,
    loading,
    icon,
    style,
    styles,
    activeOpacity = 0.6,
    onPress,
    touchableOpacityProps,
  } = props;

  const {theme} = useTheme();

  const disabledTextColor =
    disabled && type === 'contained' && !loading
      ? theme.text.contrastBasic
      : type !== 'contained'
      ? theme.bg.disabled
      : theme.bg.paper;

  const TextColor = ButtonTextColor({theme, type, color, disabled});

  const indicatorColor = props.indicatorColor ?? theme.bg.disabled;

  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);

  const compositeStyles: Styles = {
    text: {
      color: TextColor,
    },
    disabledButton: css`
      background-color: ${type === 'contained' && !loading
        ? theme.bg.disabled
        : undefined};
      border-color: ${theme.bg.disabled};
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
          color={color}
          size={size}
          loading={true}
        >
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
          type={type}
          color={color}
          size={size}
          disabled={disabled}
        >
          {icon}
        </ButtonContainer>
      )}
    </TouchableOpacity>
  );
};
