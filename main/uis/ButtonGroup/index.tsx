import type {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import type {ReactElement} from 'react';
import {useTheme} from '@dooboo-ui/theme';

interface Styles {
  selectedButton?: StyleProp<ViewStyle>;
  selectedText?: StyleProp<TextStyle>;
  unselectedButton?: StyleProp<ViewStyle>;
  unselectedText?: StyleProp<TextStyle>;
}

export type ButtonGroupProps<T = string> = {
  data: T[];
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
} & (T extends string
  ? {renderItem?: ButtonGroupRenderItem<T>}
  : {renderItem: ButtonGroupRenderItem<T>});

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
  onPress,
  renderItem,
  touchableOpacityProps,
  direction = 'row',
  selectedIndex,
  borderStyle: {
    width: borderWidth = 1,
    color: borderColor,
    radius: borderRadius = 10,
  } = {},
}: ButtonGroupProps<T>): ReactElement {
  const {theme} = useTheme();

  const getBorderStyle = (index: number): ViewStyle => {
    if (index === data.length - 1) {
      return {borderColor};
    }

    return direction === 'row'
      ? {borderRightWidth: borderWidth, borderColor}
      : {borderBottomWidth: borderWidth, borderColor};
  };

  const renderButton = (item: T, index: number): ReactElement => {
    const selected = index === selectedIndex;

    if (typeof renderItem === 'function') {
      return (
        <View
          testID={`button-group-item-${index}`}
          style={getBorderStyle(index)}
        >
          {renderItem({item, index, selected})}
        </View>
      );
    }

    return (
      <View
        testID={`button-group-item-${index}`}
        style={StyleSheet.flatten([
          selected
            ? {backgroundColor: theme.button.primary.bg}
            : {backgroundColor: theme.bg.basic},
          selected ? styles?.selectedButton : styles?.unselectedButton,
          getBorderStyle(index),
        ])}
      >
        {typeof item === 'string' && (
          <Text
            testID={`button-group-text-${index}`}
            style={StyleSheet.flatten([
              selected
                ? {color: theme.button.primary.text}
                : {color: theme.button.primary.bg},
              selected ? styles?.selectedText : styles?.unselectedText,
            ])}
          >
            {item}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View
      testID={testID}
      style={StyleSheet.flatten([
        {borderRadius, borderColor, borderWidth, overflow: 'hidden'},
        style,
        {flexDirection: direction},
      ])}
    >
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            disabled={!onPress}
            {...touchableOpacityProps}
            onPress={() => onPress && onPress(index, item)}
            key={index}
          >
            {renderButton(item, index)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

ButtonGroup.defaultProps = {
  style: {
    alignSelf: 'flex-start',
  },
  styles: {
    selectedButton: {
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    unselectedButton: {
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
  },
};
