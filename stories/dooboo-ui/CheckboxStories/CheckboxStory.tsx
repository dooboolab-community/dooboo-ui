import {Checkbox, CheckboxType, Hr, useTheme} from '../../../main';
import {FC, useState} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;

const CheckboxStory: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  const types: (CheckboxType | undefined)[] = [
    undefined,
    'secondary',
    'success',
    'warning',
    'info',
    'danger',
  ];

  const CheckboxForms: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox
      </StyledText>

      <View style={{flexDirection: 'row'}}>
        {types.map((type) => (
          <>
            <Checkbox
              checked={checked}
              onPress={() => setChecked(!checked)}
              type={type}
            />
            <View style={{width: 8}} />
          </>
        ))}

        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          disabled
        />
      </View>
    </>
  );

  const CheckboxWithRightElement: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox with right element
      </StyledText>

      <View style={{flexDirection: 'column'}}>
        {Array(3).fill(
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            rightElement={<StyledText>Hello this is a checkbox</StyledText>}
          />,
        )}
      </View>
    </>
  );

  const CheckboxWithLeftElement: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox with left element
      </StyledText>

      <View style={{flexDirection: 'column'}}>
        {Array(3).fill(
          <Checkbox
            checked={checked}
            onPress={() => setChecked(!checked)}
            leftElement={<StyledText>Hello this is a checkbox</StyledText>}
          />,
        )}
      </View>
    </>
  );

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
        <CheckboxForms />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithRightElement />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithLeftElement />
      </ScrollContainer>
    </View>
  );
};

export default CheckboxStory;
