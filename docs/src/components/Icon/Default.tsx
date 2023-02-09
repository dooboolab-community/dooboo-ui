import {DoobooProvider, EditText, Icon, doobooIconList} from 'dooboo-ui';

import type {IconNames} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const StoryContainer = styled.View`
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

function IconStory(): ReactElement {
  const [searchText, setSearchText] = useState('');
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  const filteredIcons = (doobooIconList as IconNames).filter((icon) =>
    icon.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
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
      <StoryContainer>
        {filteredIcons.map((icon): ReactElement => {
          return <IconWithLabel name={icon} />;
        })}
      </StoryContainer>
    </View>
  );
}

export function Default({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <IconStory />
    </DoobooProvider>
  );
}
