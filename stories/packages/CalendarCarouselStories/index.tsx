import 'intl';
import 'intl/locale-data/jsonp/en';

import CalendarCarouselBasicStory from './CalendarCarouselBasicStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('[Package] CalendarCarousel', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<CalendarCarouselBasicStory />));
