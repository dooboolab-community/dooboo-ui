import type {ComponentMeta, ComponentStory} from '@storybook/react-native';

import {Button as ButtonComponent} from '../../main';
import React from 'react';
import {renderStory} from '../Common';

const ButtonMeta: ComponentMeta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello world',
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof ButtonComponent>;

export const Basic: ButtonStory = (args) =>
  renderStory(<ButtonComponent {...args} />);
