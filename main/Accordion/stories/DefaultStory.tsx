import {
  Accordion,
  AccordionData,
  AccordionListType,
  AccordionStyles,
} from '../';
import React, {ReactElement} from 'react';

import {Icon} from '../../Icon';
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

const customStyles: AccordionStyles = {
  titleContainer: {
    backgroundColor: 'gray',
  },
  bodyContainer: {
    backgroundColor: 'lightgray',
  },
};

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
          <Accordion data={data} />
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
};

export const AccordionCustomStyle = (): ReactElement => {
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
          <Accordion
            data={data.map<AccordionData>((datum) => ({
              ...datum,
              title: datum.title.toUpperCase(),
            }))}
            shouldAnimate={true}
            collapseOnStart={true}
            animDuration={300}
            activeOpacity={1}
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
            styles={customStyles}
          />
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
};
