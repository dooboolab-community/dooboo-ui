// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import {FAB} from '../../../main';
import type {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.Text`
  font-size: 24px;
`;

function FABBasic(): ReactElement {
  const [selectedItem, setSelectedItem] = useState('none');
  const [active, setActive] = useState(false);

  return (
    <StoryContainer>
      <SafeAreaView style={{display: 'flex', width: '100%', height: '100%'}}>
        <ContentContainer>
          <ItemText>{`clicked item: ${selectedItem}`}</ItemText>
        </ContentContainer>
        <FAB
          isActive={active}
          styles={{buttonSize: 'medium', iconSize: 25}}
          FABItems={[
            {id: 'search', icon: 'home-light'},
            {id: 'like', icon: 'like-light'},
          ]}
          onPressFAB={() => setActive((prev) => !prev)}
          onPressFABItem={(item) => {
            if (!item) {
              return;
            }

            setSelectedItem(item.id);
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
}

export default FABBasic;
