import IconButtonBasicStory from './IconButtonBasicStory';
import IconButtonColorStory from './IconButtonColorStory';
import IconButtonDisabledStory from './IconButtonDisabledStory';
import IconButtonIconElementStory from './IconButtonIconElementStory';
import IconButtonLoadingStory from './IconButtonLoadingStory';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<IconButtonBasicStory />))
  .add('Color', () => renderStory(<IconButtonColorStory />))
  .add('Loading', () => renderStory(<IconButtonLoadingStory />))
  .add('Disabled', () => renderStory(<IconButtonDisabledStory />))
  .add('IconElement', () => renderStory(<IconButtonIconElementStory />));
