import {Animated, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import React, {ReactElement, useEffect, useState} from 'react';

import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

interface Styles {
  container?: ViewStyle;
  onElementContainer?: StyleProp<ViewStyle>;
  offElementContainer?: StyleProp<ViewStyle>;
  circle?: ViewStyle;
  button?: StyleProp<ViewStyle>;
  circleColorOff?: string;
  circleColorOn?: string;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
}

interface Props {
  testID?: string;
  isOn: boolean;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  duration?: number;
  onElement?: any;
  offElement?: any;
  onPress?: () => void;
}

// Typing limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202

const AnimatedContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

const defaultContainer: ViewStyle = {
  width: 80,
  height: 40,
  borderRadius: 25,
  padding: 5,
};

const defaultCircle: ViewStyle = {
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
    offElement,
    onPress,
  } = props;

  const {
    theme: {primary, disabled, textContrast, placeholder},
  } = useTheme();

  const {
    backgroundColorOn = primary,
    backgroundColorOff = disabled,
    circleColorOn = textContrast,
    circleColorOff = placeholder,
    container = defaultContainer,
    circle = defaultCircle,
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
    ((container.width ?? defaultContainer.width) as number) -
    ((circle.width ?? defaultCircle.width) as number) -
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
