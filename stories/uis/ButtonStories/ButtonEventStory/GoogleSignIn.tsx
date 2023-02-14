import {Button, LoadingIndicator} from '../../../../main';
import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {Image, View} from 'react-native';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';
import {buttonColors, buttonSizes, buttonTypes} from '../../const';

import {IC_GOOGLE} from '../../../../storybook/assets/icons';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';
import {action} from '@storybook/addon-actions';
import {css} from '@emotion/native';

function StartElementAndEndElement(): ReactElement {
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  const type = select<ButtonType>('type', buttonTypes, 'solid');
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StorySection>
      <Button
        activeOpacity={activeOpacity}
        disabled={disabled}
        type={type}
        size={size}
        color={color}
        startElement={
          <View style={{marginRight: 12}}>
            <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
          </View>
        }
        borderRadius={80}
        loading={googleLoading}
        loadingElement={<LoadingIndicator size="small" color="deepskyblue" />}
        style={{margin: 4}}
        styles={{
          container: css`
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
