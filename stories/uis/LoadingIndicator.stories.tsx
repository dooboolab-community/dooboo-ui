import LoadingIndicatorBasicStory from './LoadingIndicatorStories/LoadingIndicatorBasicStory';
import LoadingIndicatorCustomStory from './LoadingIndicatorStories/LoadingIndicatorCustomStory';
import LoadingIndicatorImageStory from './LoadingIndicatorStories/LoadingIndicatorImageStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('LoadingIndicator', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<LoadingIndicatorBasicStory />))
  .add('Image', () => renderStory(<LoadingIndicatorImageStory />))
  .add('Custom', () => renderStory(<LoadingIndicatorCustomStory />));