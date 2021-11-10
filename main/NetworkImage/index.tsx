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
  useMemo,
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

function NetworkImage(props: Props): ReactElement {
  const {themeType} = useTheme();

  const logo = themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark;

  const {
    style,
    url,
    imageProps,
    fallbackSource = logo,
    shouldFixImageRatio = false,
  } = props;

  const defaultImageStyle = useMemo(
    () =>
      css({
        aspectRatio: 110 / 74,
        width: '50%',
        height: 'auto',
        maxHeight: '50%',
      }),
    [],
  );

  const {image, loading, fallback} = props.styles ?? {};
  const [imageRatio, setImageRatio] = useState(0);

  const [{needLoading, isValidSource}, setImageInfo] = useState({
    needLoading: !!url,
    isValidSource: false,
  });

  const renderLoading = useCallback(() => {
    return isValidElement(props?.loadingSource) ? (
      props?.loadingSource
    ) : (
      <Image
        style={[defaultImageStyle, loading]}
        source={props.loadingSource ?? logo}
        resizeMethod="resize"
        resizeMode="cover"
      />
    );
  }, [defaultImageStyle, loading, logo, props.loadingSource]);

  const renderFallback = useCallback(
    () => (
      <Image
        style={[defaultImageStyle, fallback]}
        source={fallbackSource}
        resizeMethod="resize"
        resizeMode="cover"
        {...imageProps}
      />
    ),
    [fallback, fallbackSource, imageProps, defaultImageStyle],
  );

  const renderImage = useCallback(
    () => (
      <Image
        key={url}
        style={[{flex: 1, alignSelf: 'stretch'}, image]}
        source={{uri: url, cache: 'force-cache'}}
        resizeMethod="resize"
        resizeMode="cover"
        {...imageProps}
      />
    ),
    [image, imageProps, url],
  );

  useEffect(() => {
    if (!url) {
      return;
    }

    let mounted = true;

    const preload = async (): Promise<void> => {
      if (mounted) {
        await Image.getSize(
          url,
          (width, height) => {
            if (shouldFixImageRatio) {
              setImageRatio(width / height);
            }

            setImageInfo({needLoading: false, isValidSource: true});
          },
          () => {
            return setImageInfo({needLoading: false, isValidSource: false});
          },
        );
      }
    };

    preload();

    return () => {
      mounted = false;
    };
  }, [isValidSource, url, shouldFixImageRatio, needLoading]);

  if (needLoading) {
    return (
      <View style={[{justifyContent: 'center', alignItems: 'center'}, style]}>
        {renderLoading()}
      </View>
    );
  }

  return (
    <View
      style={[
        {justifyContent: 'center', alignItems: 'center'},
        shouldFixImageRatio && {aspectRatio: imageRatio},
        style,
      ]}
    >
      {isValidSource ? renderImage() : renderFallback()}
    </View>
  );
}

export {NetworkImage};
