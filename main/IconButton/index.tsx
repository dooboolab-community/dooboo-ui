import type {FC, ReactElement, ReactNode} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import type {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';

import type {DoobooTheme} from '@dooboo-ui/theme';
import {Icon} from '../Icon/';
import type {IconName} from '../Icon/stories/Styles';
import {LoadingIndicator} from '../LoadingIndicator';
import {css} from '@emotion/native';
import {getTheme} from '../utils';
import {useHover} from 'react-native-web-hooks';
import {useTheme} from '@dooboo-ui/theme';

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
  size?: ButtonSizeType;
  disabled?: boolean;
  loading?: boolean;
}): {
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  buttonSize?: string;
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
    borderWidth: type === 'outlined' ? '1px' : undefined,
    buttonSize: size === 'large' ? '80px' : size === 'medium' ? '50px' : '32px',
    iconColor,
    iconSize: size === 'large' ? 32 : size === 'medium' ? 24 : 16,
    disabledBackgroundColor:
      type === 'solid' && !loading ? theme.button.disabled.bg : theme.bg.basic,
    disabledBorderColor: theme.bg.disabled,
    disabledTextColor: theme.button.disabled.text,
  };
};

export type Props = {
  testID?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  disabled?: boolean;
  loading?: boolean;
  loadingElement?: ReactElement;
  icon?: IconName;
  iconElement?: ReactElement;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  onPress?: TouchableOpacityProps['onPress'];
  activeOpacity?: TouchableOpacityProps['activeOpacity'];
  touchableOpacityProps?: Partial<TouchableOpacityProps>;
};

export const IconButton: FC<Props> = (props) => {
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
    activeOpacity = 0.6,
    onPress,
    touchableOpacityProps,
  } = props;

  const ref = useRef<TouchableOpacity>(null);
  const hovered = useHover(ref);

  const {theme} = useTheme();

  const {
    backgroundColor,
    borderColor,
    borderWidth,
    buttonSize,
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

  const compositeStyles: Styles = {
    container: css`
      background-color: ${backgroundColor};
      border-color: ${borderColor};
      border-radius: ${buttonSize};
      border-width: ${borderWidth};
      height: ${buttonSize};
      width: ${buttonSize};
    `,
    icon: css`
      color: ${iconColor};
    `,
    disabled: css`
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledBorderColor};
    `,
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

  const renderContainer = (children: ReactNode): ReactElement => {
    return (
      <View
        testID={loading ? 'loading-view' : 'button-container'}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          },
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
      <Icon
        size={iconSize}
        color={iconColor}
        name={icon || 'dooboolab-solid'}
      />
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
      {renderContainer(loading ? renderLoading() : renderChild())}
    </TouchableOpacity>
  );
};
