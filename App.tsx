import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';
import '@expo/match-media';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import type {Preview} from '@storybook/react';
import {start} from '@storybook/react-native';

const stories: Parameters<typeof start>[0]['storyEntries'] = [
  {
    titlePrefix: 'UI',
    directory: './stories/uis',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    // @ts-ignore
    req: require.context(
      './stories/uis',
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    ),
  },
  {
    titlePrefix: 'Modal',
    directory: './stories/modals',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    // @ts-ignore
    req: require.context(
      './stories/modals',
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    ),
  },
  {
    titlePrefix: 'Package',
    directory: './stories/packages',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    // @ts-ignore
    req: require.context(
      './stories/packages',
      true,
      /^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,
    ),
  },
];

// @ts-ignore
global.STORIES = stories;

const preview: Preview = {
  decorators: [withBackgrounds],
  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        {name: 'plain', value: 'white'},
        {name: 'warm', value: 'hotpink'},
        {name: 'cool', value: 'deepskyblue'},
      ],
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const view = start({
  annotations: [
    preview,
    require('@storybook/react-native/dist/preview'),
    require('@storybook/addon-actions/preview'),
  ],
  storyEntries: global.STORIES,
});

export default view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});
