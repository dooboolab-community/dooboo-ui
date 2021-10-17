import '@emotion/react';
import type {DoobooTheme} from './';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {}
}
