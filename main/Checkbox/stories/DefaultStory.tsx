import {Checkbox, Hr} from '../..';
import type {FC, ReactNode} from 'react';
import React, {useState} from 'react';

import type {CheckboxType} from '../..';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useTheme} from '@dooboo-ui/theme';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.default};
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
    <>
      <StyledText>{label}</StyledText>
      {children}
    </>
  </View>
);

type CheckBoxProps = {
  setChecked: (checked: boolean) => void;
  checked: boolean;
};

const CheckboxForms: FC<CheckBoxProps> = ({setChecked, checked}) => (
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
      {types.map((type, i) => (
        <LabelWapper key={`${type}_${i}`} label={type ?? 'default'}>
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

const CheckboxWithendElement: FC<CheckBoxProps> = ({setChecked, checked}) => (
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
          endElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
      ))}
    </View>
  </>
);

const CheckboxWithstartElement: FC<CheckBoxProps> = ({setChecked, checked}) => (
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
          startElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
      ))}
    </View>
  </>
);

const CheckboxStory: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View
      style={{
        backgroundColor: theme.bg.default,
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
        <CheckboxForms setChecked={setChecked} checked={checked} />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithendElement setChecked={setChecked} checked={checked} />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithstartElement setChecked={setChecked} checked={checked} />
      </ScrollContainer>
    </View>
  );
};

export default CheckboxStory;
