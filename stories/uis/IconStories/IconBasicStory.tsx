// Caveat: Expo web needs React to be imported
import type {ComponentProps} from 'react';
import {View} from 'react-native';
import styled, {css} from '@emotion/native';

import {Icon, Typography} from '../../../main';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

function IconBasicStory({name}: ComponentProps<typeof Icon>): JSX.Element {
  return (
    <StoryContainer>
      <View
        style={css`
          align-items: center;
        `}
      >
        <StyledIcon name={name} size={16} />
        <Typography.Body2 style={{fontSize: 12, textAlign: 'center'}}>
          {name}
        </Typography.Body2>
      </View>
    </StoryContainer>
  );
}

export default IconBasicStory;
