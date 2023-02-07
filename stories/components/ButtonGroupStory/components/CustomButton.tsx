import {ButtonGroup, Typography, useDooboo} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';

import type {ReactElement} from 'react';

function CustomButton(): ReactElement {
  const data: {title: string; style?: StyleProp<ViewStyle>}[] = [
    {
      title: 'Item 1',
      style: {width: 120},
    },
    {
      title: 'Item 2',
      style: {width: 80},
    },
    {
      title: 'Item 3',
      style: {width: 160},
    },
    {
      title: 'Item 4',
      style: {width: 120},
    },
  ];

  const commonStyle: StyleProp<ViewStyle> = {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const {theme} = useDooboo();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      <Typography.Heading1 style={{padding: 20}}>
        Custom Button UI
      </Typography.Heading1>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 20}}>
        <ButtonGroup
          data={data}
          selectedIndex={selectedIndex}
          styles={{container: {height: 50}}}
          borderStyle={{
            color: 'pink',
            width: 1,
          }}
          onPress={(index: number) => setSelectedIndex(index)}
          renderItem={({item: {title, style}, selected}) => (
            <View
              style={[
                commonStyle,
                style,
                selected && {backgroundColor: 'pink'},
              ]}
            >
              <Typography.Body1
                style={{
                  color: selected ? theme.text.basic : theme.text.disabled,
                }}
              >
                {title}
              </Typography.Body1>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default CustomButton;
