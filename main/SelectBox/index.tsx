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
import {DoobooTheme, light, useTheme} from '../theme';
import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';

import {Icon} from '../Icon';
import {Typography} from '../Typography';
import styled from '@emotion/native';
import {withTheme} from '@emotion/react';

const Title = styled.View`
  width: 200px;
  height: 30px;
  border-width: 1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Item = styled.View`
  position: absolute;
  width: 200px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
`;

type Styles = {
  titleContainer?: StyleProp<ViewStyle>;
  titleText?: StyleProp<TextStyle>;
  rightElementContainer?: StyleProp<ViewStyle>;
  itemContainer?: StyleProp<ViewStyle>;
  itemText?: StyleProp<TextStyle>;
};
interface ItemCompProps {
  value: string;
  styles?: Styles;
  itemHeight?: number;
  translateYValue: number;
  itemActiveOpacity: number;
  onPress: (value: string) => void;
}

const ItemComp: FC<ItemCompProps> = ({
  value,
  styles,
  itemHeight,
  translateYValue,
  itemActiveOpacity,
  onPress: setValue,
}) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      onPress={() => setValue(value)}
      activeOpacity={itemActiveOpacity}>
      <Item
        style={[
          {
            borderColor: theme.primary,
            backgroundColor: theme.textContrast,
            height: itemHeight ?? 30,
            transform: [{translateY: translateYValue}],
          },
          styles?.itemContainer,
        ]}>
        <Typography.Body2 style={styles?.itemText}>{value}</Typography.Body2>
      </Item>
    </TouchableOpacity>
  );
};

interface Props {
  data: string[];
  theme?: DoobooTheme;
  styles?: Styles;
  rotateDuration?: number;
  itemHeight?: number;
  titleActiveOpacity?: number;
  itemActiveOpacity?: number;
  isRotate?: boolean;
  hasRightElement?: boolean;
  rightElement?: ReactElement;
}

const Component: FC<Props> = ({
  styles,
  data,
  itemHeight,
  rotateDuration = 200,
  titleActiveOpacity = 1,
  itemActiveOpacity = 1,
  isRotate = true,
  hasRightElement = true,
  rightElement = <Icon name="chevron-down-light" />,
}) => {
  const ITEM_HEIGHT = itemHeight ?? 30;
  const {theme} = useTheme();
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

    if (!isRotate) rotateAnimValue.setValue(toValue);

    Animated.timing(rotateAnimValue, {
      toValue,
      duration: rotateDuration,
      easing: Easing.linear,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start();
  }, [isOpened, rotateAnimValue, rotateDuration, isRotate]);

  return (
    <View style={{zIndex: 999}}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={titleActiveOpacity}>
        <Title
          style={[
            {
              borderColor: theme.primary,
              backgroundColor: theme.textContrast,
            },
            styles?.titleContainer,
          ]}>
          <Typography.Body2 style={styles?.titleText}>
            {selectedValue ?? data[0]}
          </Typography.Body2>
          {hasRightElement ? (
            <Animated.View
              style={[
                {
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
                },
                styles?.rightElementContainer,
              ]}>
              {rightElement}
            </Animated.View>
          ) : null}
        </Title>
      </TouchableOpacity>
      <View>
        {isOpened &&
          data.map((datum, key) => (
            <ItemComp
              styles={styles}
              value={datum}
              key={key}
              onPress={handleSelectedValue}
              itemHeight={ITEM_HEIGHT}
              translateYValue={ITEM_HEIGHT * key}
              itemActiveOpacity={itemActiveOpacity}
            />
          ))}
      </View>
    </View>
  );
};

Component.defaultProps = {theme: light};

export const SelectBox = withTheme(Component);
