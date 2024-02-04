import type {DoobooTheme, DoobooTheme as DoobooUiTheme} from '@dooboo-ui/theme';
import type {CSSObject} from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {}
}

import type {StyleProp, ViewStyle} from 'react-native';

import type {CustomAppTheme} from './theme';

type AllTheme = CustomAppTheme & DoobooUiTheme;

declare module '@emotion/react' {
  export interface Theme extends AllTheme {}
}

declare module '@emotion/native' {
  // Overload for ViewStyle
  export function css(
    ...args: Array<CSSObject | StyleProp<ViewStyle>>
  ): ReturnType<typeof css>;

  // Overload for TextStyle
  export function css(
    ...args: Array<CSSObject | StyleProp<TextStyle>>
  ): ReturnType<typeof css>;

  // Overload for ImageStyle
  export function css(
    ...args: Array<CSSObject | StyleProp<ImageStyle>>
  ): ReturnType<typeof css>;
}
