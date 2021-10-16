import '@emotion/react';
import type {DoobooTheme} from '@dooboo-ui/theme';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {}
}
