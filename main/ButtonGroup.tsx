import {DoobooTheme, light, useTheme, withTheme} from './theme';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Styles {
  container: StyleProp<ViewStyle>;
  button: ViewStyle;
  selectedButton: ViewStyle;
  text: StyleProp<TextStyle>;
  selectedText: StyleProp<TextStyle>;
}

interface Props<T> {
  testID?: string;
  theme: DoobooTheme;
  borderRadius?: number;
  borderWidth?: number;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  data: T[];
  color?: string;
  onPress?: (i: number) => void;
  selected?: number;
}

function StyledButtonGroup<T>(props: Props<T>): React.ReactElement {
  const {theme} = useTheme();

  const {
    borderRadius = 0,
    selected = 0,
    borderWidth = 1,
    color = theme.text,
    testID,
    style,
    data,
    onPress,
    styles,
  } = props;

  return (
    <View
      testID={testID}
      style={StyleSheet.flatten([
        {borderColor: color},
        styles?.container,
        style,
      ])}>
      {data.map((text, i) => {
        return (
          <TouchableOpacity
            key={i}
            testID={`CHILD_${i}`}
            activeOpacity={0.85}
            style={{flex: 1}}
            onPress={(): void => {
              if (onPress) onPress(i);
            }}>
            <View
              style={StyleSheet.flatten([
                selected === i
                  ? {...styles?.selectedButton, backgroundColor: color}
                  : {...styles?.button, borderColor: color},
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
                  selected === i
                    ? [styles?.selectedText, {color: theme.textContrast}]
                    : [styles?.text, {color: theme.text}]
                }>
                {text}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

StyledButtonGroup.defaultProps = {
  theme: light,
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

export const ButtonGroup = withTheme<any>(StyledButtonGroup);
