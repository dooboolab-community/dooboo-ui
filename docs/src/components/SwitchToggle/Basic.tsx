import type {FC} from 'react';
import {useState} from 'react';
import {SwitchToggle, Typography} from 'dooboo-ui';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';

import {View} from 'react-native';
import {css} from '@emotion/native';

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <ThemeProvider initialThemeType={themeType}>
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
    </ThemeProvider>
  );
};
