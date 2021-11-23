import React, {useMemo, useRef} from 'react';
import styled from '@emotion/native';
import Svg, {Circle} from 'react-native-svg';
import {Animated, TextStyle, ViewStyle} from 'react-native';
import {useTheme, DoobooTheme, withTheme} from '@dooboo-ui/theme';

type DoobooThemeContext = {theme: DoobooTheme};
type ProgressType = 'success' | 'danger' | 'warning' | 'info';
interface Props {
  styles?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  style?: ViewStyle;
  size?: number;
  radius?: number;
  color?: string;
  type?: ProgressType;
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
  color,
  size = 70,
  radius = 30,
  style,
  styles,
  progress,
  type = 'info',
  strokeWidth = 5,
}) => {
  const {theme} = useTheme() as unknown as DoobooThemeContext;
  const strokeColor = color ?? theme[type];
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
    <Container style={[{width: size, height: size}, style, styles?.container]}>
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
          stroke={strokeColor}
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
          stroke={strokeColor}
        />
      </Svg>
      <Text style={[styles?.text, {color: strokeColor}]}>
        {Math.floor(clampedValue * 100)}%
      </Text>
    </Container>
  );
};

export default {
  Circle: withTheme(ProgressCircle),
};
