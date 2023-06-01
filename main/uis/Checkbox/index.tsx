import type {ReactElement} from 'react';
import React, {useEffect, useRef} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Animated, Platform, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {Icon} from '../Icon';
import {
  CheckboxWrapper,
  CheckboxWrapperOutlined,
} from '../Styled/StyledComponents';

type Styles = {
  checkbox?: StyleProp<ViewStyle>;
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
  endElement?: React.ReactElement;
  startElement?: React.ReactElement;
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
}: CheckboxProps): ReactElement {
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
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 6,
          paddingLeft: startElement ? 6 : 0,
          paddingRight: endElement ? 6 : 0,
        }}
      >
        <>
          {startElement}
          <StyledCheckboxOutlined
            testID="doobooui-checkbox"
            checked={checked}
            type={color}
            disabled={disabled}
            style={styles?.checkbox}
          >
            <StyledCheckbox
              style={[
                styles?.checkbox,
                {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
              ]}
              checked={checked}
              type={color}
              disabled={disabled}
            >
              <StyledCheck theme={theme} name="Check" checked={checked} />
            </StyledCheckbox>
          </StyledCheckboxOutlined>
          {endElement}
        </>
      </View>
    </Container>
  );
}
