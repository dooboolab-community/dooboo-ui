import {
  Image,
  ImageProps,
  ImageRequireSource,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {
  ReactElement,
  isValidElement,
  useCallback,
  useEffect,
  useState,
} from 'react';

import ArtifactsLogoDark from '../__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from '../__assets__/artifacts_logo_l.png';
import {css} from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

type Styles = {
  image?: Omit<
    ImageStyle,
    'width' | 'height' | 'minHeight' | 'minWidth' | 'maxHeight' | 'maxWidth'
  >;
  loading?: ImageStyle;
  fallback?: ImageStyle;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  url: string | undefined;
  loadingSource?: ImageRequireSource | ReactElement;
  fallbackSource?: ImageRequireSource;
  imageProps?: Partial<ImageProps>;
  shouldFixImageRatio?: boolean;
}

const defaultImage = css({
  aspectRatio: 110 / 74,
  width: '50%',
  height: 'auto',
  maxHeight: '50%',
});

function NetworkImage(props: Props): ReactElement {
  const {theme, themeType} = useTheme();

  const logo = themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark;

  const {
    style,
    url,
    imageProps,
    fallbackSource = logo,
    shouldFixImageRatio = false,
  } = props;

  const {image, loading, fallback} = props.styles ?? {};
  const [imageRatio, setImageRatio] = useState(0);

  const [{needLoading, isValidSource}, setImageInfo] = useState({
    needLoading: !!url,
    isValidSource: !!url,
  });

  const loadingSource: ReactElement = isValidElement(props?.loadingSource) ? (
    props?.loadingSource
  ) : (
    <Image
      style={[defaultImage, loading]}
      source={props?.loadingSource ?? logo}
      resizeMethod="resize"
      resizeMode="cover"
    />
  );

  const renderImage = useCallback(
    () => (
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
    ),
    [image, imageProps, url, theme.paper],
  );

  const renderLoading = useCallback(
    () => (
      <Image
        style={[defaultImage, fallback]}
        source={fallbackSource}
        resizeMethod="resize"
        resizeMode="cover"
        {...imageProps}
      />
    ),
    [fallback, fallbackSource, imageProps],
  );

  useEffect(() => {
    if (!url) {
      return;
    }

    Image.getSize(
      url,
      (width, height) => {
        setImageInfo({needLoading: false, isValidSource: true});
        setImageRatio(width / height);
      },
      () => {
        setImageInfo({needLoading: false, isValidSource: false});
      },
    );
  }, [isValidSource, url, shouldFixImageRatio]);

  return (
    <View
      style={[
        shouldFixImageRatio && {aspectRatio: imageRatio},
        {justifyContent: 'center', alignItems: 'center'},
        style,
      ]}
    >
      {!needLoading && isValidSource && renderImage()}

      {!needLoading && !isValidSource && renderLoading()}

      {needLoading && loadingSource}
    </View>
  );
}

export {NetworkImage};
