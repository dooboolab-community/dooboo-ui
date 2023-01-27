import React from 'react';
import type {StyleProp, ViewStyle, TouchableOpacityProps} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import type {Colors} from '@dooboo-ui/theme/colors';
import {useTheme} from '@dooboo-ui/theme';

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
  borderStyle?: {color?: keyof Colors; width?: number; radius?: number};
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
    width: borderWidth = 1,
    color: borderColorKey,
    radius: borderRadius = 10,
  } = {},
  ...props
}: ButtonGroupProps<T>): React.ReactElement {
  const {colors} = useTheme();

  const borderColor = colors[borderColorKey || 'gray9'];

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
  //
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
