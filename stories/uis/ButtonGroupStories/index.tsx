// Caveat: Expo web needs React to be imported
import React from 'react';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {renderStory} from '../../Common';

import ButtonGroupBasicStory from './ButtonGroupBasicStory';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<ButtonGroupBasicStory />));
