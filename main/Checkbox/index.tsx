import {DoobooTheme, light} from '../theme';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {CheckboxWrapper} from '../Styled/StyledComponents';
import {Icon} from '../Icon';
import styled from '@emotion/native';
import {withTheme} from '@emotion/react';

type Styles = {
  checkbox?: StyleProp<ViewStyle>;
};

type CheckboxType = 'primary' | 'secondary' | 'danger' | 'warning' | 'info';

export interface CheckboxProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  type?: CheckboxType;
  disabled?: boolean;
  theme?: DoobooTheme;
  checked?: boolean;
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled(CheckboxWrapper)<{
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

const StyledCheck = styled(Icon)<{checked?: boolean}>`
  color: ${({theme, checked}) => (checked ? theme.background : 'transparent')};
`;

const CheckboxContainer: FC<CheckboxProps> = ({
  style,
  styles,
  rightElement,
  leftElement,
  type = 'primary',
  disabled = false,
  checked = false,
  onPress,
}) => {
  return (
    <Container
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={0.9}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 6,
          paddingLeft: leftElement ? 6 : 0,
          paddingRight: rightElement ? 6 : 0,
        }}>
        {leftElement}
        <StyledCheckbox
          testID="doobooui-checkbox"
          style={styles?.checkbox}
          checked={checked}
          type={type}
          disabled={disabled}>
          <StyledCheck name="tick-light" checked={checked} />
        </StyledCheckbox>
        {rightElement}
      </View>
    </Container>
  );
};

CheckboxContainer.defaultProps = {theme: light};

export const Checkbox = withTheme(CheckboxContainer);
