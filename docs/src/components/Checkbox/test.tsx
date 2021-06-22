import {Button, Checkbox, Hr, LoadingIndicator, ThemeProvider} from 'dooboo-ui';
import type {FC, ReactElement} from 'react';
import {FontAwesome, createIconSetFromIcoMoon} from '@expo/vector-icons';
import {IC_FACEBOOK, IC_GOOGLE} from '../../icon';
import {Image, View} from 'react-native';
import React, {useState} from 'react';
import styled, {css} from '@emotion/native';

import {action} from '@storybook/addon-actions';
import {useFonts} from 'expo-font';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const CheckboxDefault: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) return <LoadingIndicator />;

  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Checkbox checked={true} />
      </ScrollContainer>
    </StoryContainer>
  );
};

const Default = (): ReactElement => (
  <ThemeProvider>
    <>
      <FontAwesome name="plus" />
      <CheckboxDefault />
    </>
  </ThemeProvider>
);

export default Default;
