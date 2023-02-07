import {DoobooProvider, Icon, doobooIconList} from 'dooboo-ui';

import type {IconNames} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

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
  color: ${({theme}) => theme.text.basic};
`;

function IconWithLabel({name}): ReactElement {
  return (
    <View
      style={{
        width: 80,
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
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      {(doobooIconList as IconNames).map((icon): ReactElement => {
        return <IconWithLabel name={icon} />;
      })}
    </StoryContainer>
  );
}

export function Default({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <IconStory />
    </DoobooProvider>
  );
}
