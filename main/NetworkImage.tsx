import {useTheme} from './theme';
import {
  Image,
  ImageProps,
  ImageStyle,
  Platform,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useCallback, useEffect, useState} from 'react';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  image?: StyleProp<ImageStyle>;
};

interface Props {
  url: string;
  styles?: Styles;
  style?: StyleProp<ViewStyle>;
  loadingElement?: ReactElement;
  imageProps?: Partial<ImageProps>;
}

type ImageSize = {
  width: number;
  height: number;
};

const fetchImageSize = async (imageUri: string): Promise<ImageSize> =>
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

const defaultImage = {
  light: ArtifactsLogoLight,
  dark: ArtifactsLogoDark,
};

function NetworkImage({
  url,
  style,
  styles,
  imageProps,
  loadingElement,
}: Props): ReactElement {
  const [imageSize, setImageSize] = useState<ImageSize | null>(null);

  const getImageSize = useCallback(async (): Promise<void> => {
    try {
      const value = await fetchImageSize(url);

      setImageSize(value);
    } catch (e) {
      setImageSize(null);
    }
  }, [url]);

  useEffect(() => {
    getImageSize();
  }, [getImageSize]);

  const {theme, themeType} = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: imageSize ? theme.paper : undefined,
          justifyContent: 'center',
          alignItems: 'center',
          width: (styles?.image as ImageStyle)?.width,
          height: (styles?.image as ImageStyle)?.height,
        },
        style,
      ]}>
      {imageSize ? (
        <Image
          style={[
            {
              alignSelf: 'center',
              width: imageSize?.width,
              height: imageSize?.height,
            },
            styles?.image,
          ]}
          resizeMethod="resize"
          resizeMode="cover"
          {...imageProps}
          source={{uri: url}}
        />
      ) : (
        loadingElement ?? (
          <Image
            style={{
              alignSelf: 'center',
              width: Platform.select({web: 111, ios: 56, android: 56}),
              height: Platform.select({web: 74, ios: 37, android: 56}),
              margin: '8%',
              aspectRatio: 110 / 74,
            }}
            source={defaultImage[themeType ?? 'dark']}
          />
        )
      )}
    </View>
  );
}

export {NetworkImage};
