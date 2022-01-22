import {Accordion, AccordionListType} from 'dooboo-ui';
import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ThemeProvider, ThemeType} from '@dooboo-ui/theme';

import styled from '@emotion/native';

const Container = styled.View`
  padding: 20px;
  width: 50%;
  display: inline-block;
  background-color: ${({theme}) => theme.background};
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

interface AccordionStoryProps {
  theme: ThemeType;
  data: AccordionListType;
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
}

const AccordionStory = ({
  theme,
  ...props
}: AccordionStoryProps): ReactElement => (
  <ThemeProvider initialThemeType={theme}>
    <Container>
      <Accordion {...props} />
    </Container>
  </ThemeProvider>
);

export default AccordionStory;
