import {LoadingIndicator, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import styled from '@emotion/native';

const StyledView = styled.View`
  height: 60;
  background-color: ${({theme}) => theme.background};
  align-self: 'stretch';
  justify-content: 'center';
`;

export const Component: FC = () => {
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
};

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => (
  <ThemeProvider initialThemeType={themeType}>
    <Component />
  </ThemeProvider>
);
