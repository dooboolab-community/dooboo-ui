import {DoobooTheme, light, withTheme} from '@dooboo-ui/theme';

import {isEmptyObject} from '../utils';
import styled from '@emotion/native';

// Title
const StyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledTitle.defaultProps = {
  style: {includeFontPadding: false},
};

export const Title = withTheme(StyledTitle);

// Heading1
const StyledHeading1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledHeading1.defaultProps = {
  style: {includeFontPadding: false},
};

export const Heading1 = withTheme(StyledHeading1);

// Heading2
const StyledHeading2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 17px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledHeading2.defaultProps = {
  style: {includeFontPadding: false},
};

export const Heading2 = withTheme(StyledHeading2);

// Heading3
const StyledHeading3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledHeading3.defaultProps = {
  style: {includeFontPadding: false},
};

export const Heading3 = withTheme(StyledHeading3);

// Body1
const StyledBody1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledBody1.defaultProps = {
  style: {includeFontPadding: false},
};

export const Body1 = withTheme(StyledBody1);

// Body2
const StyledBody2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text;
    }

    return theme.text;
  }};
`;

StyledBody2.defaultProps = {
  style: {includeFontPadding: false},
};

export const Body2 = withTheme(StyledBody2);
