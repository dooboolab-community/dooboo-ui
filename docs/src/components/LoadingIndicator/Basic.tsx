import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';

import type {FC} from 'react';
import {LoadingIndicator} from 'dooboo-ui';
import styled from '@emotion/native';

const StyledView = styled.View`
  height: 60;
  background-color: ${({theme}) => theme.bg.default};
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
