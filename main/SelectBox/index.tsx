import {
  Animated,
  Easing,
  Platform,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useEffect, useRef, useState} from 'react';

import {DoobooTheme} from '../theme';
import {Icon} from '../Icon';
import {Typography} from '../Typography';
import styled from '@emotion/native';
import {withTheme} from '@emotion/react';

const Container = styled.View`
  z-index: 999;
`;

const SelectedItem = styled.View`
  width: 200px;
  height: 30px;
  border-width: 1px;
  border-color: ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.textContrast};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Item = styled.View`
  width: 200px;
  height: 30px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.textContrast};

  justify-content: center;
  align-items: center;
`;

interface ItemCompProps {
  value: string;
  translateYValue: number;
  onPress: (value: string) => void;
}

function ItemComp({
  value,
  translateYValue,
  onPress: setValue,
}: ItemCompProps): ReactElement {
  return (
    <TouchableOpacity onPress={() => setValue(value)} activeOpacity={1}>
      <Item
        style={{
          position: 'absolute',
          transform: [{translateY: translateYValue}],
        }}>
        <Typography.Body2>{value}</Typography.Body2>
      </Item>
    </TouchableOpacity>
  );
}

type Styles = {
  container?: StyleProp<ViewStyle>;
  itemContainer?: StyleProp<ViewStyle>;
  selectedText?: StyleProp<TextStyle>;
  itemText?: StyleProp<TextStyle>;
};

interface Props {
  data: string[];
  theme?: DoobooTheme;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  onPress?: () => void;
  rightElement?: ReactElement;
}

function Component({
  style,
  styles,
  data,
  rightElement = <Icon name="chevron-down-light" />,
}: Props): ReactElement {
  const ITEM_HEIGHT = 30;
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const handlePress = (): void => {
    setIsOpened((prev) => !prev);
  };

  const handleSelectedValue = (value: string): void => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const toValue = isOpened ? 1 : 0;

    Animated.timing(rotateAnimValue, {
      toValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start();
  }, [isOpened, rotateAnimValue]);

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handlePress} activeOpacity={1}>
          <SelectedItem>
            <Typography.Body2>{selectedValue ?? data[0]}</Typography.Body2>
            <Animated.View
              style={{
                position: 'absolute',
                right: 10,
                transform: [
                  {
                    rotate: rotateAnimValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              }}>
              {rightElement}
            </Animated.View>
          </SelectedItem>
        </TouchableOpacity>
        <View>
          {isOpened &&
            data.map((datum, key) => (
              <ItemComp
                value={datum}
                key={key}
                onPress={handleSelectedValue}
                translateYValue={ITEM_HEIGHT * key}
              />
            ))}
        </View>
      </Container>
    </>
  );
}

export const SelectBox = withTheme(Component);
