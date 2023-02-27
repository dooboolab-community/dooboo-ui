import '@expo/match-media';

import {configure, getStorybookUI} from '@storybook/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storiesOfUIs = require.context('./stories/uis', true, /\.stories\.tsx$/);

const storiesOfModals = require.context(
  './stories/modals',
  true,
  /\.stories\.tsx$/,
);

const storiesOfPackages = require.context(
  './stories/packages',
  true,
  /\.stories\.tsx$/,
);

const getStories = (): any => {
  storiesOfUIs.keys().forEach((filename) => storiesOfUIs(filename));
  storiesOfModals.keys().forEach((filename) => storiesOfModals(filename));
  storiesOfPackages.keys().forEach((filename) => storiesOfPackages(filename));
};

configure(getStories, module);

export default getStorybookUI({
  asyncStorage: AsyncStorage,
});
