import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useLayoutEffect, useState} from 'react';
import {LoadingIndicator} from './LoadingIndicator';
import {useTheme} from './theme';
import styled from '@emotion/native';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  activityIndicator?: ViewStyle;
};

interface Props {
  url?: string | undefined;
  styles?: Styles;
  style?: StyleProp<ViewStyle>;
  loadingElement?: ReactElement;
  defaultSource?: ImageSourcePropType;
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
    url = 'empty',
    style,
    imageProps,
    loadingElement = <LoadingIndicator style={activityIndicator} />,
    defaultSource = themeType === 'light'
      ? ArtifactsLogoLight
      : ArtifactsLogoDark,
  } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>();

  const [size, setSize] = useState<ImageSize | undefined>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
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

    fetchImageSize(url)
      .then((value) => setSize(value))
      .catch(() => setSize(undefined));
  }, [url]);

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
        source={size ? {uri: url} : defaultSource}
        {...imageProps}
      />

      {!isLoaded && size && loadingElement}
    </View>
  );
}

export {NetworkImage};
