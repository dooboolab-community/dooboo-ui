// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number, select} from '@storybook/addon-knobs';

import {IC_GOOGLE} from '../../../../assets/icons';
import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {Button, LoadingIndicator} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';
import {buttonColors, buttonSizes, buttonTypes} from '../../const';

function StartElementAndEndElement(): JSX.Element {
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
            <Image style={{width: 32, height: 32}} source={IC_GOOGLE} />
          </View>
        }
        borderRadius={80}
        loading={googleLoading}
        loadingElement={<LoadingIndicator size="small" color="deepskyblue" />}
        style={{margin: 4}}
        styles={{
          container: css`
            width: 300px;
            border-width: 0.5px;
            border-color: deepskyblue;
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
