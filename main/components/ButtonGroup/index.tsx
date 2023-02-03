import type {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import React from 'react';
import type {ReactElement} from 'react';

interface Styles {
  container?: StyleProp<ViewStyle>;
  button?: StyleProp<ViewStyle>;
}

export type ButtonGroupProps<T> = {
  data: T[];
  renderItem?: ButtonGroupRenderItem<T>;
  direction?: 'row' | 'column';
  testID?: string;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  onPress?: (index: number, item: T) => void;
  touchableOpacityProps?: TouchableOpacityProps;
  borderStyle?: {
    color?: string;
    width?: number;
    radius?: number;
  };
  selectedIndex?: number;
};

export type ButtonGroupRenderItem<ItemT> = (info: {
  item: ItemT;
  selected: boolean;
  index: number;
}) => ReactElement;

export function ButtonGroup<T>({
  testID,
  style,
  styles,
  data,
  renderItem,
  onPress,
  touchableOpacityProps,
  direction = 'row',
  selectedIndex,
  borderStyle: {
    width: borderWidth = 1,
    color: borderColor,
    radius: borderRadius = 10,
  } = {},
}: ButtonGroupProps<T>): ReactElement {
  return (
    <View style={style}>
      <View
        testID={testID}
        style={StyleSheet.flatten([
          {borderRadius, borderColor, borderWidth, overflow: 'hidden'},
          styles?.container,
          {flexDirection: direction},
        ])}
      >
        {data.map((item, index) => {
          const selected = index === selectedIndex;

          return (
            <TouchableOpacity
              disabled={!onPress}
              {...touchableOpacityProps}
              onPress={() => onPress && onPress(index, item)}
              key={index}
            >
              <View
                testID={`button-group-item-${index}`}
                style={StyleSheet.flatten([
                  styles?.button,
                  {borderColor},
                  index !== data.length - 1 &&
                    (direction === 'row'
                      ? {borderRightWidth: borderWidth}
                      : {borderBottomWidth: borderWidth}),
                ])}
              >
                {renderItem({item, index, selected})}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

ButtonGroup.defaultProps = {
  styles: {
    container: {
      alignSelf: 'center',
    },
  },
};
