import {Animated, StyleProp, ViewStyle} from 'react-native';
import React, {FC, useRef} from 'react';

import styled from '@emotion/native';
import AccordionItem from './AccordionItem';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export interface Datum {
  title: string;
  bodies: string[];
}

export type Styles = {
  titleContainer?: StyleProp<ViewStyle>;
  bodyContainer?: StyleProp<ViewStyle>;
};

interface Props {
  style?: ViewStyle;
  styles?: Styles;
  data: Datum[];
  shouldAnimate: boolean;
  collapseOnStart: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: React.ReactElement;
  renderTitle?: (item: string) => React.ReactElement;
  renderBody?: (item: string) => React.ReactElement;
}

const Accordion: FC<Props> = (props) => {
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
            datum={datum}
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

export {Accordion};
