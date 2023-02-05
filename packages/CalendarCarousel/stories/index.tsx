import 'intl';
import 'intl/locale-data/jsonp/en';

import Default from './DefaultStory';
import React from 'react';
import {storiesOf} from '@storybook/react-native';

storiesOf('[Package] Calendar', module).add('Basic - light', () => <Default />);
