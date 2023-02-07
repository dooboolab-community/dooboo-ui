import {Button, ButtonGroup, Typography} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

const Vertical = (): ReactElement => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const {theme} = useTheme();

  return (
    <View>
      <Typography.Heading1 style={{padding: 20}}>Vertical</Typography.Heading1>

      <ButtonGroup
        direction="column"
        data={data}
        selectedIndex={selectedIndex}
        borderStyle={{color: theme.button.success.bg}}
        renderItem={({item, selected, index: itemIndex}) => (
          <Button
            text={item}
            borderRadius={0}
            color={selected ? 'success' : 'light'}
            onPress={() => setSelectedIndex(itemIndex)}
          />
        )}
      />
    </View>
  );
};

export default Vertical;
