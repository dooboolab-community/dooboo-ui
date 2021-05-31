import {ArrowDown, IC_MAGNIFIER} from '../../Icon';
import React, {Fragment, ReactElement} from 'react';

import {Accordion} from '../../../main';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

const CustomStyledTitle = styled.Text`
  position: absolute;
  left: 60px;
`;

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

const LeftElement = styled.Image`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 20px;
`;

const data = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

export const AccordionDefault = (): ReactElement => {
  return (
    <SafeAreaView style={{top: 100}}>
      <Container>
        <Accordion
          data={data}
          shouldAnimate={true}
          collapseOnStart={true}
          animDuration={400}
          activeOpacity={1}
          toggleElement={<ArrowDown />}
        />
      </Container>
    </SafeAreaView>
  );
};

export const AccordionCustomStyle = (): React.ReactElement => {
  return (
    <SafeAreaView style={{top: 100}}>
      <Container>
        <Accordion
          data={data}
          shouldAnimate={true}
          collapseOnStart={true}
          animDuration={300}
          activeOpacity={1}
          renderTitle={(item) => {
            return (
              <Fragment>
                <LeftElement source={IC_MAGNIFIER} />
                <CustomStyledTitle>{item}</CustomStyledTitle>
              </Fragment>
            );
          }}
          renderBody={(item) => {
            return (
              <Fragment>
                <CustomStyledItem>{item}</CustomStyledItem>
              </Fragment>
            );
          }}
          toggleElement={<ArrowDown />}
          titleContainerStyle={{
            backgroundColor: 'gray',
          }}
          bodyContainerStyle={{
            backgroundColor: 'lightgray',
          }}
        />
      </Container>
    </SafeAreaView>
  );
};
