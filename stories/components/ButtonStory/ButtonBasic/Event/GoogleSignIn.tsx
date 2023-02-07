import {Button, LoadingIndicator} from '../../../../../main';
import {Image, View} from 'react-native';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import {IC_GOOGLE} from '../../../../../storybook/assets/icons';
import type {ReactElement} from 'react';
import {StorySection} from '../../../../GlobalStyles';
import {action} from '@storybook/addon-actions';
import {css} from '@emotion/native';

function StartElementAndEndElement(): ReactElement {
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <StorySection>
      <Button
        startElement={
          <View style={{marginRight: 12}}>
            <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
          </View>
        }
        loading={googleLoading}
        loadingElement={<LoadingIndicator size="small" color="deepskyblue" />}
        style={{margin: 4}}
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
    </StorySection>
  );
}

export default StartElementAndEndElement;
