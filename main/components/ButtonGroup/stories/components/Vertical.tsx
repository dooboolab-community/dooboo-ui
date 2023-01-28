import type {FC} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup} from '../..';
import {Button} from '../../../Button';
import {Typography} from '../../../Typography';

const Vertical: FC = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      <Typography.Heading1 style={{paddingVertical: 20}}>
        Vertical
      </Typography.Heading1>

      <ButtonGroup
        vertical
        data={data}
        selectedIndex={selectedIndex}
        renderItem={({item, selected, index: itemIndex}) => (
          <Button
            text={item}
            rounded={0}
            color={selected ? 'success' : 'light'}
            onPress={() => setSelectedIndex(itemIndex)}
          />
        )}
      />
    </View>
  );
};

export default Vertical;
