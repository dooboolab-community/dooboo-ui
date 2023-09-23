import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';
import en from 'date-fns/esm/locale/en-US';

interface Prop {
  locale?: Locale;
  width?: number;
  styles?: {
    container?: StyleProp<ViewStyle>;
    text?: StyleProp<TextStyle>;
    weekendContainer?: StyleProp<ViewStyle>;
    weekendText?: StyleProp<TextStyle>;
  };
}

export default function WeekdayItem({
  width = 350,
  locale = en,
  styles,
}: Prop): JSX.Element {
  const {theme} = useTheme();
  const weekdays = [...Array(7).keys()].map((i) =>
    locale.localize?.day(i, {width: 'abbreviated'}),
  );

  return (
    <View
      style={css`
        width: ${width + 'px'};
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0;
      `}
    >
      {weekdays.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              css`
                flex: 1;
                align-items: center;
              `,
              styles?.container,
              (index === 0 || index === 6) && styles?.weekendContainer,
            ]}
          >
            <Text
              style={[
                css`
                  font-size: 16px;
                  color: ${theme.text.basic};
                `,
                styles?.text,
                (index === 0 || index === 6) && styles?.weekendText,
              ]}
            >
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
