import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {ButtonSize, IconButton} from '../IconButton';
import {DoobooTheme, withTheme} from '../theme';
import {Icon, IconName} from '../Icon';
import React, {ReactElement, useLayoutEffect, useMemo, useRef} from 'react';

import styled from '@emotion/native';

export const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

interface Styles {
  FAB?: StyleProp<ViewStyle>;
  FABItem?: StyleProp<ViewStyle>;
  buttonSize: ButtonSize;
  iconSize?: number;
  gap?: number;
}

export interface FABItem {
  icon: IconName;
  id: string;
}

export interface FABProps<Item extends FABItem> {
  isActive: boolean;
  FABItems: Item[];
  onPressFAB: () => void;
  onPressFABItem: (item?: Item) => void;
  renderFAB?: () => ReactElement;
  renderFABItem?: (item: Item, idx: number) => ReactElement;

  style?: StyleProp<ViewStyle>;
  styles?: Styles;
}

function FloatingActionButtons<Item extends FABItem = FABItem>({
  isActive,
  style,
  styles,
  FABItems,
  onPressFAB,
  onPressFABItem,
  renderFAB,
  renderFABItem,
}: FABProps<Item> & {
  theme: DoobooTheme;
}): ReactElement {
<<<<<<< HEAD
  const {
    FAB,
    FABItem,
    buttonSize = 'large',
    iconSize = 24,
    gap = 20,
  } = styles ?? {};

  const spinValue = useRef(new Animated.Value(0));
  const positionValue = useRef(new Animated.Value(0));
  const FABHeight = useRef(0);
=======
  const GAP = 15;
  const {FAB, FABItem, buttonSize = 'large', iconSize = 24} = styles ?? {};

  const spinValue = useRef<Animated.Value>(new Animated.Value(0));
  const positionValue = useRef<Animated.Value>(new Animated.Value(0));
  const FABHeight = useRef<number>(0);
>>>>>>> 0083ecc (style fix.)

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
      FABItems?.map((_, idx) =>
        positionValue.current.interpolate({
          inputRange: [0, 1],
<<<<<<< HEAD
          outputRange: [0, -1 * (idx + 1) * (FABHeight.current + gap)],
        }),
      ),
    [FABItems, FABHeight, gap],
=======
          outputRange: [0, -1 * (idx + 1) * (FABHeight.current + GAP)],
        }),
      ),
    [FABItems, FABHeight],
>>>>>>> 0083ecc (style fix.)
  );

  const onLayout = (e: LayoutChangeEvent): void => {
    FABHeight.current = e.nativeEvent.layout.height;
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
        },
        style,
      ]}
    >
      {FABItems.map((item, idx) => {
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
                icon={<StyledIcon size={iconSize} name={icon} />}
                onPress={() => onPressFABItem(item)}
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
            testID={'main_fab'}
            size={buttonSize}
            icon={<StyledIcon size={iconSize} name="add-light" />}
            onPress={onPressFAB}
          />
        )}
      </Animated.View>
    </View>
  );
}

export const FAB = withTheme(FloatingActionButtons);
