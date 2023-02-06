import {
  Basic,
  Color,
  Custom,
  Disabled,
  Event,
  Loading,
  LoadingElement,
  Sizes,
  StartAndEnd,
} from './basics';
import {
  Description,
  ScrollContainer,
  StoryContainer,
  Title,
} from '../../GlobalStyles';

import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';

type Props = {themeType: ThemeType};

function ButtonDefault({themeType}: Props): ReactElement {
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
        <Color themeType={themeType} />

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

        <Title>Start and End element</Title>
        <StartAndEnd themeType={themeType} />

        <Title>Event</Title>
        <Event themeType={themeType} />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default ButtonDefault;
