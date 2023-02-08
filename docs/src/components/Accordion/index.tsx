import {Accordion, DoobooProvider} from 'dooboo-ui';
import type {AccordionItemDataType, AccordionProps} from 'dooboo-ui';
import type {ReactElement, ReactNode} from 'react';
import {Text, View} from 'react-native';

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
    return <View />;
  }

  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <Container>
        {children}
        <Accordion<string, string>
          // @ts-ignore
          renderTitle={(item) => (
            <Text style={{paddingHorizontal: 12}}>{item}</Text>
          )}
          // @ts-ignore
          renderItem={(item) => (
            <Text style={{paddingHorizontal: 12}} numberOfLines={1}>
              {item}
            </Text>
          )}
          {...props}
        />
      </Container>
    </DoobooProvider>
  );
};

export default AccordionStory;
