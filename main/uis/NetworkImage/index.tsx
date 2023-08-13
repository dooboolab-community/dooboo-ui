import React, {isValidElement, useCallback, useEffect, useState} from 'react';
import type {
  ImageProps,
  ImageRequireSource,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Image} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import PlaceholderDark from '../../__assets__/placeholder_dark.png';
import PlaceholderLight from '../../__assets__/placeholder_light.png';

const Container = styled.View`
  background-color: ${({theme}) => theme.bg.paper};
  justify-content: center;
  align-items: center;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  url: string | undefined;
  loadingSource?: ImageRequireSource | JSX.Element;
  imageProps?: Partial<ImageProps>;
  shouldFixImageRatio?: boolean;
}

function NetworkImage(props: Props): JSX.Element {
  const {themeType} = useTheme();
  const logo = themeType === 'light' ? PlaceholderLight : PlaceholderDark;
  const {style, url, imageProps = false} = props;
  const [isValidSource, setIsValidSource] = useState(true);

  const [loading, setLoading] = useState(true);

  const renderFallback = useCallback(() => {
    return isValidElement(props?.loadingSource) ? (
      props?.loadingSource
    ) : (
      <Image
        source={props.loadingSource ?? logo}
        resizeMethod="resize"
        resizeMode="cover"
      />
    );
  }, [logo, props.loadingSource]);

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
          () => {
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
  }, [url, loading, isValidSource]);

  if (loading || !isValidSource) {
    return <Container style={style}>{renderFallback()}</Container>;
  }

  return (
    <Container style={[{overflow: 'hidden'}, style]}>{renderImage()}</Container>
  );
}

export {NetworkImage};
