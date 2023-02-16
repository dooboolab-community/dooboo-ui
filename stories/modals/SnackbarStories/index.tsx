// Caveat: Expo web needs React to be imported
import React from 'react';
import SnackbarBasicStory from './SnackbarBasicStory';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('[Modal] Snackbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<SnackbarBasicStory />));