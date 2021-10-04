import {Body1, Body2, Heading1, Heading2, Heading3, Title} from './Typography';
import {
  InvertedBody1,
  InvertedBody2,
  InvertedHeading1,
  InvertedHeading2,
  InvertedHeading3,
  InvertedTitle,
} from './TypographyInverted';

import React from 'react';
import {Text} from 'react-native';

export const Typography = {
  Title,
  Heading1,
  Heading2,
  Heading3,
  Body1,
  Body2,
};

export const TypographyInverted = {
  Title: InvertedTitle,
  Heading1: InvertedHeading1,
  Heading2: InvertedHeading2,
  Heading3: InvertedHeading3,
  Body1: InvertedBody1,
  Body2: InvertedBody2,
};

export const setFontFamiliy = (fontFamily: string): void => {
  const style = {
    includeFontPadding: false,
    fontFamily,
  };

  // @ts-ignore
  let oldRender = Text.render;

  // @ts-ignore
  Text.render = (...args: any) => {
    let origin = oldRender.call(this, ...args);

    return React.cloneElement(origin, {
      style: [style, origin.props.style],
    });
  };
};
