import {Button, ButtonGroup, Typography} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

function SingleSelect(): ReactElement {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const {theme} = useTheme();

  return (
    <View>
      <Typography.Heading1 style={{paddingBottom: 20, paddingHorizontal: 20}}>
        Single Select
      </Typography.Heading1>

      <ButtonGroup
        data={data}
        selectedIndex={selectedIndex}
        borderStyle={{color: theme.button.primary.bg}}
        renderItem={({item, selected, index: itemIndex}) => (
          <Button
            text={item}
            borderRadius={0}
            color={selected ? 'primary' : 'light'}
            onPress={() => setSelectedIndex(itemIndex)}
          />
        )}
      />
    </View>
  );
}

export default SingleSelect;
