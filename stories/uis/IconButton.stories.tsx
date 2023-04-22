// Caveat: Expo web needs React to be imported
import React from 'react';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {renderStory} from '../Common';

import IconButtonBasicStory from './IconButtonStories/IconButtonBasicStory';
import IconButtonColorStory from './IconButtonStories/IconButtonColorStory';
import IconButtonDisabledStory from './IconButtonStories/IconButtonDisabledStory';
import IconButtonIconElementStory from './IconButtonStories/IconButtonIconElementStory';
import IconButtonLoadingStory from './IconButtonStories/IconButtonLoadingStory';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<IconButtonBasicStory />))
  .add('Color', () => renderStory(<IconButtonColorStory />))
  .add('Loading', () => renderStory(<IconButtonLoadingStory />))
  .add('Disabled', () => renderStory(<IconButtonDisabledStory />))
  .add('IconElement', () => renderStory(<IconButtonIconElementStory />));
