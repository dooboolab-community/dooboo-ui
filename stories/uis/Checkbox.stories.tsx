import CheckboxBasicStory from './CheckboxStories/CheckboxBasicStory';
import CheckboxEndElementStory from './CheckboxStories/CheckboxEndElementStory';
import CheckboxStartElementStory from './CheckboxStories/CheckboxStartElementStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<CheckboxBasicStory />))
  .add('StartElement', () => renderStory(<CheckboxStartElementStory />))
  .add('EndElement', () => renderStory(<CheckboxEndElementStory />));
