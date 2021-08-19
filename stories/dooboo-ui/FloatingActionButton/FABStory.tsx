import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTheme, withTheme} from '../../../main/theme/ThemeProvider';

import {FAB} from '../../../main';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const FABContainer: FC = () => {
  const {theme} = useTheme();
  const [isActive, setFabActive] = useState(false);

  return (
    <StoryContainer>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <FAB
          theme={theme}
          isActive={isActive}
          FABList={[{id: 'search', icon: 'home-light'}]}
          onPressFABItem={(item) => {
            switch (item.id) {
              case 'mainDefault':
                setFabActive(true);
                break;

              case 'mainActive':
                setFabActive(false);
                break;

              default:
                break;
            }
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
};

export const FABStory = withTheme(FABContainer);
