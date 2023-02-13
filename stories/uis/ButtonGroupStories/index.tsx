import ButtonGroupBasicStory from './ButtonGroupBasicStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import ButtonGroupColorStory from './ButtonGroupColorStory';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<ButtonGroupBasicStory />))
  .add('Colors', () => renderStory(<ButtonGroupColorStory />));
