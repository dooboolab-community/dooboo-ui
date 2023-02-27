import {Animated, Easing} from 'react-native';
import type {ImageStyle, StyleProp} from 'react-native';
// Caveat: Expo web needs React to be imported
import React, {useEffect, useState} from 'react';

import {IC_MASK} from '../../../assets/icons';
import {LoadingIndicator} from '../../../main';
import type {ReactElement} from 'react';
import {StoryContainer} from '../../GlobalStyles';

type Props = {
  style?: StyleProp<ImageStyle>;
};

function LoadingIndicatorCustomStory({style}: Props): ReactElement {
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
      <LoadingIndicator
        customElement={
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
        }
      />
    </StoryContainer>
  );
}

export default LoadingIndicatorCustomStory;
