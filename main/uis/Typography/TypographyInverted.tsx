import {light, withTheme} from '@dooboo-ui/theme';

import type {DoobooTheme} from '@dooboo-ui/theme';
import {isEmptyObject} from '../../utils/utils';
import styled from '@emotion/native';

// Title
const InvertedStyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-size: 28px;
  font-weight: 400;
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
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrast;
    }

    return theme.text.contrast;
  }};
`;

InvertedStyledHeading.defaultProps = {style: {includeFontPadding: false}};

export const InvertedHeading1 = withTheme(
  styled(InvertedStyledHeading)`
    font-size: 26px;
  `,
);

export const InvertedHeading2 = withTheme(
  styled(InvertedStyledHeading)`
    font-size: 22px;
  `,
);

export const InvertedHeading3 = withTheme(
  styled(InvertedStyledHeading)`
    font-size: 18px;
  `,
);

export const InvertedHeading4 = withTheme(
  styled(InvertedStyledHeading)`
    font-size: 16px;
  `,
);

export const InvertedHeading5 = withTheme(
  styled(InvertedStyledHeading)`
    font-size: 14px;
  `,
);

// Body
const InvertedStyledBody = styled.Text<{theme: DoobooTheme}>`
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return light.text.contrast;
    }

    return theme.text.contrast;
  }};
`;

InvertedStyledBody.defaultProps = {style: {includeFontPadding: false}};

export const InvertedBody1 = withTheme(
  styled(InvertedStyledBody)`
    font-size: 18px;
  `,
);

export const InvertedBody2 = withTheme(
  styled(InvertedStyledBody)`
    font-size: 16px;
  `,
);

export const InvertedBody3 = withTheme(
  styled(InvertedStyledBody)`
    font-size: 14px;
  `,
);

export const InvertedBody4 = withTheme(
  styled(InvertedStyledBody)`
    font-size: 12px;
  `,
);
