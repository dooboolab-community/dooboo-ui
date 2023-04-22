import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number, object} from '@storybook/addon-knobs';

import {useDooboo} from '../../../main';
import type {AccordionItemDataType} from '../../../main/uis/Accordion';
import {Accordion} from '../../../main/uis/Accordion';
import {Icon} from '../../../main/uis/Icon';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

type AccordionTitle = {text: string};
type AccordionItem = {text: string};

const data: AccordionItemDataType<AccordionTitle, AccordionItem>[] = [
  {
    title: {text: 'Lists'},
    items: [{text: 'User'}, {text: 'Mail'}, {text: 'Text'}],
  },
  {
    title: {text: 'Lists'},
    items: [{text: 'User'}, {text: 'Mail'}, {text: 'Text'}],
  },
  {
    title: {text: 'Lists'},
    items: [{text: 'User'}, {text: 'Mail'}, {text: 'Text'}],
  },
];

const AccordionCustom = (): ReactElement => {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>
          Custom Style
        </StoryTitle>
        <Accordion<AccordionTitle, AccordionItem>
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
          activeOpacity={number('activeOpacity', 1)}
          collapseOnStart={boolean('collapseOnStart', true)}
          styles={object('styles', {
            titleContainer: {
              backgroundColor: 'gray',
            },
            bodyContainer: {
              backgroundColor: 'lightgray',
            },
          })}
          data={object(
            'data',
            data.map((datum) => ({
              ...datum,
              title: {
                ...datum.title,
                text: datum.title.text.toUpperCase(),
              },
            })),
          )}
          onPressItem={action('onPressItem')}
          renderTitle={(item) => (
            <View
              style={{
                paddingLeft: 20,
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Icon name="SearchAlt" color={theme.text.contrast} />
              <View style={{width: 8}} />
              <Typography.Heading3>{item.text}</Typography.Heading3>
            </View>
          )}
          renderItem={(item) => (
            <CustomStyledItem>{item.text}</CustomStyledItem>
          )}
          toggleElement={
            <Icon name="ChevronDownAlt" color={theme.text.contrast} />
          }
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionCustom;
