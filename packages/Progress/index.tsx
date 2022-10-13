import React, {useMemo, useRef, useState} from 'react';
import Svg, {Circle as RNSvgSircle} from 'react-native-svg';
import type {TextStyle, ViewStyle} from 'react-native';
import {useTheme, withTheme} from '@dooboo-ui/theme';

import {Animated} from 'react-native';
import type {DoobooTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

type DoobooThemeContext = {theme: DoobooTheme};
type ProgressType = 'success' | 'danger' | 'warning' | 'info';
interface Props {
  styles?: {
    container?: ViewStyle;
    text?: TextStyle;
    circle?: {
      radius?: number;
      color?: string;
      strokeWidth?: number;
    };
  };
  style?: ViewStyle;
  type?: ProgressType;
  progress: number;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const AnimCircle = Animated.createAnimatedComponent(RNSvgSircle);

const Text = styled.Text``;

const ProgressCircleComponent: React.FC<Props> = ({
  style,
  styles,
  progress,
  type = 'info',
}) => {
  const {color, radius = 30, strokeWidth = 5} = styles?.circle || {};
  const {theme} = useTheme() as unknown as DoobooThemeContext;
  const strokeColor = color ?? theme.role[type];
  const animValue = useRef(new Animated.Value(progress));

  const [containerLayout, setContainerLayout] = useState({
    width: 70,
    height: 70,
  });

  const circleProps = useMemo(() => {
    const x = containerLayout.width / 2;
    const y = containerLayout.height / 2;

    return {
      cx: x,
      cy: y,
      originX: x,
      originY: y,
    };
  }, [containerLayout]);

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
    <Container
      onLayout={(e) => {
        const {height, width} = e.nativeEvent.layout;
        setContainerLayout({width, height});
      }}
      style={[containerLayout, style, styles?.container]}
    >
      <Svg
        style={{position: 'absolute'}}
        width={containerLayout.width}
        height={containerLayout.height}
        viewBox={`0 0 ${containerLayout.width} ${containerLayout.height}`}
      >
        <AnimCircle
          // @ts-ignore => PR given https://github.com/react-native-svg/react-native-svg/pull/1822
          fill="transparent"
          r={radius}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          rotation={-90}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={animValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2 * Math.PI * radius, 0],
          })}
          {...circleProps}
        />
        <RNSvgSircle
          fill="transparent"
          r={radius + strokeWidth / 2}
          strokeWidth={1}
          stroke={strokeColor}
          {...circleProps}
        />
      </Svg>
      <Text style={[styles?.text, {color: strokeColor}]}>
        {Math.floor(clampedValue * 100)}%
      </Text>
    </Container>
  );
};

export const ProgressCircle = withTheme(ProgressCircleComponent);

export default {
  Circle: ProgressCircle,
};
