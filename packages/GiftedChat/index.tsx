import React, {useEffect, useRef, useState} from 'react';
import type {BackHandlerStatic, ListRenderItem, TextInput} from 'react-native';
import {BackHandler, FlatList, Keyboard, Platform, View} from 'react-native';
import styled from '@emotion/native';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
`;

const StyledViewChat = styled.View`
  width: 100%;
  max-width: 100%;
  border-top-width: 0.3px;
  min-height: 56px;
  max-height: 56px;
  padding-right: 8px;
  padding-left: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const StyledInputChat = styled.TextInput`
  font-size: 14px;
  padding-left: 48px;
  padding-bottom: 4px;
`;

const StyledTouchMenu = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  height: 100%;
  min-width: 20px;
  justify-content: center;
`;

const StyledViewBottom = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const StyledViewMenu = styled.View<{height: number}>`
  flex-direction: row;
  flex-wrap: wrap;
  height: ${({height}): string => `${height}px`};
`;

interface Props<T> {
  chats?: T[];
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  onEndReached?: () => void;
  keyboardOffset?: number;
  renderItem: ListRenderItem<T>;
  optionView?: JSX.Element;
  ListEmptyComponent?:
    | React.ComponentType<any>
    | React.JSX.Element
    | null
    | undefined;
  renderViewMenu?: () => JSX.Element;
  message?: string;
  onChangeMessage?: (text: string) => void;
  placeholder?: string;
  renderSendButton?: () => JSX.Element;
}

function Shared<T>({
  chats = [],
  borderColor,
  backgroundColor,
  fontColor,
  keyboardOffset,
  renderItem,
  ListEmptyComponent,
  renderViewMenu,
  optionView,
  message,
  onChangeMessage,
  placeholder,
  renderSendButton,
  onEndReached,
}: Props<T>): JSX.Element {
  const input1 = useRef<TextInput>();
  const input2 = useRef<TextInput>();

  const [keyboardHeight, setKeyboardHeight] = useState(258);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  const backHandler = useRef<BackHandlerStatic>(BackHandler);
  const keyboard = useRef(Keyboard);

  useEffect(() => {
    if (showMenu) {
      Keyboard.dismiss();
    } else {
      if (!isFirstTime) {
        input1?.current?.focus();
      }

      setIsFirstTime(false);
    }
  }, [showMenu, isFirstTime]);

  useEffect(() => {
    const backHandlerListner = backHandler.current.addEventListener(
      'hardwareBackPress',
      (): boolean => {
        setShowMenu((show) => (show ? false : show));

        return false;
      },
    );

    const keyboardShowListener = keyboard.current.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      },
    );

    return (): void => {
      if (keyboardShowListener) {
        keyboardShowListener.remove();
      }

      if (backHandlerListner) {
        backHandlerListner.remove();
      }
    };
  }, []);

  return (
    <>
      <StyledKeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          default: undefined,
        })}
        keyboardVerticalOffset={keyboardOffset}
      >
        <FlatList
          ListEmptyComponent={ListEmptyComponent}
          ListHeaderComponent={
            <View style={{height: showMenu ? keyboardHeight + 80 : 28}} />
          }
          contentContainerStyle={
            chats.length === 0
              ? {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : null
          }
          data={chats}
          inverted
          keyExtractor={(item, index): string => index.toString()}
          onEndReached={onEndReached}
          renderItem={renderItem}
          style={{alignSelf: 'stretch'}}
        />
        {!showMenu ? (
          <StyledViewChat
            style={{
              borderColor: borderColor,
              backgroundColor: backgroundColor,
            }}
          >
            <StyledInputChat
              defaultValue={message}
              multiline={true}
              onChangeText={onChangeMessage}
              onFocus={(): void => setShowMenu(false)}
              placeholder={placeholder}
              // @ts-ignore
              ref={input1}
              style={{
                flexGrow: 1,
                flexShrink: 1,
                paddingTop: 5,
                paddingBottom: 5,
                marginRight: 10,
                color: fontColor,
                backgroundColor: backgroundColor,
              }}
              testID="input-chat"
              value={message}
            />
            <StyledTouchMenu
              onPress={(): void => {
                Keyboard.dismiss();
                setShowMenu(true);
              }}
              testID="touch-menu"
            >
              {/* @ts-ignore */}
              {optionView}
            </StyledTouchMenu>
            <View
              style={{
                flexGrow: 0,
                flexShrink: 0,
                marginVertical: 8,
              }}
            >
              {/* @ts-ignore */}
              {renderSendButton?.()}
            </View>
          </StyledViewChat>
        ) : null}
      </StyledKeyboardAvoidingView>
      {showMenu ? (
        <StyledViewBottom>
          <StyledViewChat
            style={{
              borderColor: borderColor,
              backgroundColor: backgroundColor,
            }}
          >
            <StyledInputChat
              defaultValue={message}
              multiline={true}
              onFocus={(): void => setShowMenu(false)}
              placeholder={placeholder}
              // @ts-ignore
              ref={input2}
              style={{
                color: fontColor,
                backgroundColor: backgroundColor,
                flexGrow: 1,
                flexShrink: 1,
              }}
              value={message}
            />
            <StyledTouchMenu
              onPress={(): void => setShowMenu(false)}
              testID="touch-menu"
            >
              {/* @ts-ignore */}
              {optionView}
            </StyledTouchMenu>
            <View
              style={{
                position: 'absolute',
                right: 8,
              }}
            >
              {/* @ts-ignore */}
              {renderSendButton?.()}
            </View>
          </StyledViewChat>
          <StyledViewMenu
            height={keyboardHeight}
            style={{
              backgroundColor: backgroundColor,
            }}
            testID="view-menu"
          >
            {/* @ts-ignore */}
            {renderViewMenu?.()}
          </StyledViewMenu>
        </StyledViewBottom>
      ) : null}
    </>
  );
}

Shared.defaultProps = {
  chats: [],
  keyboardOffset: 0,
  optionView: <View />,
  ListEmptyComponent: <View />,
  renderItem: (): JSX.Element => <View />,
  renderViewMenu: (): JSX.Element => <View />,
  message: '',
  onChangeMessage: (): void => {},
  placeholder: '',
  renderSendButton: (): JSX.Element => <View />,
};

export default Shared;
