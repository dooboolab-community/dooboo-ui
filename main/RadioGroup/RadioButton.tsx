import {
  ColoredText,
  RadioButtonWrapper,
  RadioWrapper,
} from '../Styled/StyledComponents';
import {DoobooTheme, light, withTheme} from '../theme';
import {
  LayoutRectangle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';

import styled from '@emotion/native';

type Styles = {
  radio?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
};

export type RadioButtonType =
  | 'primary'
  | 'secondary'
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
  theme?: DoobooTheme;
  selected?: boolean;
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
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
  innerLayout?: LayoutRectangle;
}>`
  flex: 1;
  align-self: stretch;

  margin: ${({innerLayout}) => innerLayout && '2px'};
  border-radius: ${({innerLayout}) =>
    innerLayout && `${innerLayout.width / 2}px`};
`;

const RadioButtonContainer: FC<RadioButtonProps> = ({
  testID,
  style,
  styles,
  rightElement,
  leftElement,
  type = 'primary',
  disabled = false,
  selected,
  onPress,
  label,
  labelPosition = 'right',
}) => {
  const [innerLayout, setInnerLayout] = useState<LayoutRectangle>();

  return (
    <Container
      testID={testID}
      disabled={disabled}
      style={style}
      onPress={onPress}
      activeOpacity={0.9}>
      <View
        style={{
          paddingVertical: 6,
          paddingLeft:
            leftElement || (label && labelPosition === 'left') ? 8 : 0,
          paddingRight:
            rightElement || (label && labelPosition === 'right') ? 8 : 0,

          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {leftElement}
        {label && labelPosition === 'left' && (
          <ColoredText
            type={type}
            selected={!!selected}
            disabled={disabled}
            style={styles?.label}>
            {label}
          </ColoredText>
        )}
        <StyledRadioButton
          style={styles?.radio}
          selected={!!selected}
          type={type}
          disabled={disabled}>
          <StyledRadioCircle
            testID={`circle-${testID}`}
            type={type}
            selected={!!selected}
            innerLayout={innerLayout}
            onLayout={(e) => setInnerLayout(e.nativeEvent.layout)}
          />
        </StyledRadioButton>
        {label && labelPosition === 'right' && (
          <ColoredText
            type={type}
            selected={selected}
            disabled={disabled}
            style={styles?.label}>
            {label}
          </ColoredText>
        )}
        {rightElement}
      </View>
    </Container>
  );
};

RadioButtonContainer.defaultProps = {theme: light};

export const RadioButton = withTheme(RadioButtonContainer);
