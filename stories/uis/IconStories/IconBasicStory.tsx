import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

import type {IconNames} from '../../../main';
import {doobooIconList, EditText, Icon, Typography} from '../../../main';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.bg.basic};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

function IconBasicStory(): ReactElement {
  const [searchText, setSearchText] = useState('');

  const filteredIcons = (doobooIconList as IconNames).filter((icon) =>
    icon.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <StoryContainer>
      <EditText
        direction="row"
        // eslint-disable-next-line react/no-unstable-nested-components
        label={() => <Icon name="SearchAlt" />}
        value={searchText}
        placeholder="Search icons"
        onChangeText={(str) => setSearchText(str)}
      />
      <ScrollContainer contentContainerStyle={{alignSelf: 'stretch'}}>
        <Container style={{paddingVertical: 60}}>
          {filteredIcons.map((icon): ReactElement => {
            return (
              <View
                key={icon}
                style={{
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                }}
              >
                <StyledIcon size={16} name={icon} />
                <Typography.Body2 style={{fontSize: 12, textAlign: 'center'}}>
                  {icon}
                </Typography.Body2>
              </View>
            );
          })}
        </Container>
      </ScrollContainer>
      <View style={{height: 40}} />
    </StoryContainer>
  );
}

export default IconBasicStory;
