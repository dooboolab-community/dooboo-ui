import type {ReactElement, ReactNode} from 'react';
import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {DoobooProvider, useDooboo} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

export {default as AdditionalElement} from './AdditionalElement';
export {default as Basic} from './Basic';
export {default as Outlined} from './Outlined';
export {default as Sizes} from './Sizes';
export {default as OnPress} from './OnPress';
export {default as Solid} from './Solid';
export {default as Disabled} from './Disabled';
export {default as Loading} from './Loading';
export {default as Link} from './Link';

type ContainerProps = {
  children: ReactNode;
};

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export function StoryWrapper({children}: ContainerProps): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  return <StoryContainer>{children}</StoryContainer>;
}

export function StoryProvider({children}: ContainerProps): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper>{children}</StoryWrapper>
    </DoobooProvider>
  );
}
