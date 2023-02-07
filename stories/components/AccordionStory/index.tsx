import AccordionBasic from './Basic';
import AccordionCustom from './Custom';
import type {AccordionListType} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

const data: AccordionListType = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'Mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic', () => renderStory(<AccordionBasic data={data} />))
  .add('Custom', () => renderStory(<AccordionCustom data={data} />));
