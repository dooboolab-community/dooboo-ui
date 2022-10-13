import type {DoobooTheme} from '@dooboo-ui/theme';
import {isEmptyObject} from '../utils';
import styled from '@emotion/native';
import {withTheme} from '@dooboo-ui/theme';

// Title
const StyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.default;
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
      return theme.text.disabled;
    }

    return theme.text.default;
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
      return theme.text.disabled;
    }

    return theme.text.default;
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
      return theme.text.disabled;
    }

    return theme.text.default;
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
      return theme.text.disabled;
    }

    return theme.text.default;
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
      return theme.text.disabled;
    }

    return theme.text.default;
  }};
`;

StyledBody2.defaultProps = {
  style: {includeFontPadding: false},
};

export const Body2 = withTheme(StyledBody2);
