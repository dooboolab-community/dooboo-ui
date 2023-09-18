import React, {useState} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import type {DoobooTheme} from '@dooboo-ui/theme';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

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
  startElement?: JSX.Element;
  endElement?: JSX.Element;
  initialValue?: string;
  onValueChange?: (selected: string) => void;
  color?: Omit<keyof DoobooTheme['button'], 'light'>;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
};

export function ButtonGroup({
  testID,
  options,
  initialValue,
  onValueChange,
  color = 'primary',
  startElement,
  endElement,
  style,
  styles,
}: ButtonGroupProps): JSX.Element {
  if (typeof initialValue !== 'string') {
    // eslint-disable-next-line no-console
    console.warn('initialValue must be string');
  } else if (!options.includes(initialValue)) {
    // eslint-disable-next-line no-console
    console.warn('initialValue must be one of the options');
  }

  const {theme} = useTheme();
  const colorType = color as keyof DoobooTheme['button'];

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue,
  );

  const onPressButton = (option: string): void => {
    setSelectedValue(option);
    onValueChange && onValueChange(option);
  };

  return (
    <ButtonGroupContainer
      style={[
        css`
          border-width: 1px;
          border-color: ${theme.button[colorType].bg};
        `,
        style,
      ]}
      testID={testID}
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
                      shadowColor: theme.role.underlay,
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
            {index !== options.length - 1 ? (
              <Divider
                style={[
                  css`
                    background-color: ${theme.button[colorType].bg};
                  `,
                  styles?.divider,
                ]}
              />
            ) : null}
          </View>
        );
      })}
    </ButtonGroupContainer>
  );
}
