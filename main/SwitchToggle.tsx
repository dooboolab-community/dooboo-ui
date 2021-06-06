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
    theme = light,
    backgroundColorOn = theme.primary,
    backgroundColorOff = theme.disabled,
    circleColorOn = theme.textContrast,
    circleColorOff = theme.placeholder,
    duration = 300,
    backgroundImageOn,
    backgroundImageOff,
  } = props;

  const [animXValue] = useState(new Animated.Value(props.switchOn ? 1 : 0));

  const getStart = (): number | Record<string, unknown> | undefined => {
    return props.type === undefined
      ? 0
      : props.type === 0
      ? 0
      : props.containerStyle && props.containerStyle.padding
      ? (props.containerStyle.padding as number) * 2
      : {};
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runAnimation = (): void => {
    const animValue = {
      fromValue: props.switchOn ? 0 : 1,
      toValue: props.switchOn ? 1 : 0,
      duration,
      useNativeDriver: false,
    };

    Animated.timing(animXValue, animValue).start();
  };

  const endPos =
    props.containerStyle && props.circleStyle
      ? (props.containerStyle.width as number) -
        ((props.circleStyle.width as number) +
          ((props.containerStyle.padding as number) || 0) * 2)
      : 0;

  const circlePosXEnd = props.RTL ? -endPos : endPos;
  const [circlePosXStart] = useState(getStart());

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  useEffect(() => {
    prevSwitchOnRef.current = props.switchOn;

    if (prevSwitchOn !== props.switchOn) runAnimation();
  }, [prevSwitchOn, props.switchOn, runAnimation]);

  const generateRightText = (): React.ReactElement => {
    return (
      <Animated.View style={props.rightContainerStyle}>
        <Text style={props.textRightStyle}>{props.backTextRight}</Text>
      </Animated.View>
    );
  };

  const generateLeftText = (): React.ReactElement => {
    return (
      <Animated.View style={props.leftContainerStyle}>
        <Text style={props.textLeftStyle}>{props.backTextLeft}</Text>
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
    <TouchableOpacity
      testID={props.testID}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <AnimatedContainer
        style={[
          props.containerStyle,
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
        {props.switchOn && generateLeftIcon()}
        <Animated.View
          style={[
            props.circleStyle,
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
            props.buttonStyle,
          ]}>
          <Animated.View style={props.buttonContainerStyle}>
            <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
          </Animated.View>
        </Animated.View>
        {generateRightText()}
        {!props.switchOn && generateRightIcon()}
      </AnimatedContainer>
    </TouchableOpacity>
  );
}

Component.defaultProps = {
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
