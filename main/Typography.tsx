import {DoobooTheme, light, withTheme} from './theme';

import styled from '@emotion/native';

// Title
const StyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => theme.text};
`;

StyledTitle.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Title = withTheme(StyledTitle);

// Heading1
const StyledHeading1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => theme.text || '#000'};
`;

StyledHeading1.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Heading1 = withTheme(StyledHeading1);

// Heading2
const StyledHeading2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 17px;
  font-weight: 400;
  color: ${({theme}) => theme.text || '#000'};
`;

StyledHeading2.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Heading2 = withTheme(StyledHeading2);

// Heading3
const StyledHeading3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.text || '#000'};
`;

StyledHeading3.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Heading3 = withTheme(StyledHeading3);

// Body1
const StyledBody1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  color: ${({theme}) => theme.text || '#000'};
`;

StyledBody1.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Body1 = withTheme(StyledBody1);

// Body2
const StyledBody2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => theme.text || '#000'};
`;

StyledBody2.defaultProps = {
  theme: light,
  style: {includeFontPadding: false},
};

const Body2 = withTheme(StyledBody2);

export const Typography = {
  Title,
  Heading1,
  Heading2,
  Heading3,
  Body1,
  Body2,
};
