import AccordionBasic from './Basic';
import AccordionCustom from './Custom';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic', () => renderStory(<AccordionBasic />))
  .add('Custom', () => renderStory(<AccordionCustom />));
