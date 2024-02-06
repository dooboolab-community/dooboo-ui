import React, {useEffect, useRef} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Animated, Platform, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import {Icon} from '../Icon';
import {
  CheckboxWrapper,
  CheckboxWrapperOutlined,
} from '../Styled/StyledComponents';

type Styles = {
  container?: StyleProp<ViewStyle>;
  checkbox?: StyleProp<ViewStyle>;
  check?: ViewStyle;
};

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export interface CheckboxProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  color?: CheckboxColor;
  disabled?: boolean;
  checked?: boolean;
  endElement?: JSX.Element;
  startElement?: JSX.Element;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledCheckboxOutlined = styled(CheckboxWrapperOutlined)`
  width: 20px;
  height: 20px;
  border-width: 1px;
  margin: 0 6px;

  justify-content: center;
  align-items: center;
`;

const StyledCheckbox = styled(CheckboxWrapper)`
  width: 20px;
  height: 20px;
  margin: 0 6px;

  justify-content: center;
  align-items: center;
`;

const StyledCheck = styled(Icon)<{checked?: boolean}>`
  font-weight: bold;
  color: ${({theme, checked}) => (checked ? theme.bg.basic : 'transparent')};
`;

export function Checkbox({
  style,
  styles,
  endElement,
  startElement,
  color = 'primary',
  disabled = false,
  checked = false,
  onPress,
}: CheckboxProps): JSX.Element {
  const animatedValue = new Animated.Value(0);
  const fadeAnim = useRef(animatedValue).current;
  const scaleAnim = useRef(animatedValue).current;
  const {theme} = useTheme();

  useEffect(() => {
    Animated.sequence([
      Animated.spring(fadeAnim, {
        toValue: !checked ? 0 : 1,
        useNativeDriver: Platform.select({
          web: false,
          default: true,
        }),
      }),
      Animated.spring(scaleAnim, {
        toValue: !checked ? 0 : 1,
        useNativeDriver: Platform.select({
          web: false,
          default: true,
        }),
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, checked]);

  return (
    <Container
      activeOpacity={0.9}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <View
        style={[
          css`
            flex: 1;
            padding: 6px 0;

            flex-direction: row;
            column-gap: 2px;
            align-items: center;
          `,
          styles?.container,
        ]}
      >
        {startElement}
        <StyledCheckboxOutlined
          checked={checked}
          disabled={disabled}
          style={styles?.checkbox}
          testID="doobooui-checkbox"
          type={color}
        >
          <StyledCheckbox
            checked={checked}
            disabled={disabled}
            style={[
              styles?.checkbox,
              {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
            ]}
            type={color}
          >
            <StyledCheck
              checked={checked}
              name="Check"
              style={styles?.check}
              theme={theme}
            />
          </StyledCheckbox>
        </StyledCheckboxOutlined>
        {endElement}
      </View>
    </Container>
  );
}
