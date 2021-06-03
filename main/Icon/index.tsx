import {FC} from 'react';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

type IconName =
  | 'moment-solid'
  | 'moment-light'
  | 'tick-light_1'
  | 'tile-light'
  | 'list-light'
  | 'setting-light'
  | 'tick-light'
  | 'chevron-right'
  | 'chevron-down-light'
  | 'chevron-up-light'
  | 'chevron-left-light'
  | 'share-solid'
  | 'add-solid'
  | 'like-solid'
  | 'discover-solid'
  | 'my_account-solid'
  | 'my_collection-solid'
  | 'search-solid'
  | 'share-light'
  | 'add-light'
  | 'like-light'
  | 'discover-light'
  | 'my_account-light'
  | 'my_collection-light'
  | 'setting-light';

type Props = {
  name: IconName;
  size: number;
  color: string;
};

export const Icon: FC<Props> = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'IcoMoon',
  'doobooui.ttf',
);
