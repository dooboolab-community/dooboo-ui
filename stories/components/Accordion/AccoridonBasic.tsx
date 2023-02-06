import type {
  AccordionData,
  AccordionListType,
} from '../../../main/components/Accordion';
import {boolean, number} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/components/Accordion';
import {Icon} from '../../../main/components/Icon';
import type {ReactElement} from 'react';
import {Typography} from '../../../main/components/Typography';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDooboo} from '../../../main';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  margin-left: 20px;
  color: white;
  font-size: 18px;
`;

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

const data: AccordionListType = [
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

const AccordionBasic = (): ReactElement => {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <Container>
        <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
          Demo
        </Typography.Heading3>
        <Accordion
          data={data}
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
        />
      </Container>

      <Container>
        <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
          Custom Style
        </Typography.Heading3>
        <Accordion
          data={data.map<AccordionData>((datum) => ({
            ...datum,
            title: datum.title.toUpperCase(),
          }))}
          renderTitle={(item) => (
            <View
              style={{
                paddingLeft: 20,
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Icon name="search-light" color={theme.text.contrast} />
              <Title>{item}</Title>
            </View>
          )}
          renderBody={(item) => <CustomStyledItem>{item}</CustomStyledItem>}
          toggleElement={
            <Icon name="chevron-down-light" color={theme.text.contrast} />
          }
          styles={{
            titleContainer: {
              backgroundColor: 'gray',
            },
            bodyContainer: {
              backgroundColor: 'lightgray',
            },
          }}
        />
      </Container>
    </ScrollContainer>
  );
};

export default AccordionBasic;
