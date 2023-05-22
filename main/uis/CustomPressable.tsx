import type {ReactElement} from 'react';
import type {PressableProps, StyleProp, ViewStyle} from 'react-native';
import {Pressable} from 'react-native';
import {css} from '@emotion/native';

import {useDooboo} from '../providers';

export default function CustomPressable(
  props: PressableProps & {style?: StyleProp<ViewStyle>},
): ReactElement {
  const {children, style, hitSlop} = props;
  const {theme} = useDooboo();

  return (
    <Pressable
      hitSlop={hitSlop || {top: 20, bottom: 20, left: 20, right: 20}}
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
