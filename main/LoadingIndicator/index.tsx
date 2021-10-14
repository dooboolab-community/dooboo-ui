import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useTheme} from '../theme';
import React, {ReactElement} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
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
  renderCustomElement?: () => ReactElement;
}

export function LoadingIndicator(props: Props): ReactElement {
  const {
    containerStyle,
    renderCustomElement,
    style,
    size = 'large',
    color,
    imgSource,
  } = props;

  const {theme} = useTheme();

  const handleImgSize = (imgSize: number | string | undefined): ImageStyle => {
    if (imgSize === 'large')
      return {
        width: 80,
        height: 80,
      };

    if (imgSize === 'small')
      return {
        width: 50,
        height: 50,
      };

    if (!imgSize) return {};

    return {
      width: imgSize,
      height: imgSize,
    };
  };

  const handleImgSourceType = (
    src: string | ImageSourcePropType,
  ): ImageSourcePropType => {
    if (typeof src === 'string')
      return {
        uri: src,
      };

    return src;
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {renderCustomElement ? (
        renderCustomElement()
      ) : !imgSource ? (
        <ActivityIndicator
          style={style}
          size={size}
          color={color || theme.secondary}
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
