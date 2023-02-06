import AlertDialogContent from './BasicStory';
import {DoobooProvider} from '../../../main';
import React from 'react';
import {storiesOf} from '@storybook/react-native';

storiesOf('[Modal] AlertDialog', module)
  .add('Basic - light', () => (
    <DoobooProvider themeConfig={{initialThemeType: 'light'}}>
      <AlertDialogContent />
    </DoobooProvider>
  ))
  .add('Basic - dark', () => (
    <DoobooProvider themeConfig={{initialThemeType: 'dark'}}>
      <AlertDialogContent />
    </DoobooProvider>
  ));
