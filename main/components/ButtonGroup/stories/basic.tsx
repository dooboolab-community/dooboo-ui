import React, {useState} from 'react';

import {ButtonGroup} from '..';
import {Button} from '../../Button';
import {useTheme} from '@dooboo-ui/theme';
import {SafeAreaView, ScrollView} from 'react-native';
import {Typography} from '../../Typography';

const ButtonGroupBasic = (): React.ReactElement => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const {theme} = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedIndices, setSelectedIndices] = useState([0]);

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'stretch',
          paddingVertical: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.bg.basic,
        }}
      >
        <Typography.Heading1>Single Select</Typography.Heading1>
        <ButtonGroup
          data={data}
          selectedIndex={selectedIndex}
          renderItem={({item, selected, index: itemIndex}) => (
            <Button
              text={item}
              rounded={0}
              color={selected ? 'primary' : 'secondary'}
              onPress={() => setSelectedIndex(itemIndex)}
            />
          )}
        />
        <Typography.Heading1>Multi Select</Typography.Heading1>
        <ButtonGroup
          data={data}
          selectedIndices={selectedIndices}
          renderItem={({item, selected, index: itemIndex}) => (
            <Button
              text={item}
              rounded={0}
              color={selected ? 'primary' : 'secondary'}
              onPress={() =>
                setSelectedIndices((prev) =>
                  prev.includes(itemIndex)
                    ? prev.filter((v) => v !== itemIndex)
                    : [...prev, itemIndex],
                )
              }
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonGroupBasic;
