import type {DoobooTheme} from '@dooboo-ui/theme';
import {withTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {isEmptyObject} from '../../utils/utils';

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

// Heading
const StyledHeading = styled.Text<{theme: DoobooTheme}>`
  font-weight: 400;
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading.defaultProps = {style: {includeFontPadding: false}};

export const Heading1 = withTheme(
  styled(StyledHeading)`
    font-size: 26px;
  `,
);

export const Heading2 = withTheme(
  styled(StyledHeading)`
    font-size: 22px;
  `,
);

export const Heading3 = withTheme(
  styled(StyledHeading)`
    font-size: 18px;
  `,
);

export const Heading4 = withTheme(
  styled(StyledHeading)`
    font-size: 16px;
  `,
);

export const Heading5 = withTheme(
  styled(StyledHeading)`
    font-size: 14px;
  `,
);

// Body
const StyledBody = styled.Text<{theme: DoobooTheme}>`
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody.defaultProps = {style: {includeFontPadding: false}};

export const Body1 = withTheme(
  styled(StyledBody)`
    font-size: 18px;
  `,
);

export const Body2 = withTheme(
  styled(StyledBody)`
    font-size: 16px;
  `,
);

export const Body3 = withTheme(
  styled(StyledBody)`
    font-size: 14px;
  `,
);

export const Body4 = withTheme(
  styled(StyledBody)`
    font-size: 12px;
  `,
);
