import {FC} from 'react';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

type IconName = 'moment-solid' | 'moment-light';
type Props = {
  name: string;
  size: number;
  color: string;
};

export const Icon = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'IcoMoon',
  'doobooui.ttf',
);
