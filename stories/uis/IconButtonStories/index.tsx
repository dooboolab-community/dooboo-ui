import IconButtonBasic from './Basic';
import IconButtonColor from './Color';
import IconButtonDisabled from './Disabled';
import IconButtonIconElement from './IconElement';
import IconButtonLoading from './Loading';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<IconButtonBasic />))
  .add('Color', () => renderStory(<IconButtonColor />))
  .add('Loading', () => renderStory(<IconButtonLoading />))
  .add('Disabled', () => renderStory(<IconButtonDisabled />))
  .add('IconElement', () => renderStory(<IconButtonIconElement />));
