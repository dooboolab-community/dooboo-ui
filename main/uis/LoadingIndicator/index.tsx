import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

import React from 'react';
import type {ReactElement} from 'react';
import {useTheme} from '@dooboo-ui/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number | 'small' | 'large';
  imgSource?: string | ImageSourcePropType;
  customElement?: ReactElement | (() => ReactElement);
}

export function LoadingIndicator(props: Props): ReactElement {
  const {
    containerStyle,
    customElement,
    style,
    size = 'large',
    color,
    imgSource,
  } = props;

  const {theme} = useTheme();

  const handleImgSize = (imgSize: number | string | undefined): ImageStyle => {
    if (imgSize === 'large') {
      return {
        width: 80,
        height: 80,
      };
    }

    if (imgSize === 'small') {
      return {
        width: 50,
        height: 50,
      };
    }

    if (!imgSize) {
      return {};
    }

    return {
      width: imgSize,
      height: imgSize,
    };
  };

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
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {customElement ? (
        typeof customElement === 'function' ? (
          customElement()
        ) : (
          customElement
        )
      ) : !imgSource ? (
        <ActivityIndicator
          style={style}
          size={size}
          color={color || theme.role.secondary}
        />
      ) : (
        <Image
          source={handleImgSourceType(imgSource)}
          style={handleImgSize(size)}
        />
      )}
    </View>
  );
}
