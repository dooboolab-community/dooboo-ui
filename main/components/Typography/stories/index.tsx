import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import TypographyDefault from './DefaultStory';
import TypographyWithTheme from './DefaultStoryWithTheme';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('Typography', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <TypographyDefault />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <ThemeProvider initialThemeType="dark">
        <TypographyWithTheme />
      </ThemeProvider>
    </View>
  ));
