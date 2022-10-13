import type {AccordionData, AccordionListType} from '../';
import {Accordion} from '../';
import type {ReactElement} from 'react';
import React from 'react';
import {boolean, number} from '@storybook/addon-knobs';

import {Icon} from '../../Icon';
import {Typography} from '../../Typography';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useTheme} from '../../../main';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  margin-left: 20px;
  color: white;
  font-size: 18px;
`;

const CustomStyledItem = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  position: absolute;
  left: 40px;
`;

const data: AccordionListType = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

export const AccordionDefault = (): ReactElement => {
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer style={{backgroundColor: theme.background}}>
      <ScrollContainer>
        <Container>
          <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
            Demo
          </Typography.Heading3>
          <Accordion
            data={data}
            shouldAnimate={boolean('shouldAnimate', true)}
            animDuration={number('animDuration', 200)}
          />
        </Container>

        <Container>
          <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
            Custom Style
          </Typography.Heading3>
          <Accordion
            data={data.map<AccordionData>((datum) => ({
              ...datum,
              title: datum.title.toUpperCase(),
            }))}
            renderTitle={(item) => (
              <View
                style={{
                  paddingLeft: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Icon name="search-light" color={theme.textContrast} />
                <Title>{item}</Title>
              </View>
            )}
            renderBody={(item) => <CustomStyledItem>{item}</CustomStyledItem>}
            toggleElement={
              <Icon name="chevron-down-light" color={theme.textContrast} />
            }
            styles={{
              titleContainer: {
                backgroundColor: 'gray',
              },
              bodyContainer: {
                backgroundColor: 'lightgray',
              },
            }}
          />
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
};
