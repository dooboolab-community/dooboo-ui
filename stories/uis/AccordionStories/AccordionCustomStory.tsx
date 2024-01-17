// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';
import styled, {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {useDooboo} from '../../../main';
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

const data = [
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

function AccordionCustom(): JSX.Element {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>
          Custom Style
        </StoryTitle>
        <Accordion<AccordionTitle, AccordionItem>
          activeOpacity={number('activeOpacity', 1)}
          animDuration={number('animDuration', 200)}
          collapseOnStart={boolean('collapseOnStart', true)}
          data={data}
          onPressItem={action('onPressItem')}
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
                    color={theme.text.basic}
                    name={
                      text === 'User'
                        ? 'AutoAwesome'
                        : text === 'Puzz'
                          ? 'QuestBoxFill'
                          : 'House'
                    }
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
                color={theme.text.basic}
                name={
                  key === 'HEADING_1'
                    ? 'HouseFill'
                    : key === 'HEADING_2'
                      ? 'Star'
                      : 'Bookmark'
                }
                size={14}
                style={css`
                  margin-right: 12px;
                `}
              />
            </View>
          )}
          shouldAnimate={boolean('shouldAnimate', true)}
          styles={{
            titleContainer: css`
              padding-right: 0;
            `,
          }}
          toggleElement={
            <Icon color={theme.text.basic} name="ArrowCircleDown" size={16} />
          }
          toggleElementPosition="left"
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default AccordionCustom;
