import type {ComponentMeta, ComponentStory} from '@storybook/react-native';

import {EditText as EditTextComponent} from '../../main';
import React from 'react';
import {renderStory} from '../Common';

const EditTextMeta: ComponentMeta<typeof EditTextComponent> = {
  title: 'EditText',
  component: EditTextComponent,
  argTypes: {
    onChange: {action: 'change text'},
  },
  args: {
    label: 'Username',
    value: '',
  },
};

export default EditTextMeta;

type EditTextStory = ComponentStory<typeof EditTextComponent>;

export const Basic: EditTextStory = (args) =>
  renderStory(<EditTextComponent {...args} />);
