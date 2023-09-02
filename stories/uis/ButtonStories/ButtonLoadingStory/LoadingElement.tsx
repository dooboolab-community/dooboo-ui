// Caveat: Expo web needs React to be imported
import React from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {Button, LoadingIndicator} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';
import {buttonColors, buttonSizes, buttonTypes} from '../../const';

function Loading(): JSX.Element {
  const type = select<ButtonType>('type', buttonTypes, 'solid');
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StorySection>
      <Button
        loading={loading}
        color={color}
        size={size}
        activeOpacity={activeOpacity}
        disabled={disabled}
        type={type}
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{margin: 4}}
        // eslint-disable-next-line no-console
        onPress={() => console.log(`press loading button`)}
      />
    </StorySection>
  );
}

export default Loading;
