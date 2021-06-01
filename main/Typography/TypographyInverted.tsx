import {DoobooTheme, light, withTheme} from '../theme';

import styled from '@emotion/native';

// Title
const InvertedStyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => theme.textContrast};
`;

InvertedStyledTitle.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedTitle = withTheme(InvertedStyledTitle);

// Heading1
const InvertedStyledHeading1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => theme.textContrast || '#fff'};
`;

InvertedStyledHeading1.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedHeading1 = withTheme(InvertedStyledHeading1);

// Heading2
const InvertedStyledHeading2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 17px;
  font-weight: 400;
  color: ${({theme}) => theme.textContrast || '#fff'};
`;

InvertedStyledHeading2.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedHeading2 = withTheme(InvertedStyledHeading2);

// Heading3
const InvertedStyledHeading3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.textContrast || '#000'};
`;

InvertedStyledHeading3.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedHeading3 = withTheme(InvertedStyledHeading3);

// Body1
const InvertedStyledBody1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  color: ${({theme}) => theme.textContrast || '#000'};
`;

InvertedStyledBody1.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedBody1 = withTheme(InvertedStyledBody1);

// Body2
const InvertedStyledBody2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => theme.textContrast || '#000'};
`;

InvertedStyledBody2.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

export const InvertedBody2 = withTheme(InvertedStyledBody2);
