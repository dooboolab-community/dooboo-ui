import React, {useState} from 'react';

import {ButtonGroup} from '..';
import {Button} from '../../Button';
import {useTheme} from '@dooboo-ui/theme';
import {SafeAreaView, ScrollView} from 'react-native';
import {Typography} from '../../Typography';
import type {IconName} from '../../Icon';
import {Icon} from '../../Icon';

const ButtonGroupBasic = (): React.ReactElement => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const customData: {text: string; icon: IconName}[] = [
    {text: 'Item 1', icon: 'home-solid'},
    {text: 'Item 2', icon: 'account-solid'},
    {text: 'Item 3', icon: 'tiktok-solid'},
  ];

  const {theme} = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedIndices, setSelectedIndices] = useState([0]);

  return (
    <SafeAreaView
      style={{flex: 1, alignSelf: 'stretch', backgroundColor: theme.bg.basic}}
    >
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'stretch',
          paddingVertical: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
              color={selected ? 'primary' : 'light'}
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
              color={selected ? 'primary' : 'light'}
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
        <Typography.Heading1>Custom Button</Typography.Heading1>
        <ButtonGroup
          vertical
          data={customData}
          selectedIndices={selectedIndices}
          borderStyle={{width: 0, radius: 0}}
          renderItem={({item, selected, index: itemIndex}) => (
            <Button
              onPress={() =>
                setSelectedIndices((prev) =>
                  prev.includes(itemIndex)
                    ? prev.filter((v) => v !== itemIndex)
                    : [...prev, itemIndex],
                )
              }
              rounded={0}
              startElement={
                <Icon
                  name={item.icon}
                  size={14}
                  color={selected ? theme.text.contrast : theme.text.basic}
                  style={{marginRight: 8}}
                />
              }
              text={item.text}
              color={selected ? 'primary' : 'light'}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonGroupBasic;
