import type {ReactElement} from 'react';
import React, {useLayoutEffect, useMemo, useRef} from 'react';
import type {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';
import {Animated, Easing, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

import type {ButtonSizeType} from '../Button';
import type {IconName} from '../Icon';
import {Icon} from '../Icon';
import {IconButton} from '../IconButton';

interface Styles {
  FAB?: StyleProp<ViewStyle>;
  FABItem?: StyleProp<ViewStyle>;
  buttonSize: ButtonSizeType;
  iconSize?: number;
  gap?: number;
}

export interface FABItem {
  icon: IconName;
  id: string;
}

export interface FABProps<Item extends FABItem> {
  isActive: boolean;
  items: Item[];
  onPressFAB: () => void;
  onPressItem: (item?: Item) => void;
  renderFAB?: () => ReactElement;
  renderFABItem?: (item: Item, idx: number) => ReactElement;

  style?: StyleProp<ViewStyle>;
  styles?: Styles;
}

function FloatingActionButtons<Item extends FABItem = FABItem>({
  isActive,
  style,
  styles,
  items,
  onPressFAB,
  onPressItem,
  renderFAB,
  renderFABItem,
}: FABProps<Item>): ReactElement {
  const {
    FAB,
    FABItem,
    buttonSize = 'large',
    iconSize = 24,
    gap = 20,
  } = styles ?? {};

  const {theme} = useTheme();
  const spinValue = useRef(new Animated.Value(0));
  const positionValue = useRef(new Animated.Value(0));
  const fabHeight = useRef(0);

  useLayoutEffect(() => {
    const config = {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    };

    Animated.parallel([
      Animated.timing(spinValue.current, config),
      Animated.timing(positionValue.current, config),
    ]).start();
  }, [isActive]);

  const offsets = useMemo(
    () =>
      items?.map((_, idx) =>
        positionValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1 * (idx + 1) * (fabHeight.current + gap)],
        }),
      ),

    [items, fabHeight, gap],
  );

  const onLayout = (e: LayoutChangeEvent): void => {
    fabHeight.current = e.nativeEvent.layout.height;
  };

  return (
    <View
      style={[
        {
          position: 'absolute',
          right: 10,
          bottom: 10,
          zIndex: 999,
          flex: 1,
          alignSelf: 'stretch',
        },
        style,
      ]}
    >
      {items.map((item, idx) => {
        const {id, icon} = item;

        return (
          <Animated.View
            key={id}
            style={[
              {
                position: 'absolute',
                transform: [{translateY: offsets[idx]}],
              },
              FABItem,
            ]}
          >
            {renderFABItem ? (
              renderFABItem(item, idx)
            ) : (
              <IconButton
                testID={id}
                size={buttonSize}
                iconElement={
                  <Icon
                    color={theme.text.contrast}
                    size={iconSize}
                    name={icon}
                  />
                }
                onPress={() => onPressItem(item)}
              />
            )}
          </Animated.View>
        );
      })}
      <Animated.View
        onLayout={onLayout}
        style={[
          {
            transform: [
              {
                rotate: spinValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                }),
              },
            ],
          },
          FAB,
        ]}
      >
        {renderFAB ? (
          renderFAB()
        ) : (
          <IconButton
            size={buttonSize}
            iconElement={
              <Icon color={theme.text.contrast} size={iconSize} name="AddAlt" />
            }
            onPress={onPressFAB}
          />
        )}
      </Animated.View>
    </View>
  );
}

export {FloatingActionButtons as FAB};
