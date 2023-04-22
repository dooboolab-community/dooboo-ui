// Caveat: Expo web needs React to be imported
import React from 'react';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {renderStory} from '../Common';

import RadioGroupBasic from './RadioGroupStories/RadioGroupBasicStory';
import RadioGroupElement from './RadioGroupStories/RadioGroupElementStory';

storiesOf('RadioGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<RadioGroupBasic />))
  .add('Element', () => renderStory(<RadioGroupElement />));
