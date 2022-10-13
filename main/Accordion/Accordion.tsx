import type {AccordionData} from './AccordionItem';
import AccordionItem from './AccordionItem';
import type {StyleProp, ViewStyle} from 'react-native';
import {Animated} from 'react-native';
import type {FC, ReactElement} from 'react';
import React, {useRef} from 'react';

import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

interface Styles {
  titleContainer?: StyleProp<ViewStyle>;
  bodyContainer?: StyleProp<ViewStyle>;
}

export interface AccordionBaseProps<T> {
  data: T;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: ReactElement | null;
  renderTitle?: (item: string) => ReactElement;
  renderBody?: (item: string) => ReactElement;
}

export type AccordionListType = AccordionData[];

export type AccordionProps = AccordionBaseProps<AccordionListType>;

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
            dropDownAnimValue={dropDownAnimValueList[titleKey]}
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
