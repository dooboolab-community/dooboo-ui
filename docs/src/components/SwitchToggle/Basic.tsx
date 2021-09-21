import {FC, useState} from 'react';
import {SwitchToggle, ThemeProvider, ThemeType, Typography} from 'dooboo-ui';

import {View} from 'react-native';

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
          <Typography.Body1>{isOn ? 'On' : 'Off'}</Typography.Body1>
          <SwitchToggle isOn={isOn} onPress={() => setIsOn(!isOn)} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Typography.Body1>{!isOn ? 'On' : 'Off'}</Typography.Body1>
          <SwitchToggle
            style={{transform: [{rotate: '180deg'}]}}
            isOn={!isOn}
            onPress={() => setIsOn(!isOn)}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};
