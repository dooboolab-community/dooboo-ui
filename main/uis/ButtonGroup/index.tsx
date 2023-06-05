import type {ReactElement} from 'react';
import React, {useState} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import styled, {css} from '@emotion/native';

import type {DoobooTheme} from '../../providers';
import {useDooboo} from '../../providers';
import CustomPressable from '../CustomPressable';

const ButtonGroupContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  border-color: ${({theme}) => theme.role.border};
  border-width: 1px;
`;

const Button = styled(CustomPressable)`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.bg.basic};
`;

const ButtonText = styled(Text)`
  font-size: 14px;
  font-family: Pretendard-Bold;
`;

const Divider = styled.View`
  width: 1px;
  align-self: stretch;
`;

type Styles = {
  container?: ViewStyle;
  button?: ViewStyle;
  buttonContainer?: ViewStyle;
  buttonText?: TextStyle;
  divider?: ViewStyle;
};

type ButtonGroupProps = {
  testID?: string;
  options: string[];
  startElement?: ReactElement;
  endElement?: ReactElement;
  defaultSelected?: string;
  onValueChange?: (selected: string) => void;
  color?: Omit<keyof DoobooTheme['button'], 'light'>;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
};

function ButtonGroup({
  testID,
  options,
  defaultSelected,
  onValueChange,
  color = 'primary',
  startElement,
  endElement,
  style,
  styles,
}: ButtonGroupProps): ReactElement {
  const {theme} = useDooboo();
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultSelected,
  );

  const colorType = color as keyof DoobooTheme['button'];

  const onPressButton = (option: string): void => {
    setSelectedValue(option);
    onValueChange && onValueChange(option);
  };

  return (
    <ButtonGroupContainer
      testID={testID}
      style={[
        css`
          border-width: 1px;
          border-color: ${theme.button[colorType].bg};
        `,
        style,
      ]}
    >
      {options.map((option, index) => {
        const isSelected = selectedValue === option;

        return (
          <View
            key={`${option}-${index}`}
            style={[
              css`
                flex: 1;
                flex-direction: row;
              `,
              styles?.container,
            ]}
          >
            <Button
              key={index}
              onPress={() => onPressButton(option)}
              style={[
                isSelected
                  ? {
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      backgroundColor: theme.button[colorType].bg,
                    }
                  : {},
                styles?.button,
              ]}
            >
              <View
                style={[
                  css`
                    flex-direction: row;
                    align-items: center;
                    gap: 4px;
                  `,
                  styles?.buttonContainer,
                ]}
              >
                {startElement}
                <ButtonText
                  style={{
                    color: isSelected
                      ? theme.button[colorType].text
                      : theme.button[colorType].bg,
                  }}
                >
                  {option}
                </ButtonText>
                {endElement}
              </View>
            </Button>
            {index !== options.length - 1 && (
              <Divider
                style={[
                  css`
                    background-color: ${theme.button[colorType].bg};
                  `,
                  styles?.divider,
                ]}
              />
            )}
          </View>
        );
      })}
    </ButtonGroupContainer>
  );
}

export default ButtonGroup;
