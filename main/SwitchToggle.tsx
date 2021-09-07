import {Animated, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {DoobooTheme, light} from './theme';
import {ReactElement, useEffect, useState} from 'react';

import {isEmptyObject} from './utils';
import styled from '@emotion/native';
import {withTheme} from '@emotion/react';

interface Styles {
  containerStyle?: ViewStyle;
  onElementContainerStyle?: StyleProp<ViewStyle>;
  offElementContainerStyle?: StyleProp<ViewStyle>;
  circleStyle?: ViewStyle;
  buttonStyle?: StyleProp<ViewStyle>;
  circleColorOff?: string;
  circleColorOn?: string;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
}

interface Props {
  testID?: string;
  isOn: boolean;
  theme?: DoobooTheme;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  duration?: number;
  onElement?: ReactElement;
  offElement?: ReactElement;
  onPress?: () => void;
}

// Typing limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202

const AnimatedContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

const defaultContainerStyle: ViewStyle = {
  width: 80,
  height: 40,
  borderRadius: 25,
  padding: 5,
};

const defaultCircleStyle: ViewStyle = {
  width: 32,
  height: 32,
  borderRadius: 16,
};

function Component(props: Props): React.ReactElement {
  const {
    testID,
    theme,
    isOn,
    style,
    styles,
    duration = 300,
    onElement,
    offElement,
    onPress,
  } = props;

  const isValidTheme = theme && !isEmptyObject(theme);

  const {primary, disabled, textContrast, placeholder} = isValidTheme
    ? theme
    : light;

  const {
    backgroundColorOn = primary,
    backgroundColorOff = disabled,
    circleColorOn = textContrast,
    circleColorOff = placeholder,
    containerStyle = defaultContainerStyle,
    circleStyle = defaultCircleStyle,
    buttonStyle,
    onElementContainerStyle,
    offElementContainerStyle,
  } = styles ?? {};

  const paddingLeft: number =
    (containerStyle.padding as number) ||
    (containerStyle.paddingLeft as number) ||
    0;

  const paddingRight: number =
    (containerStyle.padding as number) ||
    (containerStyle.paddingRight as number) ||
    0;

  const circlePosXStart = 0;

  const circlePosXEnd =
    ((containerStyle.width ?? defaultContainerStyle.width) as number) -
    ((circleStyle.width ?? defaultCircleStyle.width) as number) -
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
        circleStyle,
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
        buttonStyle,
      ]}
    />
  );

  const OnElement = (
    <Animated.View style={[{opacity: animXValue}, onElementContainerStyle]}>
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
        offElementContainerStyle,
      ]}>
      {offElement}
    </Animated.View>
  );

  return (
    <TouchableOpacity
      testID={testID}
      accessibilityRole="switch"
      style={style}
      onPress={onPress}
      activeOpacity={0.8}>
      <AnimatedContainer
        style={[
          containerStyle,
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
        ]}>
        {isOn ? OnElement : OffElement}
        {CircleButton}
      </AnimatedContainer>
    </TouchableOpacity>
  );
}

export const SwitchToggle = withTheme(Component);
