import {FC} from 'react';
import {ViewStyle} from 'react-native';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import styled from '@emotion/native';

export type IconName =
  | 'puzz-light'
  | 'dooboolab-solid'
  | 'artifacts-solid'
  | 'android-solid'
  | 'apple-solid'
  | 'tick-circle-light'
  | 'ban-light'
  | 'bookmark-light'
  | 'brightness-minus-light'
  | 'brightness-plus-light'
  | 'tick-circle-solid'
  | 'coin-light'
  | 'collect-light'
  | 'download-light'
  | 'facebook-solid'
  | 'fastfoward-light'
  | 'google-solid'
  | 'happy-light'
  | 'instagram_reel-solid'
  | 'instagram-solid'
  | 'ios-solid'
  | 'location-light'
  | 'lock-light'
  | 'mail-light'
  | 'mobile-light'
  | 'paper-plane-light'
  | 'pause-light'
  | 'play-light'
  | 'puzz-solid'
  | 'rewind-light'
  | 'sad-light'
  | 'save-light'
  | 'speaker-light'
  | 'stop-light'
  | 'thumb-down-light'
  | 'thumb-up-light'
  | 'tiktok-solid'
  | 'unlock-light'
  | 'upload-light'
  | 'vimeo-solid'
  | 'volume-down-light'
  | 'volume-up-light'
  | 'youtube-solid'
  | 'info-light'
  | 'dooboo-shape'
  | 'burger-shape'
  | 'pen-light'
  | 'trash-light'
  | 'chevron-up-shape'
  | 'chevron-down-shape'
  | 'chevron-left-shape'
  | 'chevron-right-shape'
  | 'follow-light'
  | 'mic-shape'
  | 'mic-light'
  | 'phone-shape'
  | 'phone-light'
  | 'clip-shape'
  | 'clip-light'
  | 'cog-light'
  | 'picture-light'
  | 'moment-solid'
  | 'moment-light'
  | 'cross-light'
  | 'tile-light'
  | 'list-light'
  | 'setting-light'
  | 'tick-light'
  | 'chevron-right'
  | 'chevron-left-light'
  | 'chevron-up-light'
  | 'comment-light'
  | 'share-solid'
  | 'add-solid'
  | 'like-solid'
  | 'discover-solid'
  | 'account-solid'
  | 'collection-solid'
  | 'search-solid'
  | 'bell-solid'
  | 'home-solid'
  | 'camera-solid'
  | 'share-light'
  | 'add-light'
  | 'like-light'
  | 'discover-light'
  | 'account-light'
  | 'collection-light'
  | 'chevron-down-light'
  | 'search-light'
  | 'bell-light'
  | 'home-light'
  | 'camera-light'
  | 'dots-light'
  | 'follow-shape'
  | 'wifi-unable-light'
  | 'wifi-light';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Ico: FC<Props> = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'IcoMoon',
  'doobooui.ttf',
);

export const Icon = styled(Ico)`
  color: ${({theme, color}) => color || theme.text};
`;
