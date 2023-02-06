import {
  Basic,
  Colors,
  Disabled,
  IconElement,
  Loading,
  LoadingElement,
  Sizes,
} from './components';
import {
  Description,
  ScrollContainer,
  StoryContainer,
  Title,
} from '../../GlobalStyles';

import type {ReactElement} from 'react';

function IconButtonBasic(): ReactElement {
  return (
    <StoryContainer>
      <ScrollContainer
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <Title>Basic</Title>
        <Basic />

        <Title>Colors</Title>
        <Colors />

        <Title>Disabled</Title>
        <Disabled />

        <Title>Sizes</Title>
        <Sizes />

        <Title>Loading</Title>
        <Loading />
        <Description>
          If you want to change the loading indicator you can use the
          loadingElement property
        </Description>
        <LoadingElement />

        <Title>IconElement</Title>
        <IconElement />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default IconButtonBasic;
