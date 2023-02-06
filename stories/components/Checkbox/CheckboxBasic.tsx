import {Checkbox, Hr} from '../../../main';
import type {FC, ReactElement, ReactNode} from 'react';
import React, {useState} from 'react';

import type {CheckboxType} from '../../../main';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
`;

const types: CheckboxType[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'info',
  'danger',
];

const LabelWrapper: FC<{
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
        <LabelWrapper key={`${type}_${i}`} label={type}>
          <Checkbox
            style={{margin: 25}}
            checked={checked}
            onPress={() => setChecked(!checked)}
            type={type}
          />
        </LabelWrapper>
      ))}

      <LabelWrapper label="disabled">
        <Checkbox
          style={{margin: 25}}
          checked={checked}
          onPress={() => setChecked(!checked)}
          disabled
        />
      </LabelWrapper>
    </View>
  </>
);

const CheckboxWithEndElement: FC<CheckBoxProps> = ({setChecked, checked}) => (
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

const CheckboxWithStartElement: FC<CheckBoxProps> = ({setChecked, checked}) => (
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

function CheckboxBasic(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.bg.basic,
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <ScrollContainer
        contentContainerStyle={{
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CheckboxForms setChecked={setChecked} checked={checked} />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithEndElement setChecked={setChecked} checked={checked} />
        <Hr style={{marginTop: 40}} />

        <CheckboxWithStartElement setChecked={setChecked} checked={checked} />
      </ScrollContainer>
    </View>
  );
}

export default CheckboxBasic;
