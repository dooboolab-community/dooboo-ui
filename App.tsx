import '@expo/match-media';

import {configure, getStorybookUI} from '@storybook/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import './.storybook/addons';

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require('./.storybook');
}, module);

export default getStorybookUI({
  asyncStorage: AsyncStorage,
});
