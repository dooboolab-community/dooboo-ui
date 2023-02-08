import RadioGroupBasic from './Basic';
import RadioGroupElement from './Element';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('RadioGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<RadioGroupBasic />))
  .add('Element', () => renderStory(<RadioGroupElement />));
