import React, {useCallback, useRef} from 'react';
import type {
  Insets,
  StyleProp,
  TextStyle,
  TouchableHighlightProps,
  ViewStyle,
} from 'react-native';
import {Platform, Text, TouchableHighlight, View} from 'react-native';
import {useHover} from 'react-native-web-hooks';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import {cloneElemWithDefaultColors} from '../../utils/guards';
import {getTheme as getThemeVars} from '../../utils/utils';
import {LoadingIndicator} from '../LoadingIndicator';

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
  type,
  color,
  size,
  loading,
  disabled,
}: {
  theme?: DoobooTheme;
  type: ButtonType;
  color: ButtonColorType;
  size: ButtonSizeType;
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
  theme = getThemeVars(theme);

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
      type === 'text'
        ? '8px'
        : size === 'large'
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

type ButtonContainerStyleProps = {
  type: ButtonType;
  size?: ButtonSizeType;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const ButtonContainer = styled.View<ButtonContainerStyleProps>`
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
  loadingColor?: string;
  loadingElement?: JSX.Element;
  text?: string | JSX.Element;
  borderRadius?: number;
  startElement?: JSX.Element;
  endElement?: JSX.Element;
  style?: StyleProp<Omit<ViewStyle, 'borderRadius' | 'padding'>>;
  styles?: Styles;
  onPress?: TouchableHighlightProps['onPress'];
  activeOpacity?: TouchableHighlightProps['activeOpacity'];
  touchableHighlightProps?: Omit<
    TouchableHighlightProps,
    'onPress' | 'activeOpacity' | 'style'
  >;
  hitSlop?: null | Insets | number | undefined;
};

export function Button({
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
  activeOpacity = 0.8,
  touchableHighlightProps,
  borderRadius = 4,
  loadingColor,
  hitSlop = {top: 8, bottom: 8, left: 8, right: 8},
}: Props): JSX.Element {
  const ref = useRef<TouchableHighlight>(null);
  const hovered = useHover(ref);
  const {theme} = useTheme();
  const innerDisabled = disabled || !onPress;

  const {
    padding,
    backgroundColor,
    borderColor,
    borderWidth,
    textColor,
    disabledBackgroundColor,
    disabledBorderColor,
    disabledTextColor,
  } = ButtonStyles({
    theme,
    type,
    color,
    size,
    loading,
    disabled: innerDisabled,
  });

  const compositeStyles: Styles = {
    container: [
      css`
        border-radius: ${borderRadius + 'px'};
        padding: ${padding};
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        border-width: ${borderWidth};
      `,
      styles?.container,
    ],
    text: [
      css`
        font-family: 'Pretendard';
        color: ${textColor};
      `,
      styles?.text,
    ],
    disabled: [
      css`
        background-color: ${disabledBackgroundColor};
        border-color: ${disabledBorderColor};
      `,
      styles?.disabled,
    ],
    disabledText: [
      css`
        color: ${disabledTextColor};
      `,
      styles?.disabledText,
    ],
    hovered: [
      {
        shadowColor: 'black',
        shadowOpacity: 0.24,
        shadowRadius: 16,
        elevation: 10,
      },
      styles?.hovered,
    ],
  };

  const renderContainer = useCallback(
    ({
      children,
      loadingView,
    }: {
      children: JSX.Element;
      loadingView: JSX.Element;
    }): JSX.Element => {
      return (
        <ButtonContainer
          disabled={innerDisabled}
          size={size}
          style={[
            compositeStyles.container,
            hovered && !innerDisabled && compositeStyles.hovered,
            innerDisabled && compositeStyles.disabled,
            type === 'text' &&
              css`
                background-color: transparent;
              `,
          ]}
          testID={loading ? 'loading-view' : 'button-container'}
          type={type}
        >
          <View
            style={css`
              flex-direction: row;
              align-items: center;
              opacity: ${loading ? '0' : '1'};
            `}
          >
            {children}
          </View>
          <View
            style={css`
              position: absolute;
              opacity: ${loading ? '1' : '0'};
            `}
          >
            {loadingView}
          </View>
        </ButtonContainer>
      );
    },
    [
      loading,
      compositeStyles.container,
      compositeStyles.hovered,
      compositeStyles.disabled,
      hovered,
      innerDisabled,
      type,
      size,
    ],
  );

  const LoadingView = loadingElement ?? (
    <LoadingIndicator
      color={
        loadingColor || type === 'solid'
          ? theme.text.contrast
          : theme.text.basic
      }
      size="small"
    />
  );

  const ChildView = (
    <>
      {cloneElemWithDefaultColors({
        element: startElement,
        backgroundColor: backgroundColor,
        color: textColor,
      })}
      {!text || typeof text === 'string' ? (
        <Text
          style={[
            css`
              text-align: left;
            `,
            compositeStyles.text,
            innerDisabled && compositeStyles.disabledText,
          ]}
        >
          {text}
        </Text>
      ) : (
        text
      )}
      {cloneElemWithDefaultColors({
        element: endElement,
        backgroundColor: backgroundColor,
        color: textColor,
      })}
    </>
  );

  return (
    <TouchableHighlight
      activeOpacity={activeOpacity}
      delayPressIn={30}
      disabled={innerDisabled || loading || !onPress}
      hitSlop={hitSlop}
      onPress={onPress}
      ref={Platform.select({
        web: ref,
        default: undefined,
      })}
      style={[
        style,
        css`
          border-radius: ${borderRadius + 'px'};
        `,
      ]}
      testID={testID}
      underlayColor={type === 'text' ? 'transparent' : theme.role.underlay}
      {...touchableHighlightProps}
    >
      {renderContainer({
        children: ChildView,
        loadingView: LoadingView,
      })}
    </TouchableHighlight>
  );
}
