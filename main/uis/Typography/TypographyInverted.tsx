import type {DoobooTheme} from '@dooboo-ui/theme';
import {light, withTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {isEmptyObject} from '../../utils/utils';

// Title
const InvertedStyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-family: 'Pretendard-Bold';
  font-size: 36px;
  line-height: 50.4px;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrast;
    }

    return theme.text.contrast;
  }};
`;

InvertedStyledTitle.defaultProps = {style: {includeFontPadding: false}};

export const InvertedTitle = withTheme(InvertedStyledTitle);

// Heading
const InvertedStyledHeading = styled.Text<{theme: DoobooTheme}>`
  font-family: 'Pretendard-Bold';
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrast;
    }

    return theme.text.contrast;
  }};
`;

InvertedStyledHeading.defaultProps = {style: {includeFontPadding: false}};

export const InvertedHeading1 = withTheme(styled(InvertedStyledHeading)`
  font-size: 28px;
  line-height: 39.2px;
`);

export const InvertedHeading2 = withTheme(styled(InvertedStyledHeading)`
  font-size: 26px;
  line-height: 36.4px;
`);

export const InvertedHeading3 = withTheme(styled(InvertedStyledHeading)`
  font-size: 24px;
  line-height: 33.6px;
`);

export const InvertedHeading4 = withTheme(styled(InvertedStyledHeading)`
  font-size: 22px;
  line-height: 30.8px;
`);

export const InvertedHeading5 = withTheme(styled(InvertedStyledHeading)`
  font-size: 20px;
  line-height: 28px;
`);

// Body
const InvertedStyledBody = styled.Text<{theme: DoobooTheme}>`
  font-family: 'Pretendard';
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrast;
    }

    return theme.text.contrast;
  }};
`;

InvertedStyledBody.defaultProps = {style: {includeFontPadding: false}};

export const InvertedBody1 = withTheme(styled(InvertedStyledBody)`
  font-size: 18px;
  line-height: 25.2px;
`);

export const InvertedBody2 = withTheme(styled(InvertedStyledBody)`
  font-size: 16px;
  line-height: 22.4px;
`);

export const InvertedBody3 = withTheme(styled(InvertedStyledBody)`
  font-size: 14px;
  line-height: 19.6px;
`);

export const InvertedBody4 = withTheme(styled(InvertedStyledBody)`
  font-size: 12px;
  line-height: 16.4px;
`);
