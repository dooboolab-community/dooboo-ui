import type {
  AccordionData,
  AccordionListType,
} from '../../../main/components/Accordion';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';
import {boolean, number} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/components/Accordion';
import {Icon} from '../../../main/components/Icon';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Typography} from '../../../main/components/Typography';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDooboo} from '../../../main';

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

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

const AccordionCustom = (): ReactElement => {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>
          Custom Style
        </StoryTitle>
        <Accordion
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
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
              <View style={{width: 8}} />
              <Typography.Heading3>{item}</Typography.Heading3>
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
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionCustom;
