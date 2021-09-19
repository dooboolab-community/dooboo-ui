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

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  activityIndicator?: ViewStyle;
  image?: ImageStyle;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  url: string | undefined;
  defaultSource?: ImageSourcePropType;
  loadingElement?: ReactElement;
  imageProps?: Partial<ImageProps>;
  LoadingIndicatorProps?: Partial<ImageProps>;
}

type ImageSize = {
  width: number;
  height: number;
};

const fetchImageSize = (imageUrl: string): Promise<ImageSize> =>
  new Promise<ImageSize>((resolve, reject) =>
    Image.getSize(
      imageUrl,
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

function NetworkImage(props: Props): ReactElement {
  const {themeType} = useTheme();

  const {activityIndicator, image} = props.styles ?? {};

  const {
    style,
    imageProps,
    loadingElement = <LoadingIndicator style={activityIndicator} />,
    url,
    defaultSource = themeType === 'light'
      ? ArtifactsLogoLight
      : ArtifactsLogoDark,
  } = props;

  const [needLoading, setNeedLoading] = useState(true);
  const [isValidSource, setIsValidSource] = useState(true);

  const [size, setSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!url) setIsValidSource(false);
    else
      fetchImageSize(url)
        .then((value) => setSize(value))
        .catch(() => setIsValidSource(false));
  }, [url]);

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        size,
        style,
      ]}>
      <Image
        style={[
          isValidSource
            ? undefined
            : {
                alignSelf: 'center',
                width: 110,
                height: 74,
                margin: '8%',
                aspectRatio: 110 / 74,
              },
          style as ImageStyle,
          image,
        ]}
        resizeMethod="resize"
        resizeMode="cover"
        onLoad={() => setNeedLoading(false)}
        source={isValidSource ? {url} : defaultSource}
        {...imageProps}
      />

      {needLoading && loadingElement}
    </View>
  );
}

export {NetworkImage};
