import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import {getNextMonth, getPreviousMonth} from './utils';

interface Prop {
  date: Date;
  onChange: (date: Date) => void;
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  styles?: {
    container?: StyleProp<ViewStyle>;
    text?: StyleProp<TextStyle>;
  };
}

const Container = styled.View`
  padding: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function MonthHeader({
  date,
  onChange,
  styles,
  iconLeft,
  iconRight,
}: Prop): JSX.Element {
  const {theme} = useTheme();

  return (
    <Container style={styles?.container}>
      <TouchableOpacity
        onPress={() => {
          const previous = getPreviousMonth(date);
          onChange(previous);
        }}
      >
        {/* Icon style이 StyleProp<ViewStyle>형식을 지원하지 않음. */}
        {iconLeft || null}
      </TouchableOpacity>

      <Text
        style={[
          css`
            color: ${theme.text.basic};
            font-weight: bold;
            font-size: 20px;
          `,
          styles?.text,
        ]}
      >
        {date.getFullYear()}년 {date.getMonth() + 1}월
      </Text>
      <TouchableOpacity
        onPress={() => {
          const next = getNextMonth(date);
          onChange(next);
        }}
      >
        {iconRight || null}
      </TouchableOpacity>
    </Container>
  );
}
