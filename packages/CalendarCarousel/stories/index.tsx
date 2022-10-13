import 'intl';
import 'intl/locale-data/jsonp/en';

import type {ReactElement} from 'react';
import React from 'react';

import Default from './DefaultStory';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Calendar',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */

storiesOf('Calendar', module).add('default', () => <Default />);
