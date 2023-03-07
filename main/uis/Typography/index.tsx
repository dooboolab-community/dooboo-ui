import {
  Body1,
  Body2,
  Body3,
  Body4,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Title,
} from './Typography';
import {
  InvertedBody1,
  InvertedBody2,
  InvertedBody3,
  InvertedBody4,
  InvertedHeading1,
  InvertedHeading2,
  InvertedHeading3,
  InvertedHeading4,
  InvertedHeading5,
  InvertedTitle,
} from './TypographyInverted';

import React from 'react';
import {Text} from 'react-native';

export const Typography = {
  Title,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body1,
  Body2,
  Body3,
  Body4,
};

export const TypographyInverted = {
  Title: InvertedTitle,
  Heading1: InvertedHeading1,
  Heading2: InvertedHeading2,
  Heading3: InvertedHeading3,
  Heading4: InvertedHeading4,
  Heading5: InvertedHeading5,
  Body1: InvertedBody1,
  Body2: InvertedBody2,
  Body3: InvertedBody3,
  Body4: InvertedBody4,
};

export const setFontFamily = (fontFamily: string): void => {
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
