import 'intl';
import 'intl/locale-data/jsonp/en';

import CalendarCarouselBasic from './Basic';
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('[Package] CalendarCarousel', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<CalendarCarouselBasic />));
