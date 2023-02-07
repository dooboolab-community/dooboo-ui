import CheckboxBasic from './Basic';
import CheckboxEndElement from './EndElement';
import CheckboxStartElement from './StartElement';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<CheckboxBasic />))
  .add('StartElement', () => renderStory(<CheckboxStartElement />))
  .add('EndElement', () => renderStory(<CheckboxEndElement />));
