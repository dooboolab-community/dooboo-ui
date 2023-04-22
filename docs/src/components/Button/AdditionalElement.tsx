import type {ReactElement} from 'react';
import {useState} from 'react';
import {Image, View} from 'react-native';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {Button} from 'dooboo-ui';

import {IC_FACEBOOK, IC_GOOGLE} from '../../icon';

import {StoryProvider} from './index';

export default function AdditionalElement(): ReactElement {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <StoryProvider>
      <View>
        <Button
          startElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          type="outlined"
          loading={googleLoading}
          style={{margin: 10}}
          styles={{
            container: css`
              padding: 10px;
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setGoogleLoading(true);
            action('google btn clicked');

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="GOOGLE SIGN IN"
        />
        <Button
          testID="btnFacebook"
          type="outlined"
          startElement={
            <View
              style={{
                position: 'absolute',
                left: 28,
              }}
            >
              <Image style={{width: 15, height: 28}} source={IC_FACEBOOK} />
            </View>
          }
          loading={facebookLoading}
          style={{margin: 10}}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setFacebookLoading(true);
            action('facebook btn clicked');

            const timeout = setTimeout(() => {
              setFacebookLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="FACEBOOK SIGN IN"
        />
      </View>
    </StoryProvider>
  );
}
