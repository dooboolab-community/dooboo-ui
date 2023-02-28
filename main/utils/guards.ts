import {Image, Text, TextInput, View} from 'react-native';

import {Icon} from '../uis/Icon';
import React from 'react';
import type {ReactElement} from 'react';

export const getRootElementStyleType = (
  element: ReactElement,
): 'TextStyle' | 'ViewStyle' | 'unknown' => {
  if (React.isValidElement(element)) {
    if (
      element.type === Text ||
      element.type === TextInput ||
      element.type === Icon
    ) {
      return 'TextStyle';
    }

    if (element.type === Image || element.type === View) {
      return 'ViewStyle';
    }
  }

  return 'unknown';
};
