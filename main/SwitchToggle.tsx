import {
  Animated,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DoobooTheme, light} from './theme';
import React, {useEffect, useRef, useState} from 'react';

import styled from '@emotion/native';
import {withTheme} from '@emotion/react';

interface Props {
  testID?: string;
  theme?: DoobooTheme;
  switchOn: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  backgroundImageOn?: React.ReactElement;
  backgroundImageOff?: React.ReactElement;
  circleColorOff?: string;
  circleColorOn?: string;
  duration?: number;
  type?: number;
  buttonText?: string;
  backTextRight?: string;
  backTextLeft?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  textRightStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  // limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
  buttonContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  RTL?: boolean;
}

const AnimatedContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

function Component(props: Props): React.ReactElement {
  const {
    testID,
    type,
    switchOn,
    RTL,
    duration = 300,
    onPress,

    backgroundImageOn,
    backgroundImageOff,
    backgroundColorOn,
    backgroundColorOff,

    circleStyle,
    circleColorOn,
    circleColorOff,

    containerStyle,
    rightContainerStyle,
    leftContainerStyle,

    buttonText,
    buttonTextStyle,
    buttonContainerStyle,
    buttonStyle,

    textRightStyle,
    textLeftStyle,

    backTextRight,
    backTextLeft,
  } = props;

  const padding: number =
    (containerStyle?.padding as number) ||
    (containerStyle?.paddingLeft as number) ||
    0;

  const [animXValue] = useState(new Animated.Value(switchOn ? 1 : 0));

  const getStart = (): number | Record<string, unknown> | undefined => {
    if (!type) return 0;

    if (padding === 0) return {};

    return padding * 2;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runAnimation = (): void => {
    const animValue = {
      fromValue: switchOn ? 0 : 1,
      toValue: switchOn ? 1 : 0,
      duration,
      useNativeDriver: false,
    };

    Animated.timing(animXValue, animValue).start();
  };

  const endPos =
    containerStyle && circleStyle
      ? (containerStyle.width as number) -
        ((circleStyle.width as number) +
          ((containerStyle?.paddingRight as number) || padding || 0) * 2)
      : 0;

  const circlePosXEnd = RTL ? -endPos : endPos;
  const [circlePosXStart] = useState(getStart());

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  useEffect(() => {
    prevSwitchOnRef.current = switchOn;

    if (prevSwitchOn !== switchOn) runAnimation();
  }, [prevSwitchOn, switchOn, runAnimation]);

  const generateRightText = (): React.ReactElement => {
    return (
      <Animated.View style={rightContainerStyle}>
        <Text style={textRightStyle}>{backTextRight}</Text>
      </Animated.View>
    );
  };

  const generateLeftText = (): React.ReactElement => {
    return (
      <Animated.View style={leftContainerStyle}>
        <Text style={textLeftStyle}>{backTextLeft}</Text>
      </Animated.View>
    );
  };

  const generateLeftIcon = (): React.ReactElement => {
    return (
      <View style={{position: 'absolute', left: 5}}>{backgroundImageOn}</View>
    );
  };

  const generateRightIcon = (): React.ReactElement => {
    return (
      <View style={{position: 'absolute', right: 5}}>{backgroundImageOff}</View>
    );
  };

  return (
    <TouchableOpacity testID={testID} onPress={onPress} activeOpacity={0.8}>
      <AnimatedContainer
        style={[
          containerStyle,
          {
            paddingLeft: containerStyle?.paddingLeft || padding,
            paddingRight: containerStyle?.paddingRight || padding,
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
        {generateLeftText()}
        {switchOn && generateLeftIcon()}
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
          ]}>
          <Animated.View style={buttonContainerStyle}>
            <Text style={buttonTextStyle}>{buttonText}</Text>
          </Animated.View>
        </Animated.View>
        {generateRightText()}
        {!switchOn && generateRightIcon()}
      </AnimatedContainer>
    </TouchableOpacity>
  );
}

Component.defaultProps = {
  theme: light,
  backgroundColorOn: light.primary,
  backgroundColorOff: light.disabled,
  circleColorOn: light.textContrast,
  circleColorOff: light.placeholder,
  containerStyle: {
    marginTop: 16,
    width: 80,
    height: 40,
    borderRadius: 25,
    padding: 5,
  },
  circleStyle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
};

export const SwitchToggle = withTheme(Component);
