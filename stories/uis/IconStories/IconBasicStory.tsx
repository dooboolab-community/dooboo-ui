import type {ComponentProps} from 'react';
import {View} from 'react-native';
import styled, {css} from '@emotion/native';

import {Icon, Typography} from '../../../main';
import {StoryWrapper} from '../../Common';

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

export default function IconBasicStory({
  name,
}: ComponentProps<typeof Icon>): JSX.Element {
  return (
    <StoryWrapper>
      <View
        style={css`
          align-items: center;
        `}
      >
        <StyledIcon name={name} size={16} />
        <Typography.Body2
          style={css`
            font-size: 12px;
            text-align: center;
          `}
        >
          {name}
        </Typography.Body2>
      </View>
    </StoryWrapper>
  );
}
