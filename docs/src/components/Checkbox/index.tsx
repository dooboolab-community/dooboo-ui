import {
  Checkbox,
  Hr,
  LoadingIndicator,
  ThemeProvider,
  useTheme,
} from 'dooboo-ui';
import React, {FC, ReactElement, useState} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;

const CheckboxDefault: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) return <LoadingIndicator />;

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
          Checkbox
        </StyledText>
        <View style={{flexDirection: 'row'}}>
          <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
          <View style={{width: 8}} />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            type="secondary"
          />
          <View style={{width: 8}} />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            type="success"
          />
          <View style={{width: 8}} />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            type="warning"
          />
          <View style={{width: 8}} />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            type="info"
          />
          <View style={{width: 8}} />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            type="danger"
          />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            disabled
          />
        </View>
        <Hr style={{marginTop: 40}} />
        <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
          Checkbox with right element
        </StyledText>
        <View style={{flexDirection: 'column'}}>
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            rightElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            rightElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            rightElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
        </View>
        <Hr style={{marginTop: 40}} />
        <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
          Checkbox withs left element
        </StyledText>
        <View style={{flexDirection: 'column'}}>
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            leftElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            leftElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            leftElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
        </View>
        <View style={{height: 60}} />
      </ScrollContainer>
    </View>
  );
};

export const Light = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <CheckboxDefault />
  </ThemeProvider>
);

export const Dark = (): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <CheckboxDefault />
  </ThemeProvider>
);
