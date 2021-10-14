import {Checkbox, CheckboxType, Hr, useTheme} from '../..';
import {FC, ReactNode, useState} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;

const types: (CheckboxType | undefined)[] = [
  undefined,
  'secondary',
  'success',
  'warning',
  'info',
  'danger',
];

const LabelWapper: FC<{
  label: string;
  children: ReactNode;
}> = ({label, children}) => (
  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <StyledText>{label}</StyledText>

    {children}
  </View>
);

const CheckboxStory: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  const CheckboxForms: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox
      </StyledText>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {types.map((type) => (
          <LabelWapper key={type} label={type ?? 'default'}>
            <Checkbox
              style={{margin: 25}}
              checked={checked}
              onPress={() => setChecked(!checked)}
              type={type}
            />
          </LabelWapper>
        ))}

        <LabelWapper label="disabled">
          <Checkbox
            style={{margin: 25}}
            checked={checked}
            onPress={() => setChecked(!checked)}
            disabled
          />
        </LabelWapper>
      </View>
    </>
  );

  const CheckboxWithRightElement: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox with right element
      </StyledText>

      <View style={{flexDirection: 'column'}}>
        {[1, 2, 3].map((i) => (
          <Checkbox
            key={i}
            checked={checked}
            onPress={() => setChecked(!checked)}
            rightElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
        ))}
      </View>
    </>
  );

  const CheckboxWithLeftElement: FC = () => (
    <>
      <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
        Checkbox with left element
      </StyledText>

      <View style={{flexDirection: 'column'}}>
        {[1, 2, 3].map((i) => (
          <Checkbox
            key={i}
            checked={checked}
            onPress={() => setChecked(!checked)}
            leftElement={<StyledText>Hello this is a checkbox</StyledText>}
          />
        ))}
      </View>
    </>
  );

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
