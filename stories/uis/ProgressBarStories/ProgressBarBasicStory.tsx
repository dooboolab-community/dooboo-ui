import styled from '@emotion/native';

import {ProgressBar} from '../../../main';
import {StoryWrapper} from '../../Common';
import {StoryTitle} from '../../GlobalStyles';

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

export default function ProgressBarBasicStory(): JSX.Element {
  return (
    <StoryWrapper>
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
    </StoryWrapper>
  );
}
