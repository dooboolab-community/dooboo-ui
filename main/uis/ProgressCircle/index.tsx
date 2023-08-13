import React, {useMemo, useRef, useState} from 'react';
import type {TextStyle, ViewStyle} from 'react-native';
import {Animated} from 'react-native';
import Svg, {Circle as SvgCircle} from 'react-native-svg';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import type {ButtonColorType} from '../Button';

type DoobooThemeContext = {theme: DoobooTheme};
type Props = {
  baseStrokeWidth?: number;
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
  color?: ButtonColorType;
  progress: number;
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const AnimCircle = Animated.createAnimatedComponent(SvgCircle);

const Text = styled.Text``;

export function ProgressCircle({
  baseStrokeWidth = 0.3,
  style,
  styles,
  progress,
  color = 'info',
}: Props): JSX.Element {
  const {
    radius = 30,
    strokeWidth = 5,
    color: circleColor,
  } = styles?.circle || {};
  const {theme} = useTheme() as unknown as DoobooThemeContext;
  // @ts-ignore
  const strokeColor = circleColor || theme.role[color];
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
        <SvgCircle
          fill="transparent"
          r={radius + strokeWidth / 2}
          strokeWidth={baseStrokeWidth}
          stroke={strokeColor}
          {...circleProps}
        />
      </Svg>
      <Text style={[styles?.text, {color: strokeColor}]}>
        {Math.floor(clampedValue * 100)}%
      </Text>
    </Container>
  );
}
