import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import SelectBoxStory from './SelectBoxStory';
import {ThemeProvider} from '../../../main/theme';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'LoadingIndicator',
};

export const toStorybook = (): ReactElement => <SelectBoxStory />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('SelectBox', module)
  .addDecorator(ContainerDeco)
  .add('SelectBox - light', () => (
    <ThemeProvider initialThemeType="light">
      <SelectBoxStory />
    </ThemeProvider>
  ))
  .add('SelectBox - dark', () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ThemeProvider initialThemeType="dark">
        <SelectBoxStory />
      </ThemeProvider>
    </View>
  ));
