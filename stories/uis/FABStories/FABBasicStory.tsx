import {FAB, Typography} from '../../../main';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

import type {ReactElement} from 'react';

function FABBasicStory(): ReactElement {
  const [selectedItem, setSelectedItem] = useState('none');
  const [active, setActive] = useState(false);

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <Typography.Heading2>{`clicked item: ${selectedItem}`}</Typography.Heading2>
      <FAB
        style={{bottom: 80}}
        isActive={active}
        styles={{buttonSize: 'medium', iconSize: 25}}
        items={[
          {id: 'search', icon: 'home-light'},
          {id: 'like', icon: 'like-light'},
        ]}
        onPressFAB={() => setActive((prev) => !prev)}
        onPressItem={(item) => {
          if (!item) {
            return;
          }

          setSelectedItem(item.id);
        }}
      />
    </StoryContainer>
  );
}

export default FABBasicStory;
