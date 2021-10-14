import {Animated, Platform, StyleProp, View, ViewStyle} from 'react-native';
import {
  CheckboxWrapper,
  CheckboxWrapperOutlined,
} from '../Styled/StyledComponents';
import React, {FC, useEffect, useRef} from 'react';

import {Icon} from '../Icon';
import styled from '@emotion/native';
import {DoobooTheme, useTheme} from '..';

type Styles = {
  checkbox?: StyleProp<ViewStyle>;
};

export type CheckboxType =
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
  type?: CheckboxType;
  disabled?: boolean;
  checked?: boolean;
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledCheckboxOutlined = styled(CheckboxWrapperOutlined)<{
  checked?: boolean;
  disabled?: boolean;
  type?: CheckboxType;
}>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  margin: 0 6px;

  justify-content: center;
  align-items: center;
`;

const StyledCheckbox = styled(CheckboxWrapper)<{
  checked?: boolean;
  disabled?: boolean;
  type?: CheckboxType;
}>`
  width: 20px;
  height: 20px;
  margin: 0 6px;

  justify-content: center;
  align-items: center;
`;

const StyledCheck = styled(Icon)<{theme: DoobooTheme; checked?: boolean}>`
  color: ${({theme, checked}) => (checked ? theme.background : 'transparent')};
`;

export const Checkbox: FC<CheckboxProps> = ({
  style,
  styles,
  rightElement,
  leftElement,
  type = 'primary',
  disabled = false,
  checked = false,
  onPress,
}) => {
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
          paddingLeft: leftElement ? 6 : 0,
          paddingRight: rightElement ? 6 : 0,
        }}
      >
        {leftElement}
        <StyledCheckboxOutlined
          testID="doobooui-checkbox"
          checked={checked}
          type={type}
          disabled={disabled}
          style={styles?.checkbox}
        >
          <StyledCheckbox
            style={[
              styles?.checkbox,
              {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
            ]}
            checked={checked}
            type={type}
            disabled={disabled}
          >
            <StyledCheck theme={theme} name="tick-light" checked={checked} />
          </StyledCheckbox>
        </StyledCheckboxOutlined>
        {rightElement}
      </View>
    </Container>
  );
};
