import {Image, View} from 'react-native';
import React, {useState} from 'react';

import {Button} from '../../../index';
import type {FC} from 'react';
import {IC_GOOGLE} from '../../../../../../storybook/assets/icons';
import {LoadingIndicator} from '../../../../LoadingIndicator';
import {Section} from '../../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {action} from '@storybook/addon-actions';
import {css} from '@emotion/native';

const StartElementAndEndElement: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          startElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          loading={googleLoading}
          loadingElement={<LoadingIndicator size="small" color="deepskyblue" />}
          style={{padding: 4}}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              border-color: deepskyblue;
              width: 300px;
              height: 52px;
            `,
            text: {color: 'deepskyblue'},
          }}
          onPress={(e): void => {
            setGoogleLoading(true);

            action('GOOGLE SIGN IN')(e);

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="GOOGLE SIGN IN"
        />
      </Section>
    </ThemeProvider>
  );
};

export default StartElementAndEndElement;
