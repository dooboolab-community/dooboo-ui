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
  background-color: ${({isAdditional}) =>
    isAdditional ? 'transparent' : 'black'};
  margin-bottom: ${({isAdditional}) => (isAdditional ? '16px' : '0px')}; ;
`;

const ButtonText = styled.Text<ButtonTypeProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${({isAdditional}) => (isAdditional ? 'black' : 'white')}; ;
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
  style?: ModalProps['style'];
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
      style = {},
      styles = {},
      backdropOpacity = 0.5,
      backdropPressToClose = true,
      onPress,
    }: Props,
    ref: React.RefObject<Modal>,
  ) => {
    const [input, setInput] = useState('');

    const {button, buttonText} = styles ?? {};

    const AlertButton: React.FC = () => {
      return (
        <ModalButton style={button} onPress={() => onPress(true)}>
          <ButtonText style={buttonText}>OK</ButtonText>
        </ModalButton>
      );
    };

    const ConfirmButton: React.FC = () => {
      return (
        <>
          <ModalButton
            isAdditional
            style={button}
            onPress={() => onPress(false)}>
            <ButtonText isAdditional style={buttonText}>
              CANCEL
            </ButtonText>
          </ModalButton>
          <ModalButton style={button} onPress={() => onPress(true)}>
            <ButtonText style={buttonText}>OK</ButtonText>
          </ModalButton>
        </>
      );
    };

    const PromptButton: React.FC = () => {
      return (
        <>
          <ModalButton
            isAdditional
            style={button}
            onPress={() => {
              onPress(null);
              setInput('');
            }}>
            <ButtonText isAdditional style={buttonText}>
              CANCEL
            </ButtonText>
          </ModalButton>
          <ModalButton
            style={button}
            onPress={() => {
              onPress(input);
              setInput('');
            }}>
            <ButtonText style={buttonText}>OK</ButtonText>
          </ModalButton>
        </>
      );
    };

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
          style,
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
        {type === 'alert' && <AlertButton />}
        {type === 'confirm' && <ConfirmButton />}
        {type === 'prompt' && <PromptButton />}
      </Modal>
    );
  },
);

export default AlertDialog;
