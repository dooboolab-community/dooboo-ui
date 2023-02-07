import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';
import {boolean, number, object} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/components/Accordion';
import type {AccordionItemDataType} from '../../../main/components/Accordion';
import {Icon} from '../../../main/components/Icon';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Typography} from '../../../main/components/Typography';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDooboo} from '../../../main';

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

const AccordionCustom = ({
  data,
}: {
  data: AccordionItemDataType<string, string>[];
}): ReactElement => {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>
          Custom Style
        </StoryTitle>
        <Accordion<string, string>
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
              title: datum.title.toUpperCase(),
            })),
          )}
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
          renderItem={(item) => <CustomStyledItem>{item}</CustomStyledItem>}
          toggleElement={
            <Icon name="chevron-down-light" color={theme.text.contrast} />
          }
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionCustom;
