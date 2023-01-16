import type {FC} from 'react';
import type {ViewStyle} from 'react-native';
import type {IconName} from './stories/Styles';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import styled from '@emotion/native';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Ico: FC<Props> = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'IcoMoon',
  require('./doobooui.ttf'),
);

export const Icon = styled(Ico)`
  color: ${({theme, color}) => color || theme.text.basic};
`;
