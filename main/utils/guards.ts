import React, {cloneElement} from 'react';
import type {ViewStyle} from 'react-native';
import {
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Icon} from '../uis/Icon';

const getRootElementStyleType = (
  element: JSX.Element,
): 'TextStyle' | 'ViewStyle' | 'unknown' => {
  if (React.isValidElement(element)) {
    if (
      element.type === Text ||
      element.type === TextInput ||
      element.type === Icon
    ) {
      return 'TextStyle';
    }

    if (
      element.type === Image ||
      element.type === View ||
      element.type === Button ||
      element.type === TouchableHighlight ||
      element.type === TouchableOpacity ||
      element.type === Pressable ||
      element.type === TouchableWithoutFeedback
    ) {
      return 'ViewStyle';
    }
  }

  return 'unknown';
};

type CloneElemColorsParams = {
  /**
   * ReactElement to be cloned to shape default colors.
   */
  element?: JSX.Element;
  /**
   * Text color to be applied.
   * If not passed, default color will be applied.
   * Invalid if element is ViewStyle.
   */
  color?: string;
  /**
   * Background color to be applied.
   * If not passed, default color will be applied.
   * Invalid if element is TextStyle.
   */
  backgroundColor?: string;
  /**
   * Extra style to be applied.
   */
  style?: ViewStyle;
};

/**
 * This function applies default colors to cloned element.
 *
 * @param {CloneElemColorsParams} params
 * @returns {JSX.Element} - Cloned element with default colors if exists. Otherwise, null.
 */
export const cloneElemWithDefaultColors = ({
  element,
  color,
  backgroundColor,
  style,
}: CloneElemColorsParams): JSX.Element | null => {
  return element
    ? cloneElement(element, {
        style: [
          getRootElementStyleType(element) === 'TextStyle' && {
            color,
          },
          getRootElementStyleType(element) === 'ViewStyle' && {
            borderColor: color,
            backgroundColor: backgroundColor,
          },
          {...style, ...element.props.style},
        ],
      })
    : null;
};
