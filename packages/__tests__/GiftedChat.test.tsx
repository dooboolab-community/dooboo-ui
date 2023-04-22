import 'react-native';

import * as React from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';

import {createTestProps} from '../../test/testUtils';
import GiftedChatInput from '../GiftedChat';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

jest.useFakeTimers();

describe('[GiftedChatInput] render', () => {
  beforeEach(() => {
    props = createTestProps({
      messages: [
        {
          id: '',
          sender: {
            id: '0',
            nickname: 'sender111',
            thumbURL: '',
            photoURL: '',
            statusMessage: '',
          },
          message: 'hello1',
        },
        {
          id: '',
          sender: {
            id: '2',
            nickname: 'sender111',
            thumbURL: '',
            photoURL: '',
            statusMessage: '',
          },
          message:
            'Hello2. This is long message. This is long message.This is long message.' +
            'This is long message. This is long message. This is long message.' +
            'This is long message. This is long message.' +
            'This is long message. This is long message. This is long message.',
        },
        {
          id: '',
          sender: {
            id: '0',
            nickname: 'sender111',
            thumbURL: '',
            photoURL: '',
            statusMessage: '',
          },
          message: 'hello',
        },
      ],
    });

    component = <GiftedChatInput {...props} />;
  });

  it('renders without crashing', () => {
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
