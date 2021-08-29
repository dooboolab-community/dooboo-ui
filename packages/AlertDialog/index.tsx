import React, {useState} from 'react';
import Modal from 'react-native-modalbox';
import styled from '@emotion/native';

import {StyleProp, ViewStyle} from 'react-native';

const ContentContainer = styled.SafeAreaView`
  flex-grow: 1;
  flex-shrink: 1;
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

const ModalInput = styled.TextInput<ColorProps>`
  height: 40px;
  margin-top: 20px;
  padding: 4px;
  font-size: 14px;
  border: 1px solid ${(props) => props.color};
`;

const ButtonText = styled.Text<ColorProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

type Styles = {
  modalContainer?: StyleProp<ViewStyle>;
};

interface Props {
  isOpen?: boolean;
  type?: 'alert' | 'confirm' | 'prompt';
  color?: string;
  styles?: Styles;
  backdropOpacity?: number;
  backdropPressToClose?: boolean;
  children?: React.ReactNode;
  onPress: (result: boolean | string | null) => void;
}

interface ColorProps {
  color: string;
}

const AlertDialog = React.forwardRef(
  (
    {
      isOpen = false,
      type = 'alert',
      color = '#000000',
      styles = {},
      backdropOpacity = 0.5,
      backdropPressToClose = true,
      children,
      onPress,
    }: Props,
    ref: React.RefObject<unknown>,
  ) => {
    const [input, setInput] = useState('');

    const modalStyles = {
      modal: [
        {
          borderRadius: 4,
        },
        styles?.modalContainer,
      ],
    };

    const renderAlert = (
      <ModalButton onPress={() => onPress(true)}>
        <ButtonText color={color}>OK</ButtonText>
      </ModalButton>
    );

    const renderConfirm = (
      <>
        <ModalButton onPress={() => onPress(false)}>
          <ButtonText color={color}>CANCEL</ButtonText>
        </ModalButton>
        <ModalButton onPress={() => onPress(true)}>
          <ButtonText color={color}>OK</ButtonText>
        </ModalButton>
      </>
    );

    const renderPrompt = (
      <>
        <ModalButton
          onPress={() => {
            onPress(null);
            setInput('');
          }}>
          <ButtonText color={color}>CANCEL</ButtonText>
        </ModalButton>
        <ModalButton
          onPress={() => {
            onPress(input);
            setInput('');
          }}>
          <ButtonText color={color}>OK</ButtonText>
        </ModalButton>
      </>
    );

    return (
      <>
        <Modal
          isOpen={isOpen}
          style={modalStyles.modal}
          position={'center'}
          ref={ref}
          backdropOpacity={backdropOpacity}
          backdropPressToClose={backdropPressToClose}>
          <ContentContainer>
            {children}
            {type === 'prompt' && (
              <ModalInput value={input} onChangeText={setInput} color={color} />
            )}
          </ContentContainer>
          <ButtonContainer>
            {type === 'alert' && renderAlert}
            {type === 'confirm' && renderConfirm}
            {type === 'prompt' && renderPrompt}
          </ButtonContainer>
        </Modal>
      </>
    );
  },
);

export default AlertDialog;
