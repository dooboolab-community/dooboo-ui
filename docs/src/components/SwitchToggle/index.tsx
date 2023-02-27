import {DoobooProvider, SwitchToggle, Typography, useDooboo} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';
import styled, {css} from '@emotion/native';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useDarkMode} from 'storybook-dark-mode';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export function StoryWrapper(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  return (
    <StoryContainer>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Typography.Body1>{!isOn ? 'On' : 'Off'}</Typography.Body1>
          <SwitchToggle
            styles={{
              container: css`
                margin-left: 8px;
                width: 36px;
                height: 21px;
                border-radius: 50px;
                border-width: 2px;
                padding: 4px;
                border-width: 0px;
              `,
              circle: css`
                width: 12px;
                height: 12px;
                border-radius: 50px;
              `,
            }}
            isOn={!isOn}
            onPress={() => setIsOn(!isOn)}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}
        >
          <Typography.Body1>{!isOn ? 'On' : 'Off'}</Typography.Body1>
          <SwitchToggle
            styles={{
              container: css`
                margin-left: 8px;
                width: 36px;
                height: 21px;
                border-radius: 50px;
                border-width: 2px;
                padding: 4px;
                border-width: 0px;
              `,
              circle: css`
                width: 12px;
                height: 12px;
                border-radius: 50px;
              `,
            }}
            isOn={!isOn}
            onPress={() => setIsOn(!isOn)}
          />
        </View>
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
