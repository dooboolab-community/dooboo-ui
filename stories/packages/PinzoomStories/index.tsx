import {ContainerDeco} from '../../../storybook/decorators';
import {ImageSlider} from './PinchZoomSlider';
import React from 'react';
import {storiesOf} from '@storybook/react-native';

storiesOf('PinchZoom', module)
  .addDecorator(ContainerDeco)
  .add('Image slider', () => <ImageSlider />);
