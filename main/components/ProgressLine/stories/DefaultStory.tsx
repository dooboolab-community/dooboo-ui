import {ProgressLine} from '..';
import React from 'react';
import styled from '@emotion/native';

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

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.role.primary};
`;

const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.role.primary};
`;

const ProgressLineDefault: React.FC = () => {
  return (
    <StoryContainer>
      <Title>ProgressLine</Title>
      <Section>
        <SubTitle>Info</SubTitle>
        <ProgressLine value={25} />
      </Section>
      <Section>
        <SubTitle>Warning</SubTitle>
        <ProgressLine value={50} type="warning" />
      </Section>
      <Section>
        <SubTitle>Danger</SubTitle>
        <ProgressLine value={75} type="danger" />
      </Section>
      <Section>
        <SubTitle>Success</SubTitle>
        <ProgressLine value={100} type="success" />
      </Section>
    </StoryContainer>
  );
};

export default ProgressLineDefault;
