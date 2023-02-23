import React, {useEffect, useState} from 'react';

import {ButtonGroup, DoobooProvider, useDooboo} from 'dooboo-ui';
import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
  align-self: stretch;
  padding: 0 24px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export function StoryWrapper(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [storybookTheme]);

  return (
    <StoryContainer>
      <Container>
        <ButtonGroup
          style={{marginTop: 40, marginHorizontal: 20, marginBottom: 40}}
          onPress={(index: number): void => setSelectedIndex(index)}
          data={data}
          selectedIndex={selectedIndex}
        />
      </Container>
    </StoryContainer>
  );
}

export default function StoryProvider(): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper />
    </DoobooProvider>
  );
}
