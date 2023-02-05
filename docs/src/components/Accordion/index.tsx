import {Accordion, DoobooProvider} from 'dooboo-ui';
import type {AccordionListType, AccordionProps} from 'dooboo-ui';
import type {ReactElement, ReactNode} from 'react';

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
      <DoobooProvider themeConfig={{initialThemeType: theme}}>
        <Container />
      </DoobooProvider>
    );
  }

  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <Container>
        {children}
        <Accordion {...props} />
      </Container>
    </DoobooProvider>
  );
};

export default AccordionStory;
