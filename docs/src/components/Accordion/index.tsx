import type {AccordionListType, AccordionProps} from 'dooboo-ui';
import type {ReactElement, ReactNode} from 'react';

import {Accordion} from 'dooboo-ui';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.View`
  padding: 20px;
  width: 100%;
  display: inline-block;
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export const sampleData: AccordionListType = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

export interface AccordionStoryProps extends AccordionProps {
  theme?: ThemeType;
  children?: ReactNode;
}

const AccordionStory = ({
  theme = 'light',
  children,
  ...props
}: AccordionStoryProps): ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ThemeProvider initialThemeType={theme}>
        <Container />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider initialThemeType={theme}>
      <Container>
        {children}
        <Accordion {...props} />
      </Container>
    </ThemeProvider>
  );
};

export default AccordionStory;
