import {Checkbox, Hr} from '../../../main';
import {FC, useState} from 'react';
import {Platform, View} from 'react-native';

import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.background};
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 0 16px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;

const CheckboxStory: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ScrollContainer
      contentContainerStyle={{
        alignSelf: 'stretch',
        height: Platform.select({
          web: '100%',
        }),
      }}>
      <Container>
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
          Checkbox with left element
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
          Checkbox with right element
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
      </Container>
    </ScrollContainer>
  );
};

export default CheckboxStory;
