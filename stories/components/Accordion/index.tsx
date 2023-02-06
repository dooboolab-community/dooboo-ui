import {AccordionBasic} from './Basic';
import {DoobooProvider} from '../../../main';
import React from 'react';
import {StoryWrapper} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <DoobooProvider>
      <StoryWrapper>
        <AccordionBasic />
      </StoryWrapper>
    </DoobooProvider>
  ));
