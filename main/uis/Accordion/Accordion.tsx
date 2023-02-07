import React, {useRef} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import AccordionItem from './AccordionItem';
import type {AccordionItemDataType} from './AccordionItem';
import {Animated} from 'react-native';
import type {ReactElement} from 'react';
import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: column;
`;

interface Styles {
  titleContainer?: StyleProp<ViewStyle>;
  bodyContainer?: StyleProp<ViewStyle>;
}

export type AccordionBaseProps<T, K> = {
  data: AccordionItemDataType<T, K>[];
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: ReactElement | null;
  renderTitle: (title: T) => ReactElement;
  renderItem: (body: K) => ReactElement;
  onPressItem?: (title: T, body: K) => void;
};

export type AccordionProps<T, K> = AccordionBaseProps<T, K>;

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
