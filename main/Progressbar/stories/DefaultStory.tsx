import {Progressbar} from '../';
import React from 'react';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  width: 100%;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
  justify-content: center;
  align-items: center;
`;

const Section = styled.View`
  width: 90%;
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.primary};
`;

const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.primary};
`;

const ProgressbarDefault: React.FC = () => {
  return (
    <StoryContainer>
      <Title>Progressbar</Title>
      <Section>
        <SubTitle>Info</SubTitle>
        <Progressbar value={25} />
      </Section>
      <Section>
        <SubTitle>Warning</SubTitle>
        <Progressbar value={50} type="warning" />
      </Section>
      <Section>
        <SubTitle>Danger</SubTitle>
        <Progressbar value={75} type="danger" />
      </Section>
      <Section>
        <SubTitle>Success</SubTitle>
        <Progressbar value={100} type="success" />
      </Section>
    </StoryContainer>
  );
};

export default ProgressbarDefault;
