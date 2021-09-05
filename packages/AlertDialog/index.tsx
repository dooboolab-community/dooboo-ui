import React, {useState} from 'react';
import Modal, {ModalProps} from 'react-native-modalbox';
import styled from '@emotion/native';

import {StyleProp, ViewStyle, TextStyle} from 'react-native';

const ModalButton = styled.TouchableOpacity<ButtonTypeProps>`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isAdditional ? 'transparent' : 'black'};
  margin-bottom: ${(props) => (props.isAdditional ? '16px' : '0px')}; ;
`;

const ButtonText = styled.Text<ButtonTypeProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isAdditional ? 'black' : 'white')}; ;
`;

const ModalInput = styled.TextInput`
  height: 40px;
  margin-bottom: 16px;
  padding: 4px;
  font-size: 14px;
  border: 1px solid black;
`;

const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

const Content = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;

type Styles = {
  modal?: ModalProps['style'];
  button?: StyleProp<ViewStyle>;
  buttonText?: StyleProp<TextStyle>;
};

interface ButtonTypeProps {
  isAdditional?: boolean;
}

interface Props {
  isOpen?: boolean;
  type?: 'alert' | 'confirm' | 'prompt';
  title?: string;
  content?: string;
  styles?: Styles;
  backdropOpacity?: number;
  backdropPressToClose?: boolean;
  onPress: (result: boolean | string | null) => void;
}

const AlertDialog = React.forwardRef(
  (
    {
      isOpen = false,
      type = 'alert',
      title,
      content,
      styles = {},
      backdropOpacity = 0.5,
      backdropPressToClose = true,
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
        <ModalButton
          isAdditional
          style={styles?.button}
          onPress={() => onPress(false)}>
          <ButtonText isAdditional style={styles?.buttonText}>
            CANCEL
          </ButtonText>
        </ModalButton>
        <ModalButton style={styles?.button} onPress={() => onPress(true)}>
          <ButtonText style={styles?.buttonText}>OK</ButtonText>
        </ModalButton>
      </>
    );

    const renderPrompt = (
      <>
        <ModalButton
          isAdditional
          style={styles?.button}
          onPress={() => {
            onPress(null);
            setInput('');
          }}>
          <ButtonText isAdditional style={styles?.buttonText}>
            CANCEL
          </ButtonText>
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
        style={[
          {
            width: '80%',
            height: 'auto',
            borderRadius: 40,
            backgroundColor: '#EDEDED',
            shadowOffset: {width: 0, height: 4},
            shadowColor: 'black',
            padding: 20,
          },
          styles?.modal,
        ]}
        position={'center'}
        ref={ref}
        backdropOpacity={backdropOpacity}
        backdropPressToClose={backdropPressToClose}>
        {title && <Title>{title}</Title>}
        {content && <Content>{content}</Content>}
        {type === 'prompt' && (
          <ModalInput value={input} onChangeText={setInput} />
        )}
        {type === 'alert' && renderAlert}
        {type === 'confirm' && renderConfirm}
        {type === 'prompt' && renderPrompt}
      </Modal>
    );
  },
);

export default AlertDialog;
