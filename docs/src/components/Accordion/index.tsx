import {Accordion, DoobooProvider, Typography, useDooboo} from 'dooboo-ui';
import type {AccordionItemDataType, AccordionProps} from 'dooboo-ui';
import React, {useEffect} from 'react';
import type {ReactElement, ReactNode} from 'react';

import {Text} from 'react-native';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';

const Container = styled.View`
  padding: 20px;
  width: 100%;
  display: inline-block;
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export const sampleData: AccordionItemDataType<string, string>[] = [
  {
    title: 'Lists',
    items: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    items: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    items: ['report list', 'statistics'],
  },
];

export interface AccordionStoryProps extends AccordionProps<string, string> {
  children?: ReactNode;
}

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export function StoryWrapper({
  children,
  ...props
}: AccordionStoryProps): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  return (
    <StoryContainer>
      <Container>
        {children}
        <Accordion<string, string>
          // @ts-ignore
          renderTitle={(item) => (
            <Text style={{paddingHorizontal: 12}}>{item}</Text>
          )}
          // @ts-ignore
          renderItem={(item) => (
            <Typography.Body2 style={{paddingHorizontal: 12}} numberOfLines={1}>
              {item}
            </Typography.Body2>
          )}
          {...props}
        />
      </Container>
    </StoryContainer>
  );
}

export function AccordionStory({
  children,
  ...props
}: AccordionStoryProps): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper {...props}>{children}</StoryWrapper>
    </DoobooProvider>
  );
}

export default AccordionStory;
