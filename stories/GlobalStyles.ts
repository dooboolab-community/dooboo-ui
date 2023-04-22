import styled from '@emotion/native';

export const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  padding: 0 12px;
  background-color: ${({theme}) => theme.bg.basic};
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  padding: 0 12px;
  color: ${({theme}) => theme.text.basic};
`;

export const StoryTitle = styled.Text`
  margin: 8px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.text.basic};
`;

export const StoryDescription = styled.Text`
  margin: 8px 12px;
  font-size: 16px;
  color: ${({theme}) => theme.text.basic};
`;

export const StorySection = styled.View`
  margin-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.bg.basic};
`;

export const StoryTag = styled.Text`
  background-color: ${({theme}) => theme.bg.paper};
  color: ${({theme}) => theme.text.basic};
  padding: 4px 8px;
  margin: 0 8px 8px 0;
`;
