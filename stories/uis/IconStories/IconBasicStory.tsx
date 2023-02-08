import {Icon, doobooIconList} from '../../../main';

import type {IconNames} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.bg.basic};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

function IconBasicStory(): ReactElement {
  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Container style={{paddingVertical: 60}}>
          {(doobooIconList as IconNames).map((icon): ReactElement => {
            return <StyledIcon key={icon} size={16} name={icon} />;
          })}
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
}

export default IconBasicStory;
