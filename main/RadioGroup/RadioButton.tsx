import type {
  LayoutRectangle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Animated, Platform, View} from 'react-native';
import {
  ColoredText,
  RadioButtonWrapper,
  RadioWrapper,
} from '../Styled/StyledComponents';
import type {FC} from 'react';
import React, {useEffect, useRef, useState} from 'react';

import styled from '@emotion/native';

type Styles = {
  radio?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
};

export type RadioButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type RadioButtonProps = {
  testID?: string;
  onPress?: () => void;
  label?: string;
  labelPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  type?: RadioButtonType;
  disabled?: boolean;
  selected?: boolean;
  endElement?: React.ReactElement;
  startElement?: React.ReactElement;
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledRadioButton = styled(RadioButtonWrapper)<{
  selected?: boolean;
  disabled?: boolean;
  type?: RadioButtonType;
}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
  margin: 0 6px;

  justify-content: center;
  align-items: center;
`;

const StyledRadioCircle = styled(RadioWrapper)<{
  selected?: boolean;
  disabled?: boolean;
  innerLayout?: LayoutRectangle;
}>`
  flex: 1;
  align-self: stretch;

  margin: ${({innerLayout}) => innerLayout && '2px'};
  border-radius: ${({innerLayout}) =>
    innerLayout && `${innerLayout.width / 2}px`};
`;

export const RadioButton: FC<RadioButtonProps> = ({
  testID,
  style,
  styles,
  endElement,
  startElement,
  type = 'primary',
  disabled = false,
  selected,
  onPress,
  label,
  labelPosition = 'right',
}) => {
  const [innerLayout, setInnerLayout] = useState<LayoutRectangle>();
  const animatedValue = new Animated.Value(0);
  const fadeAnim = useRef(animatedValue).current;
  const scaleAnim = useRef(animatedValue).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(fadeAnim, {
        toValue: !selected ? 0 : 1,
        useNativeDriver: Platform.select({
          web: false,
          default: true,
        }),
      }),
      Animated.spring(scaleAnim, {
        toValue: !selected ? 0 : 1,
        useNativeDriver: Platform.select({
          web: false,
          default: true,
        }),
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, selected]);

  return (
    <Container
      testID={testID}
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View
        style={{
          paddingVertical: 6,
          paddingLeft:
            startElement || (label && labelPosition === 'left') ? 8 : 0,
          paddingRight:
            endElement || (label && labelPosition === 'right') ? 8 : 0,

          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <>
          {startElement}
          {label && labelPosition === 'left' ? (
            <ColoredText
              type={type}
              selected={!!selected}
              disabled={!!disabled}
              style={styles?.label}
            >
              {label}
            </ColoredText>
          ) : null}
          <StyledRadioButton
            style={styles?.radio}
            selected={!!selected}
            type={type}
            disabled={disabled}
          >
            <StyledRadioCircle
              testID={`circle-${testID}`}
              type={type}
              selected={!!selected}
              disabled={!!disabled}
              innerLayout={innerLayout}
              onLayout={(e) => setInnerLayout(e.nativeEvent.layout)}
              style={{
                opacity: fadeAnim,
                transform: [{scale: scaleAnim}],
              }}
            />
          </StyledRadioButton>
          {label && labelPosition === 'right' ? (
            <ColoredText
              type={type}
              selected={!!selected}
              disabled={!!disabled}
              style={styles?.label}
            >
              {label}
            </ColoredText>
          ) : null}
          {endElement}
        </>
      </View>
    </Container>
  );
};
