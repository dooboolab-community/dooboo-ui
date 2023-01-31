import {useTheme} from '@dooboo-ui/theme';
import type {FC} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup} from '../..';
import {Button} from '../../../Button';
import type {IconName} from '../../../Icon';
import {Icon} from '../../../Icon';
import {Typography} from '../../../Typography';

const CustomData: FC = () => {
  const {theme} = useTheme();

  const data: {text: string; icon: IconName}[] = [
    {text: 'Item 1', icon: 'home-solid'},
    {text: 'Item 2', icon: 'account-solid'},
    {text: 'Item 3', icon: 'tiktok-solid'},
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View>
      <Typography.Heading1 style={{paddingVertical: 20}}>
        Custom Data
      </Typography.Heading1>
      <ButtonGroup
        data={data}
        selectedIndex={selectedIndex}
        borderStyle={{width: 0, radius: 0}}
        renderItem={({item, selected, index: itemIndex}) => (
          <Button
            onPress={() => setSelectedIndex(itemIndex)}
            borderRadius={0}
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
    </View>
  );
};

export default CustomData;
