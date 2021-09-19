import {Animated, Easing, StyleProp, View, ViewStyle} from 'react-native';
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
  const {FAB, FABItem, buttonSize = 'large', iconSize = 24} = styles ?? {};

  const spinValue = useRef(new Animated.Value(0));
  const positionValue = useRef(new Animated.Value(0));

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
          outputRange: ['0%', `-${(idx + 1) * 80}%`],
        }),
      ),
    [FABItems],
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
      ]}
    >
      {FABItems.map((item, idx) => {
        const {id, icon} = item;

        return (
          <Animated.View
            key={id}
            style={[
              {
                margin: 10,
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
            margin: 10,
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
