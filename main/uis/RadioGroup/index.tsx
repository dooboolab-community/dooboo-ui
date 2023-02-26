import type {RadioButtonProps} from './RadioButton';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Heading3} from '../Typography/Typography';
import {RadioButton as RadioButtonComp} from './RadioButton';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

type Styles = {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  label?: StyleProp<TextStyle>;
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
      {title ? <View style={{height: 8}} /> : null}
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

export const RadioGroup = RadioGroupContainer;

export const RadioButton = RadioButtonComp;
