import React, {FC, useState} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

import {RadioButtonType} from '../RadioButton';
import {RadioGroup} from '../..';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
const data = ['Person', 'Animal', 'Bird', 'Other'];

const RadioButtonStory: FC = () => {
  const {theme} = useTheme();
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

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
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 12}}>
          Radio Group
        </StyledText>
        {types.map((el, i) => {
          return (
            <View
              key={`${el}-${i}`}
              style={{flexDirection: 'row', marginTop: 24}}
            >
              <RadioGroup
                title={el}
                data={data}
                type={el as RadioButtonType}
                selectedValue={selectedValue}
                selectValue={(value) => setSelectedValue(value)}
              />
            </View>
          );
        })}
        <StyledText style={{fontSize: 18, marginTop: 60, marginBottom: 12}}>
          With elements
        </StyledText>
        {types.map((el, i) => {
          return (
            <View
              key={`${el}-${i}`}
              style={{flexDirection: 'row', marginTop: 24}}
            >
              <RadioGroup
                title={el}
                data={data}
                type={el as RadioButtonType}
                selectedValue={selectedValue}
                selectValue={(value) => setSelectedValue(value)}
                labels={data}
              />
            </View>
          );
        })}
      </ScrollContainer>
    </View>
  );
};

export default RadioButtonStory;
