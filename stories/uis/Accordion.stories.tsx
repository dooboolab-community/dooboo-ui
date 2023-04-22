// Caveat: Expo web needs React to be imported
import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {renderStory} from '../Common';

import AccordionBasicStory from './AccordionStories/AccordionBasicStory';
import AccordionCustomStory from './AccordionStories/AccordionCustomStory';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic', () => renderStory(<AccordionBasicStory />))
  .add('Custom', () => renderStory(<AccordionCustomStory />));
