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
  image?: ImageStyle;
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
  const {themeType} = useTheme();

  const logo = themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark;

  const {style, url, imageProps, fallbackSource = logo} = props;

  const {image} = props.styles ?? {};

  const loadingSource: ReactElement = isValidElement(props?.loadingSource) ? (
    props?.loadingSource
  ) : (
    <Image
      style={{aspectRatio: 110 / 74, position: 'absolute'}}
      source={props?.loadingSource ?? logo}
      resizeMethod="resize"
      resizeMode="cover"
    />
  );

  const [needLoading, setNeedLoading] = useState(!!url);
  const [isValidSource, setIsValidSource] = useState(!!url);

  useEffect(() => {
    if (url)
      Image.prefetch(url)
        .then(() => {
          setNeedLoading(false);
          setIsValidSource(true);
        })
        .catch(() => {
          setNeedLoading(false);
          setIsValidSource(false);
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
          style={image}
          source={{uri: url}}
          resizeMethod="resize"
          resizeMode="cover"
          {...imageProps}
        />
      )}

      {!needLoading && !isValidSource && (
        <Image
          style={[{aspectRatio: 110 / 74}, image]}
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
