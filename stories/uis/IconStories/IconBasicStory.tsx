// Caveat: Expo web needs React to be imported
import {View} from 'react-native';
import styled from '@emotion/native';

import {doobooIconList, Icon, Typography} from '../../../main';

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

function IconBasicStory(): JSX.Element {
  return (
    <StoryContainer>
      <ScrollContainer contentContainerStyle={{alignSelf: 'stretch'}}>
        <Container style={{paddingVertical: 60}}>
          {doobooIconList.map((icon): JSX.Element => {
            return (
              <View
                key={icon}
                style={{
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                }}
              >
                <StyledIcon name={icon} size={16} />
                <Typography.Body2 style={{fontSize: 12, textAlign: 'center'}}>
                  {icon}
                </Typography.Body2>
              </View>
            );
          })}
        </Container>
      </ScrollContainer>
      <View style={{height: 40}} />
    </StoryContainer>
  );
}

export default IconBasicStory;
