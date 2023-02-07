import AccordionBasic from './Basic';
import AccordionCustom from './Custom';
import type {AccordionItemDataType} from '../../../main/components/Accordion/AccordionItem';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

const data: AccordionItemDataType<string, string>[] = [
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic', () => renderStory(<AccordionBasic data={data} />))
  .add('Custom', () => renderStory(<AccordionCustom data={data} />));
