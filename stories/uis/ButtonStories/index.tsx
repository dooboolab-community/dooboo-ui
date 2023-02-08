import ButtonBasic from './ButtonBasicStory';
import ButtonColor from './ButtonColorStory';
import ButtonCustom from './ButtonCustomStory';
import ButtonDisabled from './ButtonDisabledStory';
import ButtonEvent from './ButtonEventStory';
import ButtonLoading from './ButtonLoadingStory';
import ButtonSizes from './ButtonSizeStory';
import ButtonStartAndEnd from './ButtonStartAndEndStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<ButtonBasic />))
  .add('Color', () => renderStory(<ButtonColor />))
  .add('Disabled', () => renderStory(<ButtonDisabled />))
  .add('Sizes', () => renderStory(<ButtonSizes />))
  .add('Loading', () => renderStory(<ButtonLoading />))
  .add('Custom', () => renderStory(<ButtonCustom />))
  .add('Start and end elements', () => renderStory(<ButtonStartAndEnd />))
  .add('Event', () => renderStory(<ButtonEvent />));
