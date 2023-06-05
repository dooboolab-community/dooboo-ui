import type {ReactElement} from 'react';
import type {PressableProps, StyleProp, ViewStyle} from 'react-native';
import {Pressable} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';

export default function CustomPressable(
  props: PressableProps & {style?: StyleProp<ViewStyle>},
): ReactElement {
  const {children, style, hitSlop} = props;
  const {theme} = useTheme();

  return (
    <Pressable
      hitSlop={hitSlop || {top: 4, bottom: 4, left: 6, right: 6}}
      {...props}
      style={({pressed}) => {
        if (pressed) {
          return [
            css`
              background-color: ${theme.role.underlay};
            `,
            style,
          ];
        }

        return style;
      }}
    >
      {children}
    </Pressable>
  );
}
