import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useLayoutEffect, useState} from 'react';
import {LoadingIndicator} from './LoadingIndicator';
import {useTheme} from './theme';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  activityIndicator?: ViewStyle;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  source: ImageSourcePropType | undefined;
  defaultSource?: ImageSourcePropType;
  loadingElement?: ReactElement;
  imageProps?: Partial<ImageProps>;
  LoadingIndicatorProps?: Partial<ImageProps>;
}

type ImageSize = {
  width: number;
  height: number;
};

function NetworkImage(props: Props): ReactElement {
  const {themeType} = useTheme();

  const {activityIndicator} = props.styles ?? {};

  const {
    style,
    imageProps,
    loadingElement = <LoadingIndicator style={activityIndicator} />,
    source,
    defaultSource = themeType === 'light'
      ? ArtifactsLogoLight
      : ArtifactsLogoDark,
  } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>();

  const [size, setSize] = useState<ImageSize | undefined>({
    width: 0,
    height: 0,
  });

  const isURISource = (node?: ImageSourcePropType): node is ImageURISource =>
    node !== undefined && !!(node as ImageURISource)?.uri;

  useLayoutEffect(() => {
    if (isURISource(source)) {
      const fetchImageSize = (imageUri: string): Promise<ImageSize> =>
        new Promise<ImageSize>((resolve, reject) =>
          Image.getSize(
            imageUri,
            (width: number, height: number) =>
              resolve({
                width,
                height,
              }),
            (error) => {
              reject(error);
            },
          ),
        );

      fetchImageSize(source.uri!)
        .then((value) => setSize(value))
        .catch(() => setSize(undefined));
    }
  }, [source]);

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        {width: 0, height: 0},
        style,
      ]}>
      <Image
        style={[
          size ?? {
            alignSelf: 'center',
            width: 110,
            height: 74,
            margin: '8%',
            aspectRatio: 110 / 74,
          },
          style as ImageStyle,
        ]}
        resizeMethod="resize"
        resizeMode="cover"
        onLoadEnd={() => setIsLoaded(true)}
        source={size ? source : defaultSource}
        {...imageProps}
      />

      {!isLoaded && size && loadingElement}
    </View>
  );
}

export {NetworkImage};
