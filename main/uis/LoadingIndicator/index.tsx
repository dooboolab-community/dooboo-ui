import React from 'react';
import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ActivityIndicator, Image, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

type Styles = {
  activityIndicator?: ViewStyle;
  image?: ImageStyle;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  color?: string;
  size?: 'small' | 'large';
  imgSource?: string | ImageSourcePropType;
  customElement?: JSX.Element | (() => JSX.Element);
}

export function LoadingIndicator({
  customElement,
  style,
  styles,
  size = 'large',
  color,
  imgSource,
}: Props): JSX.Element {
  const {theme} = useTheme();

  const handleImgSourceType = (
    src: string | ImageSourcePropType,
  ): ImageSourcePropType => {
    if (typeof src === 'string') {
      return {
        uri: src,
      };
    }

    return src;
  };

  return (
    <View style={style}>
      {customElement ? (
        typeof customElement === 'function' ? (
          customElement()
        ) : (
          customElement
        )
      ) : !imgSource ? (
        <ActivityIndicator
          color={color || theme.role.secondary}
          size={size}
          style={styles?.activityIndicator}
        />
      ) : (
        <Image
          source={handleImgSourceType(imgSource)}
          style={[
            size === 'large'
              ? {width: 50, height: 50}
              : size === 'small'
              ? {width: 30, height: 30}
              : undefined,
            styles?.image,
          ]}
        />
      )}
    </View>
  );
}
