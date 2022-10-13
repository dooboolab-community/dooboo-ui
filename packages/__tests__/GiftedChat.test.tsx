import 'react-native';

import * as React from 'react';

import type {RenderAPI} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';

import GiftedChatInput from '../GiftedChat';
import {createTestProps} from '../../test/testUtils';

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

    expect(json).toMatchSnapshot();
  });

  // describe('interactions', () => {
  //   beforeEach(() => {
  //     testingLib = render(component);
  //   });

  //   it('should call [setShowMenu] when focused', () => {
  //     const textInput = testingLib.getByTestId('input-chat');

  //     textInput.props.onFocus();
  //   });

  //   it('should [showMenu] when touch pressed', () => {
  //     let touchMenu = testingLib.getByTestId('touch-menu');

  //     fireEvent.press(touchMenu);

  //     touchMenu = testingLib.getByTestId('touch-menu');
  //     fireEvent.press(touchMenu);
  //   });

  //   it('should call [setShowMenu] when focused again', () => {
  //     const touchMenu = testingLib.getByTestId('touch-menu');

  //     fireEvent.press(touchMenu);
  //   });

  //   it('should invoke changeText event handler when message changed', () => {
  //     const textInput = testingLib.getByTestId('input-chat');

  //     jest.runAllTimers();
  //     fireEvent.changeText(textInput, 'chat test');
  //     // TODO: expect should pass
  //     // expect(textInput.props.value).toEqual('chat test');
  //   });
  // });
});
