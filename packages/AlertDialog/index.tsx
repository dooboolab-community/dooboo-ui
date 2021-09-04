import React, {useState} from 'react';
import Modal, {ModalProps} from 'react-native-modalbox';
import styled from '@emotion/native';

import {StyleProp, ViewStyle, TextStyle} from 'react-native';

const ContentContainer = styled.SafeAreaView`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  justify-content: center;
  margin: 24px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin-bottom: 12px;
`;

const ModalButton = styled.TouchableOpacity`
  margin: 0px 8px;
  width: 80px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

const ModalInput = styled.TextInput`
  height: 40px;
  margin-top: 20px;
  padding: 4px;
  font-size: 14px;
  border: 1px solid black;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

type Styles = {
  modal?: ModalProps['style'];
  button?: StyleProp<ViewStyle>;
  buttonText?: StyleProp<TextStyle>;
};

interface Props {
  isOpen?: boolean;
  type?: 'alert' | 'confirm' | 'prompt';
  styles?: Styles;
  backdropOpacity?: number;
  backdropPressToClose?: boolean;
  children?: React.ReactNode;
  onPress: (result: boolean | string | null) => void;
}

const AlertDialog = React.forwardRef(
  (
    {
      isOpen = false,
      type = 'alert',
      styles = {},
      backdropOpacity = 0.5,
      backdropPressToClose = true,
      children,
      onPress,
    }: Props,
    ref: React.RefObject<Modal>,
  ) => {
    const [input, setInput] = useState('');

    const renderAlert = (
      <ModalButton style={styles?.button} onPress={() => onPress(true)}>
        <ButtonText style={styles?.buttonText}>OK</ButtonText>
      </ModalButton>
    );

    const renderConfirm = (
      <>
        <ModalButton style={styles?.button} onPress={() => onPress(false)}>
          <ButtonText style={styles?.buttonText}>CANCEL</ButtonText>
        </ModalButton>
        <ModalButton style={styles?.button} onPress={() => onPress(true)}>
          <ButtonText style={styles?.buttonText}>OK</ButtonText>
        </ModalButton>
      </>
    );

    const renderPrompt = (
      <>
        <ModalButton
          style={styles?.button}
          onPress={() => {
            onPress(null);
            setInput('');
          }}>
          <ButtonText style={styles?.buttonText}>CANCEL</ButtonText>
        </ModalButton>
        <ModalButton
          style={styles?.button}
          onPress={() => {
            onPress(input);
            setInput('');
          }}>
          <ButtonText style={styles?.buttonText}>OK</ButtonText>
        </ModalButton>
      </>
    );

    return (
      <Modal
        isOpen={isOpen}
        style={[{borderRadius: 4}, styles.modal]}
        position={'center'}
        ref={ref}
        backdropOpacity={backdropOpacity}
        backdropPressToClose={backdropPressToClose}>
        <ContentContainer>
          {children}
          {type === 'prompt' && (
            <ModalInput value={input} onChangeText={setInput} />
          )}
        </ContentContainer>
        <ButtonContainer>
          {type === 'alert' && renderAlert}
          {type === 'confirm' && renderConfirm}
          {type === 'prompt' && renderPrompt}
        </ButtonContainer>
      </Modal>
    );
  },
);

export default AlertDialog;
