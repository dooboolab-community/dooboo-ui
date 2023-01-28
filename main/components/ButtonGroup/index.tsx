import React from 'react';
import type {StyleProp, ViewStyle, TouchableOpacityProps} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

interface Styles {
  container?: StyleProp<ViewStyle>;
  button?: StyleProp<ViewStyle>;
}

type ButtonGroupProps<T> = (SingleSelect | MultiSelect) & {
  vertical?: boolean;
  data: T[];
  testID?: string;
  styles?: Styles;
  onPress?: (index: number, item: T) => void;
  renderItem: ButtonGroupRenderItem<T>;
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
}) => React.ReactElement;

export function ButtonGroup<T>({
  testID,
  styles,
  data,
  renderItem,
  onPress,
  touchableOpacityProps,
  vertical,
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
        vertical ? {flexDirection: 'column'} : {flexDirection: 'row'},
      ])}
    >
      {data.map((item, index) => {
        const selected = isSelected(props, index);

        return (
          <TouchableOpacity
            disabled={!onPress}
            {...touchableOpacityProps}
            onPress={() => onPress && onPress(index, item)}
            key={index}
          >
            <View
              style={StyleSheet.flatten([
                styles?.button,
                index === data.length - 1
                  ? {}
                  : {
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

function isSelected(props: SingleSelect | MultiSelect, index: number): boolean {
  if ('selectedIndices' in props) {
    return props.selectedIndices?.includes(index) || false;
  }

  if ('selectedIndex' in props) {
    return props.selectedIndex === index;
  }

  return false;
}
