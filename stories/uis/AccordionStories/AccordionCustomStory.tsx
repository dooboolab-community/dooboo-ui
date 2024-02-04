// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';
import styled, {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';

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

function AccordionCustom(props): JSX.Element {
  const {theme} = useDooboo();

  return (
    <StoryContainer>
      <StoryTitle style={{fontSize: 18, marginBottom: 8}}>
        Custom Style
      </StoryTitle>
      <ScrollContainer>
        <Accordion<AccordionTitle, AccordionItem>
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
          styles={{
            titleContainer: css`
              padding-right: 0;
            `,
          }}
          toggleElement={
            <Icon color={theme.text.basic} name="ArrowCircleDown" size={16} />
          }
          toggleElementPosition="left"
          {...props}
        />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default AccordionCustom;
