import {Animated, Easing} from 'react-native';
import type {ImageStyle, StyleProp} from 'react-native';
import React, {useEffect, useState} from 'react';

import type {FC} from 'react';
import {IC_MASK} from '../../../storybook/assets/icons';
import {StoryContainer} from '../../GlobalStyles';

type Props = {
  style?: StyleProp<ImageStyle>;
};

const LoadingIndicatorCustom: FC<Props> = ({style}) => {
  const [spinAnim] = useState(new Animated.Value(0));

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1600,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  });

  return (
    <StoryContainer>
      <Animated.Image
        style={[
          {
            opacity: 0.95,
            height: 56,
            width: 56,
            borderRadius: 28,
            transform: [{rotate: spin}],
          },
          style,
        ]}
        source={IC_MASK}
      />
    </StoryContainer>
  );
};

export default LoadingIndicatorCustom;
