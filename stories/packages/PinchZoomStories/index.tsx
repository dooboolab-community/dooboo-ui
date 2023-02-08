import PinchZoomArticleStory from './PinchZoomArticleStory';
import PinchZoomImageListStory from './PinchZoomImageListStory';
import PinchZoomImageSliderStory from './PinchZoomImageSliderStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';

storiesOf('[Package] PinchZoom', module)
  .add('ImageSlider', () => renderStory(<PinchZoomImageSliderStory />))
  .add('Article', () => renderStory(<PinchZoomArticleStory />))
  .add('ImageList', () => renderStory(<PinchZoomImageListStory />));
