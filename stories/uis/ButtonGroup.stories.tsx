import ButtonGroupBasicStory from './ButtonGroupStories/ButtonGroupBasicStory';
import ButtonGroupColorStory from './ButtonGroupStories/ButtonGroupColorStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<ButtonGroupBasicStory />))
  .add('Colors', () => renderStory(<ButtonGroupColorStory />));
