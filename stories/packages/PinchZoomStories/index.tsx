import {ImageSlider} from './PinchZoomSlider';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {storiesOf} from '@storybook/react-native';

storiesOf('[Package] PinchZoom', module).add('ImageSlider', () => (
  <ImageSlider />
));
