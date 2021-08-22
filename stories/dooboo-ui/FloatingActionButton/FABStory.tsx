import React, {FC} from 'react';
import {useTheme, withTheme} from '../../../main/theme/ThemeProvider';

import {FAB} from '../../../main';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const FABContainer: FC = () => {
  const {theme} = useTheme();

  return (
    <StoryContainer>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <FAB
          size="medium"
          theme={theme}
          FABList={[{id: 'search', icon: 'home-light'}]}
          onPressFABItem={(item) => {
            console.log(item.id);
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
};

export const FABStory = withTheme(FABContainer);
