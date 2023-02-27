import {
  DoobooProvider,
  EditText,
  Icon,
  doobooIconList,
  useDooboo,
} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';

import type {IconNames} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';
import {useFonts} from 'expo-font';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.bg.basic};
  padding: 20px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: ${({theme}) => theme.text.basic};
`;

function IconWithLabel({name}): ReactElement {
  return (
    <View
      style={{
        width: 140,
        flexWrap: 'wrap',
        padding: 8,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledIcon size={16} name={name} />
      <StyledText>{name}</StyledText>
    </View>
  );
}

export function StoryWrapper(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const [searchText, setSearchText] = useState('');
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  if (!fontsLoaded) {
    return (
      <StoryContainer>
        <View />
      </StoryContainer>
    );
  }

  const filteredIcons = (doobooIconList as IconNames).filter((icon) =>
    icon.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <StoryContainer>
      <View style={{flexDirection: 'column'}}>
        <EditText
          direction="row"
          style={{marginBottom: 20}}
          // eslint-disable-next-line react/no-unstable-nested-components
          label={() => <Icon name="SearchAlt" />}
          value={searchText}
          placeholder="Search icons"
          onChangeText={(str) => setSearchText(str)}
        />
        <Container>
          {filteredIcons.map((icon): ReactElement => {
            return <IconWithLabel name={icon} />;
          })}
        </Container>
      </View>
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
