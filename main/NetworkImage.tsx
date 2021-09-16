import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useCallback, useEffect, useState} from 'react';
import {LoadingIndicator} from './LoadingIndicator';
import {useTheme} from './theme';
import styled from '@emotion/native';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  image?: ImageStyle;
  activityIndicator?: ViewStyle;
};

interface Props {
  url: string;
  styles?: Styles;
  style?: StyleProp<ViewStyle>;
  loadingElement?: ReactElement;
  defaultElement?: ReactElement;
  imageProps?: Partial<ImageProps>;
  LoadingIndicatorProps?: Partial<ImageProps>;
}

type ImageSize = {
  width: number;
  height: number;
};

const defaultSource = {
  light: ArtifactsLogoLight,
  dark: ArtifactsLogoDark,
};

const DefaultImage = styled.Image`
  align-self: center;
  width: 110px;
  height: 74px;
  margin: 8%;
  aspect-ratio: ${() => 110 / 74};
`;

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

function NetworkImage(props: Props): ReactElement {
  const {themeType} = useTheme();

  const {image, activityIndicator} = props.styles ?? {};

  const {
    url,
    style,
    imageProps,
    loadingElement = <LoadingIndicator style={activityIndicator} />,
    defaultElement = (
      <DefaultImage source={defaultSource[themeType ?? 'dark']} />
    ),
  } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>();

  const [size, setSize] = useState<ImageSize | null>({
    width: 0,
    height: 0,
  });

  const getImageSize = useCallback(async (): Promise<void> => {
    try {
      const value = await fetchImageSize(url);

      setSize(value);
    } catch (e) {
      setSize(null);
    }
  }, [url]);

  useEffect(() => {
    getImageSize();
  }, [getImageSize]);

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Image
        style={[size, image]}
        resizeMethod="resize"
        resizeMode="cover"
        onLoadEnd={() => setIsLoaded(true)}
        source={{uri: url}}
        {...imageProps}
      />

      {!isLoaded && size !== null && loadingElement}

      {!size && defaultElement}
    </View>
  );
}

export {NetworkImage};
