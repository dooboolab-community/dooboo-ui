import {Accordion, AccordionListType} from 'dooboo-ui';
import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ThemeProvider, ThemeType} from '@dooboo-ui/theme';

import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.View`
  padding: 20px;
  width: 100%;
  display: inline-block;
  background-color: ${({theme}) => theme.background};
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

export interface AccordionStoryBaseProps {
  theme?: ThemeType;
  data: AccordionListType;
}

interface AccordionStoryProps extends AccordionStoryBaseProps {
  style?: StyleProp<ViewStyle>;
  styles?: {
    titleContainer?: StyleProp<ViewStyle>;
    bodyContainer?: StyleProp<ViewStyle>;
  };
  shouldAnimate?: boolean;
  collapseOnStart?: boolean;
  animDuration?: number;
  activeOpacity?: number;
  toggleElement?: ReactElement | null;
  renderTitle?: (item: string) => ReactElement;
  renderBody?: (item: string) => ReactElement;
  children?: React.ReactNode;
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
    return <Container />;
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
