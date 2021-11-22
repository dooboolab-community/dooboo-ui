import React, {useMemo, useRef} from 'react';
import styled from '@emotion/native';
import Svg, {Circle} from 'react-native-svg';
import {Animated, TextStyle, ViewStyle} from 'react-native';

interface Props {
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  size?: number;
  radius?: number;
  color?: string;
  bgColor?: string;
  progress: number;
  strokeWidth?: number;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const AnimCircle = Animated.createAnimatedComponent(Circle);

const Text = styled.Text``;

const ProgressCircle: React.FC<Props> = ({
  color = '#00f',
  size = 70,
  radius = 30,
  style,
  progress,
  strokeWidth = 5,
}) => {
  const animValue = useRef(new Animated.Value(progress));

  const clampedValue = useMemo(() => {
    const value = Math.max(0, Math.min(progress, 1));

    animValue.current.stopAnimation(() => {
      if (value === 0) {
        animValue.current.setValue(0);
      } else {
        Animated.timing(animValue.current, {
          toValue: value,
          useNativeDriver: false,
          duration: 100,
        }).start();
      }
    });

    return value;
  }, [progress, animValue]);

  return (
    <Container style={[{width: size, height: size}, style?.container]}>
      <Svg
        style={{position: 'absolute'}}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <AnimCircle
          fill="transparent"
          cx={`${size / 2}`}
          cy={`${size / 2}`}
          originX={`${size / 2}`}
          originY={`${size / 2}`}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          rotation={-90}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={animValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2 * Math.PI * radius, 0],
          })}
        />
        <Circle
          fill="transparent"
          cx={`${size / 2}`}
          cy={`${size / 2}`}
          originX={`${size / 2}`}
          originY={`${size / 2}`}
          r={radius + strokeWidth / 2}
          strokeWidth={1}
          stroke={color}
        />
      </Svg>
      <Text style={style?.text}>{Math.floor(clampedValue * 100)}%</Text>
    </Container>
  );
};

export default {
  Circle: ProgressCircle,
};
