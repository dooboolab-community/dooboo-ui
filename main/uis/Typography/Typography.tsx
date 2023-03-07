import type {DoobooTheme} from '@dooboo-ui/theme';
import {isEmptyObject} from '../../utils/utils';
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

    return theme.text.basic;
  }};
`;

StyledTitle.defaultProps = {style: {includeFontPadding: false}};

export const Title = withTheme(StyledTitle);

// Heading1
const StyledHeading1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 26px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading1.defaultProps = {style: {includeFontPadding: false}};

export const Heading1 = withTheme(StyledHeading1);

// Heading2
const StyledHeading2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading2.defaultProps = {style: {includeFontPadding: false}};

export const Heading2 = withTheme(StyledHeading2);

// Heading3
const StyledHeading3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 18px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading3.defaultProps = {style: {includeFontPadding: false}};

export const Heading3 = withTheme(StyledHeading3);

// Heading4
const StyledHeading4 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading4.defaultProps = {style: {includeFontPadding: false}};

export const Heading4 = withTheme(StyledHeading4);

// Heading5
const StyledHeading5 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading5.defaultProps = {style: {includeFontPadding: false}};

export const Heading5 = withTheme(StyledHeading5);

// Body1
const StyledBody1 = styled.Text<{theme: DoobooTheme}>`
  font-size: 18px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody1.defaultProps = {style: {includeFontPadding: false}};

export const Body1 = withTheme(StyledBody1);

// Body2
const StyledBody2 = styled.Text<{theme: DoobooTheme}>`
  font-size: 16px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody2.defaultProps = {style: {includeFontPadding: false}};

export const Body2 = withTheme(StyledBody2);

// Body3
const StyledBody3 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody3.defaultProps = {style: {includeFontPadding: false}};

export const Body3 = withTheme(StyledBody3);

// Body4
const StyledBody4 = styled.Text<{theme: DoobooTheme}>`
  font-size: 14px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody4.defaultProps = {style: {includeFontPadding: false}};

export const Body4 = withTheme(StyledBody4);
