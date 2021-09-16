import {LoadingIndicator, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import styled from '@emotion/native';

const View = styled.View`
  height: 60;
  background-color: ${({theme}) => theme.background};
  align-self: 'stretch';
  justify-content: 'center';
`;

export const Component: FC = () => {
  return (
    <>
      <View>
        <LoadingIndicator />
      </View>
      <View>
        <LoadingIndicator size="small" color="#008299" />
      </View>
    </>
  );
};

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => (
  <ThemeProvider initialThemeType={themeType}>
    <Component />
  </ThemeProvider>
);
