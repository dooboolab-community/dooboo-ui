import {DoobooTheme, light, useTheme} from './theme';
import {
  Image,
  ImageProps,
  ImageStyle,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useCallback, useEffect, useState} from 'react';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';
import styled from '@emotion/native';

type Styles = {
  image?: StyleProp<ImageStyle>;
};

interface Props {
  url: string;
  styles?: Styles;
  style?: StyleProp<ViewStyle>;
  loadingElement?: () => ReactElement;
  theme: DoobooTheme;
  imageProps?: Partial<ImageProps>;
}

type ImageSize = {
  width: number;
  height: number;
};

const Container = styled.View<{imageSize?: ImageSize}>`
  background-color: ${({theme, imageSize}) => !imageSize && theme.paper};

  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  align-self: center;
`;

const getOriginalImageSize = async (imageUri: string): Promise<ImageSize> =>
  new Promise<ImageSize>((resolve, reject) =>
    Image.getSize(
      imageUri,
      (width: number, height: number) =>
        resolve({
          width,
          height,
        }),
      reject,
    ),
  );

function NetworkImage({
  url,
  style,
  styles,
  imageProps,
  loadingElement,
}: Props): ReactElement {
  const [imageSize, setImageSize] = useState<ImageSize>();
  const {themeType} = useTheme();

  const getImageSize = useCallback(async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const imageSize = await getOriginalImageSize(url);

    setImageSize(imageSize);
  }, [url]);

  useEffect(() => {
    getImageSize();
  }, [getImageSize, styles?.image]);

  return (
    <Container
      imageSize={imageSize}
      style={[
        {
          width: (styles?.image as ImageStyle)?.width,
          height: (styles?.image as ImageStyle)?.height,
        },
        style,
      ]}>
      {!imageSize ? (
        loadingElement ? (
          loadingElement
        ) : (
          <StyledImage
            style={{
              width: Platform.select({web: 111}),
              height: Platform.select({web: 74}),
              margin: '8%',
              aspectRatio: 110 / 74,
            }}
            source={
              themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark
            }
          />
        )
      ) : (
        <StyledImage
          style={[
            {width: imageSize?.width, height: imageSize?.height},
            styles?.image,
          ]}
          resizeMethod="resize"
          resizeMode="cover"
          {...imageProps}
          source={{uri: url}}
        />
      )}
    </Container>
  );
}

NetworkImage.defaultProps = {
  theme: light,
};

export {NetworkImage};
