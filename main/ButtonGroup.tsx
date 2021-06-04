import {DoobooTheme, light, useTheme, withTheme} from './theme';
import React, {FC, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  testID?: string;
  theme: DoobooTheme;
  borderRadius?: number;
  borderWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  viewStyle?: ViewStyle;
  selectedViewStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  data: string[];
  color?: string;
  onPress?: (i: number) => void;
  initialIndex?: number;
}

const StyledButtonGroup: FC<Props> = (props) => {
  const {theme} = useTheme();

  const {
    borderRadius = 0,
    initialIndex = 0,
    borderWidth = 1,
    color = theme.text,
    testID,
    containerStyle,
    style,
    selectedViewStyle,
    viewStyle,
    selectedTextStyle,
    textStyle,
    data,
    onPress,
  } = props;

  const [selectedOption, setSelectedOption] = useState(initialIndex);

  return (
    <View
      testID={testID}
      style={StyleSheet.flatten([{borderColor: color}, containerStyle, style])}>
      {data.map((text, i) => {
        return (
          <TouchableOpacity
            key={i}
            testID={`CHILD_${i}`}
            activeOpacity={0.85}
            style={{flex: 1}}
            onPress={(): void => {
              setSelectedOption(i);

              if (onPress) onPress(i);
            }}>
            <View
              style={StyleSheet.flatten([
                selectedOption === i
                  ? {...selectedViewStyle, backgroundColor: color}
                  : {...viewStyle, borderColor: color},
                i === 0
                  ? {
                      borderLeftWidth: borderWidth,
                      borderTopWidth: borderWidth,
                      borderBottomWidth: borderWidth,
                      borderTopLeftRadius: borderRadius,
                      borderBottomLeftRadius: borderRadius,
                    }
                  : i === data.length - 1
                  ? {
                      borderRightWidth: borderWidth,
                      borderLeftWidth: borderWidth,
                      borderTopWidth: borderWidth,
                      borderBottomWidth: borderWidth,
                      borderBottomRightRadius: borderRadius,
                      borderTopRightRadius: borderRadius,
                    }
                  : {
                      borderLeftWidth: borderWidth,
                      borderTopWidth: borderWidth,
                      borderBottomWidth: borderWidth,
                    },
                {borderColor: color},
              ])}>
              <Text
                style={
                  selectedOption === i
                    ? [selectedTextStyle, {color: theme.textContrast}]
                    : [textStyle, {color: theme.text}]
                }>
                {text}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

StyledButtonGroup.defaultProps = {
  theme: light,
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    minHeight: 40,
    marginTop: 24,
  },
  viewStyle: {
    alignSelf: 'stretch',
    minHeight: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedViewStyle: {
    alignSelf: 'stretch',
    minHeight: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
  },
  selectedTextStyle: {
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
  },
  data: ['option 1', 'option 2'],
};

export const ButtonGroup = withTheme(StyledButtonGroup);
