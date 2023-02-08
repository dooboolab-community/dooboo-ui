import type {ButtonColorType, ButtonSizeType, ButtonType} from '../../../main';
import {boolean, number, select} from '@storybook/addon-knobs';

export function useButtonKnobs(): {
  type: ButtonType;
  color: ButtonColorType;
  size: ButtonSizeType;
  disabled: boolean;
  loading: boolean;
  activeOpacity: number;
} {
  const type = select<ButtonType>(
    'type',
    ['outlined', 'solid', 'text'],
    'solid',
  );

  const color = select<ButtonColorType>(
    'color',
    ['success', 'info', 'warning', 'danger', 'light', 'secondary'],
    'primary',
  );

  const size = select<ButtonSizeType>(
    'size',
    ['large', 'medium', 'small'],
    'medium',
  );

  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return {
    type,
    color,
    size,
    disabled,
    loading,
    activeOpacity,
  };
}
