import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {View} from 'react-native';
import styled from '@emotion/native';

import {Heading3} from '../Typography/Typography';

import type {RadioButtonProps, RadioButtonStyles} from './RadioButton';
import RadioButtonComp from './RadioButton';

type Styles = {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  radio?: StyleProp<ViewStyle>;
  radioStyles?: RadioButtonStyles;
};

export type RadioButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light';

type Props<T> = {
  title?: string;
  data: T[];
  selectedValue: T;
  selectValue?: (item: T) => void;
  type?: RadioButtonType;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  labels?: string[];
  radioType?: Omit<RadioButtonProps, 'type'>;
  labelPosition?: 'left' | 'right';
};

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.View`
  flex-direction: row;
`;

function RadioGroupContainer<T>({
  title,
  data,
  selectedValue,
  selectValue,
  style,
  styles,
  type,
  labels,
  labelPosition,
  radioType,
}: Omit<Props<T>, 'selected'>): JSX.Element {
  return (
    <Container style={style}>
      <Heading3 style={styles?.title}>{title}</Heading3>
      {title ? <View style={{height: 8}} /> : null}
      <Content style={styles?.container}>
        {data.map((datum, i) => {
          return (
            <RadioButtonComp
              key={`radio-${i}`}
              testID={`radio-${i}`}
              {...radioType}
              label={labels?.[i] || ''}
              labelPosition={labelPosition}
              onPress={() => selectValue?.(datum)}
              selected={selectedValue === datum}
              style={styles?.radio}
              styles={styles?.radioStyles}
              type={type}
            />
          );
        })}
      </Content>
    </Container>
  );
}

export const RadioGroup = RadioGroupContainer;

export const RadioButton = RadioButtonComp;
