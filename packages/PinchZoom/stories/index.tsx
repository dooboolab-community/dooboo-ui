import {ImageSlider} from './PinchZoomSlider';
import React from 'react';
import {storiesOf} from '@storybook/react-native';

storiesOf('[Package] ImageSlider', module).add('Basic - light', () => (
  <ImageSlider />
));
