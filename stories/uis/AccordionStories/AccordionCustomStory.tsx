import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';
import styled, {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {useDooboo} from '../../../main';
import type {AccordionItemDataType} from '../../../main/uis/Accordion';
import {Accordion} from '../../../main/uis/Accordion';
import {Icon} from '../../../main/uis/Icon';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

const CustomStyledItem = styled.Text`
  color: ${({theme}) => theme.text.basic};
  padding-left: 8px;
  font-family: Pretendard-Bold;
`;

type AccordionTitle = {key: string; text: string};
type AccordionItem = {text: string};

const data: AccordionItemDataType<AccordionTitle, AccordionItem>[] = [
  {
    title: {
      key: 'HEADING_1',
      text: 'accordion heading 1',
    },
    items: [{text: 'User'}, {text: 'Mail'}, {text: 'Text'}],
  },
  {
    title: {
      key: 'HEADING_2',
      text: 'accordion heading 2',
    },
    items: [{text: 'Movie'}, {text: 'Image'}, {text: 'File'}],
  },
  {
    title: {
      key: 'HEADING_3',
      text: 'accordion heading 3',
    },
    items: [{text: 'TicTok'}, {text: 'Youtube'}, {text: 'Puzz'}],
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
          styles={{
            titleContainer: css`
              padding-right: 0;
            `,
          }}
          data={data}
          onPressItem={action('onPressItem')}
          renderTitle={({text, key}) => (
            <View
              style={css`
                flex: 1;

                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <Typography.Heading4>{text}</Typography.Heading4>
              <Icon
                name={
                  key === 'HEADING_1'
                    ? 'Home'
                    : key === 'HEADING_2'
                    ? 'Star'
                    : 'Bookmark'
                }
                color={theme.text.basic}
                size={14}
                style={css`
                  margin-right: 12px;
                `}
              />
            </View>
          )}
          renderItem={({text}) => {
            if (text === 'User' || text === 'Image' || text === 'Puzz') {
              return (
                <View
                  style={css`
                    padding-left: 2px;
                    flex: 1;
                    flex-direction: row;
                    align-items: center;
                  `}
                >
                  <Icon
                    name={
                      text === 'User'
                        ? 'AutoAwesome'
                        : text === 'Puzz'
                        ? 'Puzz'
                        : 'Image'
                    }
                    color={theme.text.basic}
                    size={14}
                    style={css`
                      margin-right: 4px;
                    `}
                  />
                  <CustomStyledItem>{text}</CustomStyledItem>
                </View>
              );
            }

            return (
              <View
                style={css`
                  padding-left: 20px;
                  flex: 1;
                  flex-direction: row;
                  align-items: center;
                `}
              >
                <CustomStyledItem>{text}</CustomStyledItem>
              </View>
            );
          }}
          toggleElementPosition="left"
          toggleElement={
            <Icon name="ArrowCircleDown" color={theme.text.basic} size={16} />
          }
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionCustom;
