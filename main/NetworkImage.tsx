import {
  Image,
  ImageProps,
  ImageRequireSource,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useEffect, useState, isValidElement} from 'react';
import {useTheme} from './theme';

import ArtifactsLogoDark from './__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from './__assets__/artifacts_logo_l.png';

type Styles = {
  image?: Omit<ImageStyle, 'width' | 'height'>;
  loading?: ImageStyle;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  url: string | undefined;
  loadingSource?: ImageRequireSource | ReactElement;
  fallbackSource?: ImageRequireSource;
  imageProps?: Partial<ImageProps>;
}

function NetworkImage(props: Props): ReactElement {
  const {theme, themeType} = useTheme();

  const logo = themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark;

  const {style, url, imageProps, fallbackSource = logo} = props;

  const {image, loading} = props.styles ?? {};

  const loadingSource: ReactElement = isValidElement(props?.loadingSource) ? (
    props?.loadingSource
  ) : (
    <Image
      style={[
        {
          aspectRatio: 110 / 74,
          position: 'absolute',
        },
        loading,
      ]}
      source={props?.loadingSource ?? logo}
      resizeMethod="resize"
      resizeMode="cover"
    />
  );

  const [{needLoading, isValidSource}, setImageInfo] = useState({
    needLoading: !!url,
    isValidSource: !!url,
  });

  useEffect(() => {
    if (url)
      Image.prefetch(url)
        .then(() => {
          setImageInfo({needLoading: false, isValidSource: true});
        })
        .catch(() => {
          setImageInfo({needLoading: false, isValidSource: false});
        });
  }, [url]);

  return (
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'stretch',

          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {!needLoading && isValidSource && (
        <Image
          style={[
            {flex: 1, alignSelf: 'stretch', backgroundColor: theme.paper},
            image,
          ]}
          source={{uri: url}}
          resizeMethod="resize"
          resizeMode="cover"
          {...imageProps}
        />
      )}

      {!needLoading && !isValidSource && (
        <Image
          style={[
            {flex: 1, alignSelf: 'stretch', aspectRatio: 110 / 74},
            image,
          ]}
          source={fallbackSource}
          resizeMethod="resize"
          resizeMode="cover"
          {...imageProps}
        />
      )}

      {needLoading && loadingSource}
    </View>
  );
}

export {NetworkImage};
