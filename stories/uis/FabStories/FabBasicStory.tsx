// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {css} from '@emotion/native';

import {Fab, Typography} from '../../../main';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

function FabBasicStory(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState('none');
  const [active, setActive] = useState(false);

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <Typography.Heading2>{`clicked item: ${selectedItem}`}</Typography.Heading2>
      <Fab
        style={css`
          bottom: 30px;
        `}
        isActive={active}
        icons={['MagnifyingGlass', 'Heart']}
        onPressFab={() => setActive((prev) => !prev)}
        onPressItem={(item) => {
          if (!item) {
            return;
          }

          setSelectedItem(item);
        }}
      />
    </StoryContainer>
  );
}

export default FabBasicStory;
