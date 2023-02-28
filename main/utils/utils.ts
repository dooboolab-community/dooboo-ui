import type {DoobooTheme} from '@dooboo-ui/theme';
import {light} from '@dooboo-ui/theme';

export const isEmptyObject = (param: any): boolean =>
  Object.keys(param).length === 0 && param.constructor === Object;

export const getTheme = (theme?: DoobooTheme): DoobooTheme => {
  return isEmptyObject(theme) || theme === undefined ? light : theme;
};
