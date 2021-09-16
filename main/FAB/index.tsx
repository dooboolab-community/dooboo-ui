import {Animated, Easing, StyleProp, View, ViewStyle} from 'react-native';
import {ButtonSize, IconButton} from '../IconButton';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {ReactElement, useLayoutEffect, useMemo, useRef} from 'react';

import styled from '@emotion/native';

export const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;
export interface FABItem {
  icon: IconName;
  id: string;
}

export interface FABProps<Item extends FABItem> {
  isActive: boolean;
  fabItems: Item[];
  onPressFAB: () => void;
  onPressFabItem: (item?: Item) => void;
  renderFAB?: () => ReactElement;
  renderFabItem?: (item: Item, idx: number) => ReactElement;
  size: ButtonSize;
  style?: StyleProp<ViewStyle>;
}

function FloatingActionButtons<Item extends FABItem = FABItem>({
  isActive,
  fabItems,
  onPressFAB,
  onPressFabItem,
  renderFAB,
  renderFabItem,
  size = 'large',
  style,
}: FABProps<Item> & {
  theme: DoobooTheme;
}): ReactElement {
  const spinValue = useRef(new Animated.Value(0));
  const positionValue = useRef(new Animated.Value(0));

  useLayoutEffect(() => {
    Animated.timing(spinValue.current, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  useLayoutEffect(() => {
    Animated.timing(positionValue.current, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const spin = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const offsetAnimationList = useMemo(
    () =>
      fabItems?.map((_, idx) => {
        return positionValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', `-${(idx + 1) * 80}%`],
        });
      }),
    [fabItems],
  );

  return (
    <View
      style={[
        {
          position: 'absolute',
          right: 10,
          bottom: 10,
          zIndex: 999,
          flex: 1,
        },
        style,
      ]}>
      {fabItems.map((item, idx) => {
        return (
          <Animated.View
            key={item.id}
            style={{
              margin: 10,
              position: 'absolute',
              transform: [{translateY: offsetAnimationList[idx]}],
            }}>
            {renderFabItem ? (
              renderFabItem(item, idx)
            ) : (
              <IconButton
                testID={item.id}
                size={size}
                icon={<StyledIcon size={24} name={item.icon} />}
                onPress={() => onPressFabItem(item)}
              />
            )}
          </Animated.View>
        );
      })}
      <Animated.View style={{transform: [{rotate: spin}], margin: 10}}>
        {renderFAB ? (
          renderFAB()
        ) : (
          <IconButton
            testID={'main_fab'}
            size={size}
            icon={<StyledIcon size={24} name="add-light" />}
            onPress={onPressFAB}
          />
        )}
      </Animated.View>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
