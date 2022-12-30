import {light, withTheme} from '@dooboo-ui/theme';

import type {DoobooTheme} from '@dooboo-ui/theme';
import {isEmptyObject} from '../utils';
import styled from '@emotion/native';

// Title
const InvertedStyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledTitle.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedTitle = withTheme(InvertedStyledTitle);

// Heading1
const InvertedStyledHeading1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledHeading1.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedHeading1 = withTheme(InvertedStyledHeading1);

// Heading2
const InvertedStyledHeading2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 17px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledHeading2.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedHeading2 = withTheme(InvertedStyledHeading2);

// Heading3
const InvertedStyledHeading3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledHeading3.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedHeading3 = withTheme(InvertedStyledHeading3);

// Body1
const InvertedStyledBody1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledBody1.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedBody1 = withTheme(InvertedStyledBody1);

// Body2
const InvertedStyledBody2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrastBasic;
    }

    return theme.text.contrastBasic;
  }};
`;

InvertedStyledBody2.defaultProps = {
  style: {includeFontPadding: false},
};

export const InvertedBody2 = withTheme(InvertedStyledBody2);
