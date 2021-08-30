import {DoobooTheme, light} from '../theme';
import {
  RadioButton as RadioButtonComp,
  RadioButtonProps,
  RadioButtonType,
} from './RadioButton';
import React, {ReactElement} from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';

import {Heading3} from '../Typography/Typography';
import styled from '@emotion/native';

type Styles = {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  label?: StyleProp<TextStyle>;
};

type Props<T> = {
  theme?: DoobooTheme;
  title?: string;
  data: T[];
  selectedValue: T;
  renderItem?: ({item: T, i: number}) => ReactElement;
  selectValue?: (item: T) => void;
  type?: RadioButtonType;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  labels?: string[];
  radioType?: Omit<RadioButtonProps, 'type' | 'theme'>;
  labelPosition?: 'left' | 'right';
};

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.View`
  flex-direction: row;
`;

function RadioGroupContainer<T>(
  props: Omit<Props<T>, 'selected'>,
): ReactElement {
  const {
    title,
    data,
    selectedValue,
    selectValue,
    style,
    styles,
    type,
    labels,
    labelPosition,
  } = props;

  return (
    <Container style={style}>
      <Heading3 style={styles?.title}>{title}</Heading3>
      {title && <View style={{height: 8}} />}
      <Content style={styles?.container}>
        {data.map((datum, i) => {
          return (
            <RadioButtonComp
              key={`radio-${i}`}
              testID={`radio-${i}`}
              {...props.radioType}
              label={labels?.[i] || ''}
              type={type}
              selected={selectedValue === datum}
              onPress={() => selectValue?.(datum)}
              styles={{label: styles?.label}}
              labelPosition={labelPosition}
            />
          );
        })}
      </Content>
    </Container>
  );
}

RadioGroupContainer.defaultProps = {theme: light};

export const RadioGroup = RadioGroupContainer;

export const RadioButton = RadioButtonComp;
