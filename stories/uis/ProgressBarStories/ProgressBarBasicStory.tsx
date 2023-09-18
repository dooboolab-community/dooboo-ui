// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';

import {ProgressBar} from '../../../main';
import {StoryTitle} from '../../GlobalStyles';

const StoryContainer = styled.View`
  flex: 1;
  width: 100%;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

const Section = styled.View`
  width: 90%;
  margin-bottom: 40px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.role.primary};
`;

function ProgressBarBasicStory(): JSX.Element {
  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <Section>
        <SubTitle>Info</SubTitle>
        <ProgressBar value={25} />
      </Section>
      <Section>
        <SubTitle>Warning</SubTitle>
        <ProgressBar type="warning" value={50} />
      </Section>
      <Section>
        <SubTitle>Danger</SubTitle>
        <ProgressBar type="danger" value={75} />
      </Section>
      <Section>
        <SubTitle>Success</SubTitle>
        <ProgressBar type="success" value={100} />
      </Section>
    </StoryContainer>
  );
}

export default ProgressBarBasicStory;
