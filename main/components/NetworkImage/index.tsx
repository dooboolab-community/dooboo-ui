import {Image, View} from 'react-native';
import type {
  ImageProps,
  ImageRequireSource,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import ArtifactsLogoDark from '../__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from '../__assets__/artifacts_logo_l.png';
import type {ReactElement} from 'react';
import {css} from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  url: string | undefined;
  loadingSource?: ImageRequireSource | ReactElement;
  imageProps?: Partial<ImageProps>;
  shouldFixImageRatio?: boolean;
}

function NetworkImage(props: Props): ReactElement {
  const {themeType} = useTheme();
  const logo = themeType === 'light' ? ArtifactsLogoLight : ArtifactsLogoDark;
  const {style, url, imageProps, shouldFixImageRatio = false} = props;
  const [isValidSource, setIsValidSource] = useState(true);

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

  const [imageRatio, setImageRatio] = useState(0);
  const [loading, setLoading] = useState(true);

  const renderFallback = useCallback(() => {
    return isValidElement(props?.loadingSource) ? (
      props?.loadingSource
    ) : (
      <Image
        style={[defaultImageStyle]}
        source={props.loadingSource ?? logo}
        resizeMethod="resize"
        resizeMode="cover"
      />
    );
  }, [defaultImageStyle, logo, props.loadingSource]);

  const renderImage = useCallback(
    () => (
      <Image
        key={url}
        style={[{flex: 1, alignSelf: 'stretch'}]}
        source={{uri: url}}
        resizeMethod="resize"
        resizeMode="cover"
        {...imageProps}
      />
    ),
    [imageProps, url],
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

            setLoading(false);
          },
          () => {
            setIsValidSource(false);
            setLoading(false);
          },
        );
      }
    };

    if (loading && isValidSource) {
      preload();
    }

    return () => {
      mounted = false;
    };
  }, [url, shouldFixImageRatio, loading, isValidSource]);

  if (loading || !isValidSource) {
    return (
      <View style={[{justifyContent: 'center', alignItems: 'center'}, style]}>
        {renderFallback()}
      </View>
    );
  }

  return (
    <View
      style={[
        {justifyContent: 'center', alignItems: 'center', overflow: 'hidden'},
        shouldFixImageRatio && {aspectRatio: imageRatio || 110 / 74},
        style,
      ]}
    >
      {renderImage()}
    </View>
  );
}

export {NetworkImage};
