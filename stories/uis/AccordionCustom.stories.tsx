import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import {
  Accordion,
  DoobooProvider,
  Icon,
  Typography,
  useDooboo,
} from '../../main';
import {StoryWrapper} from '../Common';

type AccordionTitle = {key: string; text: string};
type AccordionItem = {text: string};

const meta = {
  title: 'Accordion',
  component: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {theme} = useDooboo();

    return (
      <Accordion<AccordionTitle, AccordionItem>
        onPressItem={() => {}}
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
                <Text
                  style={css`
                    color: ${theme.text.basic};
                    padding-left: 8px;
                    font-family: Pretendard-Bold;
                  `}
                >
                  {text}
                </Text>
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
              <Text
                style={css`
                  color: ${theme.text.basic};
                  padding-left: 8px;
                  font-family: Pretendard-Bold;
                `}
              >
                {text}
              </Text>
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
    );
  },
  args: {
    animDuration: 200,
    collapseOnStart: true,
    data: [
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
    ],
    shouldAnimate: true,
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </DoobooProvider>
    ),
  ],
} satisfies Meta<typeof Accordion<AccordionTitle, AccordionItem>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Custom: Story = {};
