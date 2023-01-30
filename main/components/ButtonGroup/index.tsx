import type {ReactElement} from 'react';
import React from 'react';
import type {StyleProp, ViewStyle, TouchableOpacityProps} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

interface Styles {
  container?: StyleProp<ViewStyle>;
  button?: StyleProp<ViewStyle>;
}

export type ButtonGroupProps<T> = (SingleSelect | MultiSelect) & {
  data: T[];
  renderItem: ButtonGroupRenderItem<T>;
  direction?: 'row' | 'column';
  testID?: string;
  styles?: Styles;
  onPress?: (index: number, item: T) => void;
  touchableOpacityProps?: TouchableOpacityProps;
  borderStyle?: {
    color?: string;
    width?: number;
    radius?: number;
  };
};

interface MultiSelect {
  selectedIndices?: number[];
}

interface SingleSelect {
  selectedIndex?: number;
}

export type ButtonGroupRenderItem<ItemT> = (info: {
  item: ItemT;
  selected: boolean;
  index: number;
}) => ReactElement;

const checkSelected = (
  props: SingleSelect | MultiSelect,
  index: number,
): boolean => {
  if ('selectedIndices' in props) {
    return props.selectedIndices?.includes(index) || false;
  }

  if ('selectedIndex' in props) {
    return props.selectedIndex === index;
  }

  return false;
};

export function ButtonGroup<T>({
  testID,
  styles,
  data,
  renderItem,
  onPress,
  touchableOpacityProps,
  direction = 'row',
  borderStyle: {
    width: borderWidth = 0,
    color: borderColor,
    radius: borderRadius = 10,
  } = {},
  ...props
}: ButtonGroupProps<T>): React.ReactElement {
  return (
    <View
      testID={testID}
      style={StyleSheet.flatten([
        {borderRadius, borderColor, borderWidth, overflow: 'hidden'},
        styles?.container,
        {flexDirection: direction},
      ])}
    >
      {data.map((item, index) => {
        const selected = checkSelected(props, index);

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
                index === data.length - 1 && {
                  borderRightWidth: borderWidth,
                  borderColor,
                },
              ])}
            >
              {renderItem({item, index, selected})}
            </View>
          </TouchableOpacity>
        );
      })}
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
