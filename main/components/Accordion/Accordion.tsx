import type {AccordionData, AccordionListItemType} from './AccordionItem';
import React, {useRef} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

import AccordionItem from './AccordionItem';
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

export type AccordionBaseProps<T> = {
  data: T;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: ReactElement | null;
  renderTitle?: (item: AccordionListItemType) => ReactElement;
  renderBody?: (item: AccordionListItemType) => ReactElement;
  onPressItem?: (
    title: AccordionListItemType,
    body: AccordionListItemType,
  ) => void;
};

export type AccordionListType = AccordionData[];

export type AccordionProps = AccordionBaseProps<AccordionListType>;

function Accordion(props: AccordionProps): ReactElement {
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
    renderBody,
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
            renderBody={renderBody}
            onPressItem={onPressItem}
          />
        );
      })}
    </Container>
  );
}

export default Accordion;
