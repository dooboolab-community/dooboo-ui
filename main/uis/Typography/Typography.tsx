import type {DoobooTheme} from '@dooboo-ui/theme';
import {withTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {isEmptyObject} from '../../utils/utils';

// Title
const StyledTitle = styled.Text<{theme: DoobooTheme}>`
  font-family: 'Pretendard-Bold';
  font-size: 36px;
  line-height: 50.4px;
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
  font-family: 'Pretendard-Bold';
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledHeading.defaultProps = {style: {includeFontPadding: false}};

export const Heading1 = withTheme(styled(StyledHeading)`
  font-size: 28px;
  line-height: 39.2px;
`);

export const Heading2 = withTheme(styled(StyledHeading)`
  font-size: 26px;
  line-height: 36.4px;
`);

export const Heading3 = withTheme(styled(StyledHeading)`
  font-size: 24px;
  line-height: 33.6px;
`);

export const Heading4 = withTheme(styled(StyledHeading)`
  font-size: 22px;
  line-height: 30.8px;
`);

export const Heading5 = withTheme(styled(StyledHeading)`
  font-size: 20px;
  line-height: 28px;
`);

// Body
const StyledBody = styled.Text<{theme: DoobooTheme}>`
  font-family: 'Pretendard';
  color: ${({theme}) => {
    if (isEmptyObject(theme)) {
      return theme.text.disabled;
    }

    return theme.text.basic;
  }};
`;

StyledBody.defaultProps = {style: {includeFontPadding: false}};

export const Body1 = withTheme(styled(StyledBody)`
  font-size: 18px;
  line-height: 25.2px;
`);

export const Body2 = withTheme(styled(StyledBody)`
  font-size: 16px;
  line-height: 22.4px;
`);

export const Body3 = withTheme(styled(StyledBody)`
  font-size: 14px;
  line-height: 19.6px;
`);

export const Body4 = withTheme(styled(StyledBody)`
  font-size: 12px;
  line-height: 16.4px;
`);
