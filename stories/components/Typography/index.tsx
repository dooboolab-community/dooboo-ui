// Caveat: Expo web needs React to be imported
import React from 'react';
import TypographyBasic from './Basic';
import TypographyWithTheme from './WithTheme';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<TypographyBasic />))
  .add('WithTheme', () => renderStory(<TypographyWithTheme />));
