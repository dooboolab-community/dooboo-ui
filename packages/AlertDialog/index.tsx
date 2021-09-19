import React, {useState} from 'react';
import Modal, {ModalProps} from 'react-native-modalbox';
import styled from '@emotion/native';

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

interface ButtonTypeProps {
  isAdditional?: boolean;
}

interface OnPressButtonProps {
  onPress: VoidFunction;
}

interface Props {
  isOpen?: boolean;
  type?: 'alert' | 'confirm' | 'prompt';
  title?: string;
  content?: string;
  style?: ModalProps['style'];
  backdropOpacity?: number;
  backdropPressToClose?: boolean;
  renderPrimaryButton?: (onPress: VoidFunction) => React.ReactElement;
  renderAdditionalButton?: (onPress: VoidFunction) => React.ReactElement;
  onPress: (result: boolean | string | null) => void;
}

type VoidFunction = () => void;

const PrimaryButton: React.FC<OnPressButtonProps> = ({onPress}) => (
  <ModalButton onPress={onPress}>
    <ButtonText>OK</ButtonText>
  </ModalButton>
);

const AdditionalButton: React.FC<OnPressButtonProps> = ({onPress}) => (
  <ModalButton isAdditional onPress={onPress}>
    <ButtonText isAdditional>CANCEL</ButtonText>
  </ModalButton>
);

const AlertDialog = React.forwardRef<Modal, Props>(
  (
    {
      isOpen = false,
      type = 'alert',
      title,
      content,
      style = {},
      backdropOpacity = 0.5,
      backdropPressToClose = true,
      renderPrimaryButton = (onPress) => <PrimaryButton onPress={onPress} />,
      renderAdditionalButton = (onPress) => (
        <AdditionalButton onPress={onPress} />
      ),
      onPress,
    },
    ref,
  ) => {
    const [input, setInput] = useState('');

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
        {type === 'alert' && renderPrimaryButton(() => onPress(true))}
        {type === 'confirm' && (
          <>
            {renderAdditionalButton(() => onPress(false))}
            {renderPrimaryButton(() => onPress(true))}
          </>
        )}
        {type === 'prompt' && (
          <>
            {renderAdditionalButton(() => {
              onPress(null);
              setInput('');
            })}
            {renderPrimaryButton(() => {
              onPress(input);
              setInput('');
            })}
          </>
        )}
      </Modal>
    );
  },
);

export default AlertDialog;
