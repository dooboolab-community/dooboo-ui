import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {LoadingIndicator} from 'dooboo-ui';

import {StoryProvider} from './index';

const StyledView = styled.View`
  height: 60px;
  background-color: ${({theme}) => theme.bg.basic};
  align-self: stretch;
  justify-content: center;
`;

export default function Basic(): ReactElement {
  return (
    <StoryProvider>
      <StyledView>
        <LoadingIndicator />
      </StyledView>
      <StyledView>
        <LoadingIndicator size="small" color="#008299" />
      </StyledView>
    </StoryProvider>
  );
}
