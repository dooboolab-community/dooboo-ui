import type {FC, ReactElement, ReactNode} from 'react';
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

type ButtonSizeType = 'small' | 'medium' | 'large';

export const ButtonStyles = ({
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
  size?: ButtonSizeType | number;
  disabled?: boolean;
  loading?: boolean;
}): {
  padding?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  buttonSize: number;
  iconColor?: string;
  iconSize?: number;
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
    buttonSize: size === 'large' ? 80 : size === 'medium' ? 50 : 32,
    iconColor,
    iconSize: size === 'large' ? 32 : size === 'medium' ? 24 : 16,
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
  loadingElement?: ReactElement;
  icon?: IconName;
  iconElement?: ReactElement;
  style?: StyleProp<Omit<ViewStyle, 'borderRadius' | 'padding'>>;
  styles?: Styles;
  onPress?: TouchableHighlightProps['onPress'];
  activeOpacity?: number;
  touchableHighlightProps?: Omit<TouchableHighlightProps, 'onPress' | 'style'>;
};

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
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
  } = props;

  const ref = useRef<TouchableHighlight>(null);
  const hovered = useHover(ref);

  const {theme} = useTheme();

  const {
    backgroundColor,
    borderColor,
    borderWidth,
    iconColor,
    iconSize,
    disabledBackgroundColor,
    disabledBorderColor,
  } = ButtonStyles({
    theme,
    type,
    color,
    size,
    loading,
    disabled,
  });

  const borderWidthStr = `${borderWidth}px`;

  const compositeStyles: Styles = {
    container: [
      css`
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        border-radius: 50%;
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

  const renderContainer = (children: ReactNode): ReactElement => {
    return (
      <View
        testID={loading ? 'loading-view' : 'button-container'}
        style={[
          css`
            padding: 4px;

            flex-direction: row;
            justify-content: center;
            align-items: center;
          `,
          compositeStyles.container,
          hovered && !disabled && compositeStyles.hovered,
          disabled && compositeStyles.disabled,
        ]}
      >
        {children}
      </View>
    );
  };

  const renderLoading = (): ReactElement =>
    loadingElement ?? (
      <LoadingIndicator size="small" color={theme.text.basic} />
    );

  const renderChild = (): ReactElement =>
    iconElement || (
      <Icon size={iconSize} color={iconColor} name={icon || 'QuestBoxFill'} />
    );

  return (
    <TouchableHighlight
      activeOpacity={activeOpacity}
      testID={testID}
      ref={Platform.select({
        web: ref,
        default: undefined,
      })}
      underlayColor={theme.role.underlay}
      onPress={onPress}
      delayPressIn={50}
      disabled={disabled || loading}
      style={[
        css`
          border-radius: 50%;
        `,
        style,
      ]}
      {...touchableHighlightProps}
    >
      {renderContainer(loading ? renderLoading() : renderChild())}
    </TouchableHighlight>
  );
};
