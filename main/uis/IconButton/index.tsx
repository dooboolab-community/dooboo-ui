import type {ReactNode} from 'react';
import React, {useRef} from 'react';
import type {StyleProp, TouchableHighlightProps, ViewStyle} from 'react-native';
import {Platform, TouchableHighlight, View} from 'react-native';
import {useHover} from 'react-native-web-hooks';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';

import {getTheme} from '../../utils/utils';
import type {IconName} from '../Icon/';
import {Icon} from '../Icon/';
import {LoadingIndicator} from '../LoadingIndicator';

type Styles = {
  container?: StyleProp<ViewStyle>;
  icon?: StyleProp<ViewStyle>;
  disabled?: StyleProp<ViewStyle>;
  hovered?: StyleProp<ViewStyle>;
};

type ButtonType = 'text' | 'solid' | 'outlined';

type ButtonColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light';

type ButtonSizeType = 'small' | 'medium' | 'large' | number;

export const ButtonStyles = ({
  theme,
  type = 'solid',
  color = 'primary',
  loading,
  disabled,
}: {
  theme?: DoobooTheme;
  type?: ButtonType;
  color?: ButtonColorType;
  disabled?: boolean;
  loading?: boolean;
}): {
  padding?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  iconColor?: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
} => {
  theme = getTheme(theme);

  let backgroundColor = theme.button[color].bg;
  let borderColor = theme.button[color].bg;
  let iconColor = theme.button[color].bg;

  if (disabled) {
    backgroundColor = theme.button.disabled.bg;
    borderColor = theme.button.disabled.text;
    iconColor = theme.button.disabled.text;
  }

  if (['text', 'outlined'].includes(type)) {
    backgroundColor = theme.bg.basic;
  }

  if (type === 'solid' || color === 'light') {
    iconColor = theme.button[color].text;
  }

  return {
    backgroundColor,
    borderColor,
    borderWidth: type === 'outlined' ? 1 : 0,
    iconColor,
    disabledBackgroundColor:
      type === 'solid' && !loading ? theme.button.disabled.bg : theme.bg.basic,
    disabledBorderColor: theme.bg.disabled,
    disabledTextColor: theme.button.disabled.text,
  };
};

export type IconButtonProps = {
  testID?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType | number;
  disabled?: boolean;
  loading?: boolean;
  loadingElement?: JSX.Element;
  icon?: IconName;
  iconElement?: JSX.Element;
  style?: StyleProp<Omit<ViewStyle, 'borderRadius' | 'padding'>>;
  styles?: Styles;
  onPress?: TouchableHighlightProps['onPress'];
  activeOpacity?: number;
  touchableHighlightProps?: Omit<TouchableHighlightProps, 'onPress' | 'style'>;
};

export function IconButton({
  testID,
  type = 'solid',
  color = 'primary',
  size = 'medium',
  disabled,
  loading = false,
  loadingElement,
  icon,
  iconElement,
  style,
  styles,
  onPress,
  activeOpacity = 0.95,
  touchableHighlightProps,
}: IconButtonProps): JSX.Element {
  const ref = useRef<TouchableHighlight>(null);
  const hovered = useHover(ref);

  const {theme} = useTheme();

  const {
    backgroundColor,
    borderColor,
    borderWidth,
    iconColor,
    disabledBackgroundColor,
    disabledBorderColor,
  } = ButtonStyles({
    theme,
    type,
    color,
    loading,
    disabled,
  });

  const iconSize =
    size === 'large'
      ? 32
      : size === 'medium'
        ? 24
        : size === 'small'
          ? 16
          : size;
  const borderWidthStr = `${borderWidth}px`;
  const borderRadiusStr = `99px`;

  const compositeStyles: Styles = {
    container: [
      css`
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        border-width: ${borderWidthStr};
        padding: 12px;
      `,
      styles?.container,
    ],
    icon: [
      css`
        color: ${iconColor};
      `,
      styles?.icon,
    ],
    disabled: [
      css`
        background-color: ${disabledBackgroundColor};
        border-color: ${disabledBorderColor};
      `,
      styles?.disabled,
    ],
    hovered: [
      {
        shadowColor: theme.text.basic,
        shadowOpacity: 0.24,
        shadowRadius: 16,
        elevation: 10,
      },
      styles?.hovered,
    ],
  };

  const renderContainer = (children: ReactNode): JSX.Element => {
    return (
      <View
        style={[
          css`
            padding: 4px;
            border-radius: ${borderRadiusStr};

            flex-direction: row;
            justify-content: center;
            align-items: center;
          `,
          compositeStyles.container,
          hovered && !disabled && compositeStyles.hovered,
          disabled && compositeStyles.disabled,
        ]}
        testID={loading ? 'loading-view' : 'button-container'}
      >
        {children}
      </View>
    );
  };

  const renderLoading = (): JSX.Element =>
    loadingElement ?? (
      <LoadingIndicator color={theme.text.basic} size="small" />
    );

  const renderIcon = (): JSX.Element =>
    iconElement || (
      <Icon color={iconColor} name={icon || 'QuestBoxFill'} size={iconSize} />
    );

  return (
    <TouchableHighlight
      activeOpacity={activeOpacity}
      delayPressIn={50}
      disabled={disabled || loading}
      onPress={onPress}
      ref={Platform.select({
        web: ref,
        default: undefined,
      })}
      style={[
        css`
          width: ${iconSize + 24 + 'px'};
          height: ${iconSize + 24 + 'px'};
          border-radius: ${borderRadiusStr};
        `,
        style,
      ]}
      testID={testID}
      underlayColor={theme.role.underlay}
      {...touchableHighlightProps}
    >
      {renderContainer(loading ? renderLoading() : renderIcon())}
    </TouchableHighlight>
  );
}
