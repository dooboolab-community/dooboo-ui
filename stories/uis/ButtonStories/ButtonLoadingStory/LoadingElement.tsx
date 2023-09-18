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
        activeOpacity={activeOpacity}
        color={color}
        disabled={disabled}
        loading={loading}
        loadingElement={<LoadingIndicator color="yellow" size="small" />}
        // eslint-disable-next-line no-console
        onPress={() => console.log(`press loading button`)}
        size={size}
        style={{margin: 4}}
        type={type}
      />
    </StorySection>
  );
}

export default Loading;
