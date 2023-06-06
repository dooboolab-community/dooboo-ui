import type {ReactElement} from 'react';
import React, {useLayoutEffect, useMemo, useRef} from 'react';
import type {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';
import {Animated, Easing, View} from 'react-native';

import type {ButtonSizeType} from '../Button';
import type {IconName} from '../Icon';
import {IconButton} from '../IconButton';

interface Styles {
  Fab?: StyleProp<ViewStyle>;
  FabItem?: StyleProp<ViewStyle>;
}

export type FabProps = {
  isActive: boolean;
  icons: IconName[];
  animationDuration?: number;
  onPressFab: () => void;
  onPressItem: (item?: IconName) => void;
  buttonSize?: ButtonSizeType | number;
  fabIcon?: IconName;
  iconSize?: number;
  gap?: number;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
};

function FloatingActionButtons({
  isActive,
  style,
  styles,
  fabIcon = 'Plus',
  icons,
  onPressFab,
  onPressItem,
  buttonSize = 'medium',
  gap = 6,
  animationDuration = 200,
}: FabProps): ReactElement {
  const {Fab, FabItem} = styles ?? {};

  const spinValue = useRef(new Animated.Value(0));
  const positionValue = useRef(new Animated.Value(0));
  const fabHeight = useRef(0);

  useLayoutEffect(() => {
    const config = {
      toValue: isActive ? 1 : 0,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    };

    Animated.parallel([
      Animated.timing(spinValue.current, config),
      Animated.timing(positionValue.current, config),
    ]).start();
  }, [isActive, animationDuration]);

  const offsets = useMemo(
    () =>
      icons?.map((_, idx) =>
        positionValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1 * (idx + 1) * (fabHeight.current + gap)],
        }),
      ),

    [icons, fabHeight, gap],
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
      {icons.map((icon, idx) => {
        return (
          <Animated.View
            key={`${icon}-${idx}`}
            style={[
              {
                position: 'absolute',
                transform: [{translateY: offsets[idx]}],
              },
              FabItem,
            ]}
          >
            <IconButton
              size={buttonSize}
              testID={icon}
              icon={icon}
              onPress={() => onPressItem(icon)}
            />
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
          Fab,
        ]}
      >
        <IconButton size={buttonSize} icon={fabIcon} onPress={onPressFab} />
      </Animated.View>
    </View>
  );
}

export {FloatingActionButtons as Fab};
