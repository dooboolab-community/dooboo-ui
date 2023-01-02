import type {FC, ReactElement} from 'react';
import type {
  LayoutRectangle,
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ActivityIndicator, Platform, TouchableOpacity} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import {useHover} from 'react-native-web-hooks';
import styled, {css} from '@emotion/native';

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

type Styles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  disabledButton?: StyleProp<ViewStyle>;
  disabledText?: StyleProp<TextStyle>;
  hovered?: StyleProp<ViewStyle>;
};

const ButtonContainer = styled(ButtonWrapper)<{
  type: ButtonType;
  size?: ButtonSizeType;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
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

export interface Props {
  testID?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  indicatorColor?: string;
  text?: string;
  startElement?: ReactElement;
  endElement?: ReactElement;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  onPress?: TouchableOpacityProps['onPress'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
  textProps?: Partial<TextProps>;
}

export const Button: FC<Props> = (props) => {
  const {
    testID,
    type = 'contained',
    color = 'primary',
    size = 'medium',
    disabled,
    href,
    loading = false,
    text,
    startElement,
    endElement,
    style,
    styles,
    activeOpacity = 0.6,
    onPress,
    touchableOpacityProps,
    textProps,
  } = props;

  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);
  const [layout, setLayout] = useState<LayoutRectangle>();

  const {theme} = useTheme();

  const disabledTextColor =
    disabled && type === 'contained' && !loading
      ? theme.text.contrastBasic
      : type !== 'contained'
      ? theme.bg.disabled
      : theme.bg.paper;

  const TextColor = ButtonTextColor({theme, type, color, disabled, href});

  const indicatorColor = props.indicatorColor ?? disabledTextColor;

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
            {
              width: layout?.width,
              height: layout?.height,
            },
            hovered && !disabled && compositeStyles.hovered,
            compositeStyles.disabledButton,
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
          onLayout={(e) => setLayout(e.nativeEvent.layout)}
          type={type}
          color={color}
          size={size}
          disabled={disabled}
          href={href}
        >
          <>
            {startElement}
            <ButtonText
              style={[
                compositeStyles.text,
                disabled && compositeStyles.disabledText,
              ]}
              {...textProps}
            >
              {text}
            </ButtonText>
            {endElement}
          </>
        </ButtonContainer>
      )}
    </TouchableOpacity>
  );
};
