import ProgressStory from './DefaultStory';
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('ProgressStory', module)
  .addDecorator(withKnobs)
  .add('Default', () => <ProgressStory />);
