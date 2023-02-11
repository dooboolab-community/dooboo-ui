import type {ButtonColorType, ButtonGroupProps} from '../../../main';
import {useDooboo} from '../../../main';
import {number, select} from '@storybook/addon-knobs';

export function useButtonGroupKnobs(): Pick<
  ButtonGroupProps,
  'styles' | 'borderStyle'
> {
  const {theme} = useDooboo();

  const paddingHorizontal = number('paddingHorizontal', 24);

  const paddingVertical = number('paddingVertical', 12);

  const color = select<ButtonColorType>(
    'color',
    ['primary', 'success', 'info', 'warning', 'danger', 'light', 'secondary'],
    'primary',
  );

  return {
    styles: {
      selectedButton: {
        paddingHorizontal,
        paddingVertical,
        backgroundColor: theme.button[color].bg,
      },
      selectedText: {
        color: theme.button[color].text,
      },
      unselectedButton: {
        paddingHorizontal,
        paddingVertical,
      },
      unselectedText: {
        color: theme.button[color].bg,
      },
    },
    borderStyle: {
      color: theme.button[color].bg,
    },
  };
}
