import type {ReactElement} from 'react';
import React, {useRef} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Animated} from 'react-native';
import styled from '@emotion/native';

import type {AccordionItemDataType} from './AccordionItem';
import AccordionItem from './AccordionItem';

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
  toggleElement?: ReactElement | null;
  renderTitle?: (title: T) => ReactElement;
  renderItem?: (body: K) => ReactElement;
  onPressItem?: (title: T | string, body: K | string) => void;
};

export type AccordionProps<T = string, K = string> = AccordionBaseProps<T, K>;

function Accordion<T, K>(props: AccordionProps<T, K>): ReactElement {
  const {
    style,
    styles,
    data,
    collapseOnStart,
    shouldAnimate,
    animDuration,
    activeOpacity,
    toggleElement,
    toggleElementPosition = 'right',
    renderTitle,
    renderItem,
    onPressItem,
  } = props;

  const dropDownAnimValueList = useRef(
    data.map(() => new Animated.Value(0)),
  ).current;

  return (
    <Container style={style}>
      {data.map((datum, titleKey) => {
        return (
          <AccordionItem
            key={titleKey}
            testID={`${titleKey}`}
            styles={styles}
            data={datum}
            collapseOnStart={collapseOnStart}
            shouldAnimate={shouldAnimate}
            animDuration={animDuration}
            activeOpacity={activeOpacity}
            dropDownAnimValue={dropDownAnimValueList[titleKey]}
            toggleElement={toggleElement}
            toggleElementPosition={toggleElementPosition}
            renderTitle={renderTitle}
            renderItem={renderItem}
            onPressItem={onPressItem}
          />
        );
      })}
    </Container>
  );
}

export default Accordion;
