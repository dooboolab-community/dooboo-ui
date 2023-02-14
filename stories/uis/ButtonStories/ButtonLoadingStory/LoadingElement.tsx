import {Button, LoadingIndicator} from '../../../../main';
import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {boolean, number, select} from '@storybook/addon-knobs';
import {buttonColors, buttonSizes, buttonTypes} from '../../const';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function Loading(): ReactElement {
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
