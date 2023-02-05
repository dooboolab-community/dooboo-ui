import {DoobooProvider, LoadingIndicator} from 'dooboo-ui';

import type {ReactElement} from 'react';
import styled from '@emotion/native';

const StyledView = styled.View`
  height: 60;
  background-color: ${({theme}) => theme.bg.basic};
  align-self: 'stretch';
  justify-content: 'center';
`;

export function Component(): ReactElement {
  return (
    <>
      <StyledView>
        <LoadingIndicator />
      </StyledView>
      <StyledView>
        <LoadingIndicator size="small" color="#008299" />
      </StyledView>
    </>
  );
}

export function Basic({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <Component />
    </DoobooProvider>
  );
}
