import React from 'react';
import styled from '@emotion/native';

export const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.default};
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  justifyContent: 'center',
  alignItems: 'center',
  color: ${({theme}) => theme.text.default};
`;

export const Title = styled.Text`
  margin: 16px 0px 8px 0px;
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.text.default};
`;

export const Description = styled.Text`
  margin: 8px;
  font-size: 16px;
  color: ${({theme}) => theme.text.default};
`;

export const Section = styled.View`
  margin-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.bg.default};
`;
