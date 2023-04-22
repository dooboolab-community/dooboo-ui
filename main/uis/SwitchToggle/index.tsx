import type {ReactElement} from 'react';
import React, {useEffect, useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Animated, TouchableOpacity} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

type Styles = {
  container?: ViewStyle;
  onElementContainer?: StyleProp<ViewStyle>;
  offElementContainer?: StyleProp<ViewStyle>;
  circle?: ViewStyle;
  button?: StyleProp<ViewStyle>;
  circleColorOff?: string;
  circleColorOn?: string;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
};

type Props = {
  testID?: string;
  size?: 'small' | 'medium' | 'large';
  isOn: boolean;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  duration?: number;
  onElement?: any;
  offElement?: any;
  onPress?: () => void;
};

// Typing limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202

const AnimatedContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

const smallContainer: ViewStyle = {
  width: 40,
  height: 24,
  borderRadius: 25,
  padding: 5,
};

const smallCircle: ViewStyle = {
  width: 16,
  height: 16,
  borderRadius: 8,
};

const mediumContainer: ViewStyle = {
  width: 56,
  height: 30,
  borderRadius: 25,
  padding: 5,
};

const mediumCircle: ViewStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
};

const largeContainer: ViewStyle = {
  width: 80,
  height: 40,
  borderRadius: 25,
  padding: 5,
};

const largeCircle: ViewStyle = {
  width: 32,
  height: 32,
  borderRadius: 16,
};

export function SwitchToggle(props: Props): ReactElement {
  const {
    testID,
    isOn,
    style,
    styles,
    duration = 300,
    onElement,
    size = 'medium',
    offElement,
    onPress,
  } = props;

  const {theme} = useTheme();

  const {
    backgroundColorOn = theme.role.primary,
    backgroundColorOff = theme.bg.disabled,
    circleColorOn = theme.text.contrast,
    circleColorOff = theme.text.basic,
    container = size === 'large'
      ? largeContainer
      : size === 'small'
      ? smallContainer
      : mediumContainer,
    circle = size === 'large'
      ? largeCircle
      : size === 'small'
      ? smallCircle
      : mediumCircle,
    button,
    onElementContainer,
    offElementContainer,
  } = styles ?? {};

  const paddingLeft: number =
    (container.padding as number) || (container.paddingLeft as number) || 0;

  const paddingRight: number =
    (container.padding as number) || (container.paddingRight as number) || 0;

  const circlePosXStart = 0;

  const circlePosXEnd =
    ((container.width ?? mediumContainer.width) as number) -
    ((circle.width ?? mediumCircle.width) as number) -
    (paddingRight + paddingLeft);

  const [animXValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    const runAnimation = (): void => {
      const option = {
        fromValue: isOn ? 0 : 1,
        toValue: isOn ? 1 : 0,
        duration,
        useNativeDriver: false,
      };

      Animated.timing(animXValue, option).start();
    };

    runAnimation();
  }, [animXValue, isOn, duration]);

  const CircleButton = (
    <Animated.View
      style={[
        circle,
        {
          backgroundColor: animXValue.interpolate({
            inputRange: [0.5, 1],
            outputRange: [
              circleColorOff as string | number,
              circleColorOn as string | number,
            ] as string[] | number[],
          }),
        },
        {
          transform: [
            {
              translateX: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  circlePosXStart as string | number,
                  circlePosXEnd as string | number,
                ] as string[] | number[],
              }),
            },
          ],
        },
        button,
      ]}
    />
  );

  const OnElement = (
    <Animated.View style={[{opacity: animXValue}, onElementContainer]}>
      {onElement}
    </Animated.View>
  );

  const OffElement = (
    <Animated.View
      style={[
        {
          opacity: animXValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
        offElementContainer,
      ]}
    >
      {offElement}
    </Animated.View>
  );

  return (
    <TouchableOpacity
      testID={testID}
      accessibilityRole="switch"
      style={style}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AnimatedContainer
        style={[
          container,
          {
            paddingLeft,
            paddingRight,
          },
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                backgroundColorOff as string | number,
                backgroundColorOn as string | number,
              ] as string[] | number[],
            }),
          },
        ]}
      >
        {isOn ? OnElement : OffElement}
        {CircleButton}
      </AnimatedContainer>
    </TouchableOpacity>
  );
}
