import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {useTheme} from '@dooboo-ui/theme';

interface Styles {
  container: StyleProp<ViewStyle>;
  button: ViewStyle;
  selectedButton: ViewStyle;
  text: StyleProp<TextStyle>;
  selectedText: StyleProp<TextStyle>;
}

interface Props<T> {
  testID?: string;
  borderRadius?: number;
  borderWidth?: number;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  data: T[];
  color?: string;
  onPress?: (i: number) => void;
  selectedIndex?: number;
}

export function ButtonGroup<T>(props: Props<T>): React.ReactElement {
  const {theme} = useTheme();

  const {
    borderRadius = 0,
    selectedIndex = 0,
    borderWidth = 1,
    color = theme.text,
    testID,
    style,
    data,
    onPress,
    styles,
  } = props;

  const borderWidthAndRadius = (index: number): object => {
    const fullWidthAndRadius = {
      borderLeftWidth: borderWidth,
      borderRightWidth: borderWidth,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,

      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    };

    const isFirst = index === 0;
    const isLast = index === data.length - 1;

    const borderForFirstElement = {
      ...fullWidthAndRadius,
      borderTopRightRadius: undefined,
      borderBottomRightRadius: undefined,
    };

    const borderForLastElement = {
      ...fullWidthAndRadius,
      borderTopLeftRadius: undefined,
      borderBottomLeftRadius: undefined,
    };

    const borderForMiddleElement = {
      borderRightWidth: borderWidth,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
    };

    if (data.length === 1) return fullWidthAndRadius;

    if (isFirst) return borderForFirstElement;

    if (isLast) {
      if (data.length === 2)
        return {
          ...borderForLastElement,
          borderLeftWidth: undefined,
        };

      return borderForLastElement;
    }

    return borderForMiddleElement;
  };

  return (
    <View
      testID={testID}
      style={StyleSheet.flatten([
        {borderColor: color},
        styles?.container,
        style,
      ])}
    >
      {data.map((text, i) => {
        return (
          <TouchableOpacity
            key={i}
            activeOpacity={0.85}
            style={{flex: 1}}
            onPress={(): void => {
              if (onPress) onPress(i);
            }}
          >
            <View
              testID={`CHILD_${i}`}
              style={StyleSheet.flatten([
                selectedIndex === i
                  ? {...styles?.selectedButton, backgroundColor: color}
                  : {...styles?.button, borderColor: color},
                borderWidthAndRadius(i),
                {borderColor: color},
              ])}
            >
              <Text
                style={
                  selectedIndex === i
                    ? [styles?.selectedText, {color: theme.textContrast}]
                    : [styles?.text, {color: theme.text}]
                }
              >
                {text}
              </Text>
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
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      minHeight: 40,
      marginTop: 24,
    },
    button: {
      alignSelf: 'stretch',
      minHeight: 40,

      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedButton: {
      alignSelf: 'stretch',
      minHeight: 40,

      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      alignSelf: 'center',
    },
    selectedText: {
      fontSize: 14,
      textAlign: 'center',
      alignSelf: 'center',
    },
  },
  data: ['option 1', 'option 2'],
};
