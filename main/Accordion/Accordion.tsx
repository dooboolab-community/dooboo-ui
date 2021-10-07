import AccordionItem, {AccordionData} from './AccordionItem';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import React, {FC, ReactElement, useRef} from 'react';

import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const TOGGLE_ELEMENT_PROPERTY = 'toggleElement';
export interface Styles {
  titleContainer?: StyleProp<ViewStyle>;
  bodyContainer?: StyleProp<ViewStyle>;
}

export interface AccordionBaseProps<T> {
  data: T;
  style?: ViewStyle;
  styles?: Styles;
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  [TOGGLE_ELEMENT_PROPERTY]?: ReactElement | null;
  renderTitle?: (item: string) => ReactElement;
  renderBody?: (item: string) => ReactElement;
}

export type AccordionListType = AccordionData[];

type AccordionProps = AccordionBaseProps<AccordionListType>;

const Accordion: FC<AccordionProps> = (props) => {
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
            dropDownAnimValueList={dropDownAnimValueList[titleKey]}
            sumOfPrecedingTranslateY={dropDownAnimValueList
              .filter((item, idx) => idx < titleKey)
              .map((value) => ({translateY: value}))}
            toggleElement={toggleElement}
            renderTitle={renderTitle}
            renderBody={renderBody}
          />
        );
      })}
    </Container>
  );
};

export default Accordion;
