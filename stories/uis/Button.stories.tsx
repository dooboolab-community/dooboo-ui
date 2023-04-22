import React from 'react';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

// Caveat: Expo web needs React to be imported
import {renderStory} from '../Common';

import ButtonBasic from './ButtonStories/ButtonBasicStory';
import ButtonColor from './ButtonStories/ButtonColorStory';
import ButtonCustom from './ButtonStories/ButtonCustomStory';
import ButtonDisabled from './ButtonStories/ButtonDisabledStory';
import ButtonEvent from './ButtonStories/ButtonEventStory';
import ButtonLoading from './ButtonStories/ButtonLoadingStory';
import ButtonSizes from './ButtonStories/ButtonSizeStory';
import ButtonStartAndEnd from './ButtonStories/ButtonStartAndEndStory';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<ButtonBasic />))
  .add('Color', () => renderStory(<ButtonColor />))
  .add('Disabled', () => renderStory(<ButtonDisabled />))
  .add('Sizes', () => renderStory(<ButtonSizes />))
  .add('Loading', () => renderStory(<ButtonLoading />))
  .add('Custom', () => renderStory(<ButtonCustom />))
  .add('StartEnd', () => renderStory(<ButtonStartAndEnd />))
  .add('Event', () => renderStory(<ButtonEvent />));
