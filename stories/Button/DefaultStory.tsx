import React from 'react';
import type {FC} from 'react';
import {ThemeType} from '@dooboo-ui/theme';
import {
  Basic,
  TextButton,
  ContainedButton,
  OutlinedButton,
  TextButtonColors,
  ContainedButtonColors,
  OutlinedButtonColors,
  Sizes,
  Loading,
  AddElements,
  OnPressEvent,
  IconButtonBasic,
  IconButtonColors,
  IconButtonSizes,
} from './components';
import {StoryContainer, ScrollContainer, Title, Description} from '../Styles';

const ButtonDefault: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 20,
        }}
      >
        <Title>Basic</Title>
        <Description>
          The Button comes with three types: text, contained(default), outlined.
        </Description>
        <Basic themeType={themeType} />

        <Title>Text Button</Title>
        <TextButton themeType={themeType} />

        <Title>Contained Button</Title>
        <ContainedButton themeType={themeType} />

        <Title>Outlined Button</Title>
        <OutlinedButton themeType={themeType} />

        <Title>Color</Title>
        <Description>
          The Button comes with nine colors: brand, primary, secondary, accept,
          info, light, success, warning, danger.
        </Description>
        <TextButtonColors themeType={themeType} />
        <ContainedButtonColors themeType={themeType} />
        <OutlinedButtonColors themeType={themeType} />

        <Title>Sizes</Title>
        <Description>
          The Button comes with three sizes: small. medium(default), large.
        </Description>
        <Sizes themeType={themeType} />

        <Title>Loading</Title>
        <Description>
          Set loading prop to generate always loading button. And change loading
          spinner color by using indicatorColor prop.
        </Description>
        <Loading themeType={themeType} />

        <Title>Add Elements</Title>
        <Description>
          Add additional element by using startElement, endElement props.
        </Description>
        <AddElements themeType={themeType} />

        <Title>Event</Title>

        <Title>onPress</Title>
        <Description>
          When pressing button, some event can generate by using onPress prop.
        </Description>
        <OnPressEvent themeType={themeType} />

        <Title>IconButton</Title>

        <Title>Basic</Title>
        <Description>
          The IconButton that can add buttons using icons.
        </Description>
        <IconButtonBasic themeType={themeType} />

        {/*<Title>Colors</Title>*/}
        {/*<Description>*/}
        {/*  `IconButton` that can add buttons using icons.*/}
        {/*</Description>*/}
        {/*<IconButtonColors themeType={themeType} />*/}

        <Title>Sizes</Title>
        <Description>
          The IconButton comes with three sizes: small. medium(default), large.
        </Description>
        <IconButtonSizes themeType={themeType} />
      </ScrollContainer>
    </StoryContainer>
  );
};

export default ButtonDefault;
