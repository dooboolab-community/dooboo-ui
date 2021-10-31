import React, {Fragment, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Accordion} from '../';
import {Icon} from '../../Icon';
import {ThemeProvider} from '@dooboo-ui/theme';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
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

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <ThemeProvider initialThemeType="light">
      <Container>
        <Accordion
          data={data}
          shouldAnimate={true}
          collapseOnStart={true}
          animDuration={400}
          activeOpacity={1}
        />
      </Container>
    </ThemeProvider>
  );
};

export const AccordionCustomStyle = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <ThemeProvider initialThemeType="light">
      <SafeAreaView style={{width: '100%', height: '100%'}}>
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
                  }}
                >
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
      </SafeAreaView>
    </ThemeProvider>
  );
};
