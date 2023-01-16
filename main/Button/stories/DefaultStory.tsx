import React from 'react';
import type {FC} from 'react';
import {ThemeType} from '@dooboo-ui/theme';
import {
  Basic,
  TextButtonColors,
  SolidButtonColors,
  OutlinedButtonColors,
  Disabled,
  Sizes,
  Loading,
  LoadingElement,
  StartElementAndEndElement,
  Custom,
  Counter,
  GoogleSignIn,
} from './components';

import {
  StoryContainer,
  ScrollContainer,
  Title,
  Description,
  Tag,
} from '../../GlobalStyles';

const ButtonDefault: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 10,
        }}
      >
        <Title>Basic</Title>
        <Basic themeType={themeType} />

        <Title>Color</Title>
        <TextButtonColors themeType={themeType} />
        <SolidButtonColors themeType={themeType} />
        <OutlinedButtonColors themeType={themeType} />

        <Title>Disabled</Title>
        <Disabled themeType={themeType} />

        <Title>Sizes</Title>
        <Sizes themeType={themeType} />

        <Title>Loading</Title>
        <Loading themeType={themeType} />
        <Description>
          If you want to change the loading indicator you can use the
          loadingElement property
        </Description>
        <LoadingElement themeType={themeType} />

        <Title>Custom Styles</Title>
        <Description>
          Within the styles attribute there are 5 options : container, text,
          disabled, disabledText,hovered.
        </Description>
        <Custom themeType={themeType} />

        <Title>Add Start Element And End Element</Title>
        <StartElementAndEndElement themeType={themeType} />

        <Title>Sample</Title>
        <Description>Counter</Description>
        <Counter themeType={themeType} />

        <Description>Google Sign In</Description>
        <GoogleSignIn themeType={themeType} />
      </ScrollContainer>
    </StoryContainer>
  );
};

export default ButtonDefault;
