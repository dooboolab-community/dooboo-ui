# GiftedChat

> [GiftedChat] component contains essential features to be implemented in `Chat` screen.

![gifted_chat](https://user-images.githubusercontent.com/27461460/69912933-218ef400-1474-11ea-9e89-c634be770927.gif)

## Props

|                    | necessary | types               | default |
| ------------------ | --------- | ------------------- | ------- |
| chats              |           | any[]               |         |
| borderColor        |           | string              |         |
| backgroundColor    |           | string              |         |
| fontColor          |           | string              |         |
| keyboardOffset     |           | number              |         |
| renderItem         |           | ListRenderItem<any> |         |
| ListEmptyComponent |           | JSX.Element         |         |
| renderViewMenu     |           | () => JSX.Element   |         |
| optionView         |           | JSX.Element         |         |
| onChangeMessage    |           | Function            |         |
| placeholder        |           | string              |         |
| placeholderColor   |           | string              |         |
| renderSendButton   |           | () => JSX.Element   |         |

## Installation

```sh
yarn add dooboo-ui
```

or

```sh
yarn add @dooboo-ui/gifted-chat
```

## Getting started

- Import

  ```javascript
  import {GiftedChat} from 'dooboo-ui';
  ```

- Usage

  ```javascript
  import { Image, Platform, TouchableOpacity, View } from 'react-native';
  import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  import React, { useState } from 'react';
  import styled, {
    DefaultTheme,
    ThemeProps,
  } from '@emotion/native';

  import Button from '../shared/Button';
  import { Chat } from '../../types';
  import ChatListItem from '../shared/ChatListItem';
  import Constants from 'expo-constants';
  import EmptyListItem from '../shared/EmptyListItem';
  import GiftedChat from '../shared/GiftedChat';
  import { Header } from 'react-navigation-stack';
  import { IC_SMILE } from '../../utils/Icons';
  import { Ionicons } from '@expo/vector-icons';
  import { getString } from '../../../STRINGS';

  const StyledContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }): string => theme.background};
    flex-direction: column;
    align-items: center;
  `;

  interface Props extends ThemeProps<DefaultTheme> {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }

  interface State {
    loading: boolean;
    showMenu: boolean;
    message: string;
    chats: Chat[];
  }

  function Screen(props: Props): JSX.Element {
    const { theme } = props;

    const [isSending, setIsSending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [chats, setChats] = useState<Chat[]>([
      {
        id: '',
        sender: {
          uid: '0',
          displayName: 'sender111',
          thumbURL: '',
          photoURL: '',
          statusMsg: '',
        },
        message: 'hello1',
      },
      {
        id: '',
        sender: {
          uid: '2',
          displayName: 'sender111',
          thumbURL: '',
          photoURL: '',
          statusMsg: '',
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
          uid: '0',
          displayName: 'sender111',
          thumbURL: '',
          photoURL: '',
          statusMsg: '',
        },
        message: 'hello',
      },
      {
        id: '',
        sender: {
          uid: '0',
          displayName: 'sender111',
          thumbURL: '',
          photoURL: '',
          statusMsg: '',
        },
        message: 'hello2',
      },
    ]);

    const onSubmit = (): void => {
      setIsSending(true);
    };

    return (
      <StyledContainer>
        <GiftedChat
          chats={chats}
          borderColor={theme.lineColor}
          backgroundColor={theme.background}
          fontColor={theme.fontColor}
          keyboardOffset={Constants.statusBarHeight + Header.HEIGHT}
          message={message}
          placeholder={getString('WRITE_MESSAGE')}
          placeholderColor={theme.status}
          onChangeMessage={(text: string): void => setMessage(text)}
          renderItem={({
            item,
            index,
          }: {
            item: Chat;
            index: number;
          }): JSX.Element => {
            return (
              <ChatListItem
                prevItem={index > 0 ? chats[index - 1] : undefined}
                item={item}
              />
            );
          }}
          optionView={
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={IC_SMILE}
            />
          }
          ListEmptyComponent={<EmptyListItem>{getString('NO_CONTENT')}</EmptyListItem>}
          renderViewMenu={(): JSX.Element => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 16,
                  marginTop: 2,
                  width: 60,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name="ios-camera"
                  size={36}
                  color={theme ? theme.fontColor : '#3d3d3d'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 16,
                  marginTop: 4,
                  width: 60,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name="md-images"
                  size={36}
                  color={theme ? theme.fontColor : '#3d3d3d'}
                />
              </TouchableOpacity>
            </View>
          )}
          renderSendButton={(): JSX.Element => (
            <Button
              testID="btn_chat"
              height={Platform.OS === 'android' ? 40 : undefined}
              loading={isSending}
              onPress={onSubmit}
            >
              {getString('SEND')}
            </Button>
          )}
        />
      </StyledContainer>
    );
  }

  export default Screen;

  ```
