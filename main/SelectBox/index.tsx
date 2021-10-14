import {
  Animated,
  Easing,
  Platform,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useEffect, useRef, useState} from 'react';

import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {Icon} from '../Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Typography} from '../Typography';
import styled from '@emotion/native';
import {useHover} from 'react-native-web-hooks';
import {DoobooTheme, useTheme} from '..';

const Title = styled.View`
  width: 200px;
  height: 30px;
  border-width: 1px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Item = styled.View`
  height: 30px;
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
  hovered?: StyleProp<ViewStyle>;
};
interface ItemCompProps<T> {
  value: T;
  order: number;
  styles?: Styles;
  setIsOpened: (value: boolean) => void;
  itemTouchableProps?: Partial<TouchableOpacityProps & GenericTouchableProps>;
  onSelect: (value: T, index: number) => void;
}

function ItemComp<T extends {value: string} | string>({
  value,
  order,
  styles,
  theme,
  setIsOpened,
  itemTouchableProps,
  onSelect,
}: ItemCompProps<T> & {theme: DoobooTheme}): ReactElement {
  const handlePress = (): void => {
    onSelect(value, order);
    setIsOpened(false);
  };

  const ref = useRef(null);
  const hover = useHover(ref);

  return (
    <TouchableOpacity {...itemTouchableProps} onPress={handlePress} ref={ref}>
      <Item
        style={[
          {
            borderColor: theme.primary,
            backgroundColor: theme.textContrast,
          },
          styles?.itemContainer,
          hover && {backgroundColor: theme.secondary},
          hover && styles?.hovered,
        ]}
      >
        <Typography.Body2 style={styles?.itemText}>
          {typeof value === 'object' ? value.value : value}
        </Typography.Body2>
      </Item>
    </TouchableOpacity>
  );
}

export interface Props<T> {
  data: T[];
  selectedIndex: number;
  onSelect: (item: T, index: number) => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  isRightElemAnimated?: boolean;
  rotateAnimDuration?: number;
  rightElement?: ReactElement | null;
  disabled?: boolean;
  titleTouchableProps?: Partial<TouchableOpacityProps & GenericTouchableProps>;
  itemTouchableProps?: Partial<TouchableOpacityProps & GenericTouchableProps>;
}

export function SelectBox<T extends {value: string} | string>({
  data,
  selectedIndex = 0,
  onSelect,
  onPress,
  style,
  styles,
  isRightElemAnimated = true,
  rotateAnimDuration = 200,
  rightElement = <Icon name="chevron-down-light" />,
  disabled = false,
  titleTouchableProps = {activeOpacity: 1},
  itemTouchableProps = {activeOpacity: 1},
}: Props<T>): ReactElement {
  const [isOpened, setIsOpened] = useState(false);

  const selectedValue = data[selectedIndex];

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const {theme} = useTheme();

  const {primary, textContrast} = theme;

  useEffect(() => {
    const toValue = isOpened ? 1 : 0;

    if (!isRightElemAnimated) rotateAnimValue.setValue(toValue);

    Animated.timing(rotateAnimValue, {
      toValue,
      duration: rotateAnimDuration,
      easing: Easing.linear,
      useNativeDriver: Platform.OS !== 'web' ? true : false,
    }).start();
  }, [isOpened, rotateAnimValue, rotateAnimDuration, isRightElemAnimated]);

  return (
    <View style={style}>
      <TouchableOpacity
        {...titleTouchableProps}
        disabled={disabled}
        onPress={() => {
          onPress?.();
          setIsOpened((prev) => !prev);
        }}
      >
        <Title
          style={[
            {
              borderColor: primary,
              backgroundColor: textContrast,
            },
            styles?.titleContainer,
          ]}
        >
          <Typography.Body2 style={styles?.titleText}>
            {typeof selectedValue === 'object'
              ? selectedValue.value
              : selectedValue}
          </Typography.Body2>
          {rightElement ? (
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
              ]}
            >
              {rightElement}
            </Animated.View>
          ) : null}
        </Title>
      </TouchableOpacity>
      <View>
        <View style={{position: 'absolute'}}>
          {isOpened &&
            data.map((datum, key) => (
              <ItemComp
                key={key}
                order={key}
                value={datum}
                styles={styles}
                setIsOpened={setIsOpened}
                onSelect={onSelect}
                itemTouchableProps={itemTouchableProps}
                theme={theme}
              />
            ))}
        </View>
      </View>
    </View>
  );
}
