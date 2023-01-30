import {useTheme} from '@dooboo-ui/theme';
import type {FC} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup} from '../..';
import {Button} from '../../../Button';
import {Typography} from '../../../Typography';

const MultiSelect: FC = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const {theme} = useTheme();

  const [selectedIndices, setSelectedIndices] = useState([0]);

  return (
    <View>
      <Typography.Heading1 style={{paddingVertical: 20}}>
        Multi Select
      </Typography.Heading1>
      <ButtonGroup
        data={data}
        selectedIndices={selectedIndices}
        borderStyle={{color: theme.button.secondary.bg, width: 1}}
        renderItem={({item, selected, index: itemIndex}) => (
          <Button
            text={item}
            borderRadius={0}
            type={selected ? 'solid' : 'text'}
            color={'secondary'}
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
    </View>
  );
};

export default MultiSelect;
