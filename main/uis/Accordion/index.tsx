import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from '@emotion/native';

import type {AccordionItemDataType} from './AccordionItem';
import {AccordionItem} from './AccordionItem';

const Container = styled.View`
  flex-direction: column;
`;

interface Styles {
  container?: StyleProp<ViewStyle>;
  titleContainer?: StyleProp<ViewStyle>;
  titleText?: StyleProp<TextStyle>;
  itemContainer?: StyleProp<ViewStyle>;
  itemText?: StyleProp<TextStyle>;
  toggleElement?: StyleProp<ViewStyle>;
}

export type AccordionBaseProps<T = string, K = string> = {
  data: AccordionItemDataType<T, K>[];
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElementPosition?: 'left' | 'right';
  toggleElement?: JSX.Element | null;
  renderTitle?: (title: T) => JSX.Element;
  renderItem?: (body: K) => JSX.Element;
  onPressItem?: (title: T | string, body: K | string) => void;
};

export type AccordionProps<T = string, K = string> = AccordionBaseProps<T, K>;

export function Accordion<T, K>(props: AccordionProps<T, K>): JSX.Element {
  const {style, toggleElementPosition = 'right', data, ...rest} = props;

  return (
    <Container style={style}>
      {data.map((datum, titleKey) => {
        return (
          <AccordionItem
            key={titleKey}
            testID={`${titleKey}`}
            data={datum}
            toggleElementPosition={toggleElementPosition}
            {...rest}
          />
        );
      })}
    </Container>
  );
}
