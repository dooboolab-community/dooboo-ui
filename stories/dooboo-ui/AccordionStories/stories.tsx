import {Accordion, Icon, ThemeProvider} from '../../../main';
import React, {Fragment, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
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

const data = [
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
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ThemeProvider initialThemeType="light">
      <SafeAreaView style={{top: 100}}>
        <Container>
          <Accordion
            data={data}
            shouldAnimate={true}
            collapseOnStart={true}
            animDuration={400}
            activeOpacity={1}
          />
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export const AccordionCustomStyle = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ThemeProvider initialThemeType="light">
      <SafeAreaView style={{top: 100}}>
        <Container>
          <Accordion
            data={data}
            shouldAnimate={true}
            collapseOnStart={true}
            animDuration={300}
            activeOpacity={1}
            renderTitle={(item) => {
              return (
                <View
                  style={{
                    paddingLeft: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <StyledIcon name="search-light" />
                  <Title>{item}</Title>
                </View>
              );
            }}
            renderBody={(item) => {
              return (
                <Fragment>
                  <CustomStyledItem>{item}</CustomStyledItem>
                </Fragment>
              );
            }}
            toggleElement={<StyledIcon name="chevron-down-light" />}
            titleContainerStyle={{
              backgroundColor: 'gray',
            }}
            bodyContainerStyle={{
              backgroundColor: 'lightgray',
            }}
          />
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};
