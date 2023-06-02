import type {ReactElement} from 'react';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Modal, Platform, StyleSheet} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';

import type {ButtonColorType} from '../../uis/Button';
import {Button} from '../../uis/Button';
import {Icon} from '../../uis/Icon';

import {SnackbarTimer} from './const';

const Container = styled.View`
  flex: 1;
  align-self: stretch;

  flex-direction: row;
  justify-content: center;
`;

const SnackbarContainer = styled.SafeAreaView<{color: ButtonColorType}>`
  background-color: ${({theme, color}) => theme.button[color].bg};
  border-radius: 8px;
  margin-bottom: 52px;
  margin-left: 12px;
  margin-right: 12px;
  align-self: flex-end;

  flex-direction: row;
  align-items: center;
`;

const ActionContainer = styled.View`
  margin-right: 4px;
`;

const SnackbarText = styled.Text<{color: ButtonColorType}>`
  font-family: Pretendard;
  color: ${({theme, color}) => theme.button[color].text};
  flex: 1;
  padding: 12px;
`;

export type SnackbarProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  ref: React.MutableRefObject<SnackbarContext>;
};

export type SnackbarStyles = {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  actionContainer?: StyleProp<ViewStyle>;
  actionText?: StyleProp<TextStyle>;
};

export type SnackbarOptions = {
  color?: ButtonColorType;
  styles?: SnackbarStyles;
  text?: string;
  actionText?: string;
  timer?: SnackbarTimer | number;
};

export type SnackbarContext = {
  open(snackbarOptions?: SnackbarOptions): void;
  close(): void;
};

let timer: NodeJS.Timeout | null = null;

function clearTimer(): void {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function Snackbar(
  {style}: SnackbarProps,
  ref: React.Ref<SnackbarContext>,
): ReactElement {
  const [options, setOptions] = useState<SnackbarOptions | null>(null);
  const [visible, setVisible] = useState(false);
  const {theme} = useTheme();

  useImperativeHandle(ref, () => ({
    open: (snackbarOptions) => {
      clearTimer();
      setVisible(true);
      if (snackbarOptions) {
        setOptions(snackbarOptions);
      }

      timer = setTimeout(() => {
        setVisible(false);
        clearTimer();
      }, snackbarOptions?.timer ?? SnackbarTimer.SHORT);
    },
    close: () => {
      setVisible(false);
      setOptions(null);
    },
  }));

  const {text, styles, actionText, color = 'primary'} = options ?? {};

  const SnackbarContent = (
    <Container>
      <SnackbarContainer
        color={color}
        style={StyleSheet.flatten([
          Platform.OS !== 'web' && {
            shadowOffset: {width: 0, height: 4},
            shadowColor: theme.text.basic,
          },
          styles?.container,
        ])}
      >
        <SnackbarText
          color={color}
          style={StyleSheet.flatten([
            css`
              font-family: 'Pretendard';
              color: ${theme.button[color].text};
            `,
            styles?.text,
          ])}
        >
          {text}
        </SnackbarText>
        <ActionContainer style={styles?.actionContainer}>
          {actionText ? (
            <Button
              type="text"
              onPress={() => setVisible(false)}
              styles={{
                text: StyleSheet.flatten([
                  css`
                    font-family: 'Pretendard';
                    color: ${theme.button[color].text};
                  `,
                  styles?.actionText,
                ]),
              }}
              text={actionText}
            />
          ) : (
            <Button
              type="text"
              onPress={() => setVisible(false)}
              text={<Icon name="X" color={theme.button[color].text} />}
            />
          )}
        </ActionContainer>
      </SnackbarContainer>
    </Container>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      style={[
        css`
          flex: 1;
          align-self: stretch;
        `,
        style,
      ]}
    >
      {SnackbarContent}
    </Modal>
  );
}

export default forwardRef<SnackbarContext, SnackbarProps>(Snackbar);
