import React, {useState} from 'react';
import {useTheme, withTheme} from '@dooboo-ui/theme';

import type {DoobooTheme} from '@dooboo-ui/theme';
import Modal from 'react-native-modalbox';
import type {ModalProps} from 'react-native-modalbox';
import styled from '@emotion/native';

/**
 * !Caveat:
 * Currently, it is hard to make the typing work in `packages` due to
 * collisions on lerna workspace symlinking and emotion styled package.
 *
 * Forcing types to work by declaring `DoobooThemeProp` manually.
 */
type DoobooThemeProp = {theme?: DoobooTheme};

const ModalButton = styled.TouchableOpacity<ButtonTypeProps & DoobooThemeProp>`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme}) => theme.text.default};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({isAdditional, theme}) =>
    isAdditional ? 'transparent' : theme.role.primary};
  margin-bottom: ${({isAdditional}) => (isAdditional ? '16px' : '0px')}; ;
`;

const ButtonText = styled.Text<ButtonTypeProps & DoobooThemeProp>`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme, isAdditional}) =>
    isAdditional ? theme.text.default : theme.bg.default};
`;

const ModalInput = styled.TextInput<DoobooThemeProp>`
  height: 40px;
  margin-bottom: 16px;
  padding: 4px 12px;
  font-size: 14px;
  border: 1px solid ${({theme}) => theme.text.default};
  color: ${({theme}) => theme.text.default};
`;

const Title = styled.Text<DoobooThemeProp>`
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme}) => theme.text.default};
`;

const Content = styled.Text<DoobooThemeProp>`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${({theme}) => theme.text.default};
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
    const {theme} = useTheme();

    return (
      <Modal
        isOpen={isOpen}
        style={[
          {
            width: '80%',
            height: 'auto',
            borderRadius: 40,
            backgroundColor: theme.bg.default,
            shadowOffset: {width: 0, height: 4},
            shadowColor: theme.text.default,
            padding: 20,
          },
          style,
        ]}
        position={'center'}
        ref={ref}
        backdropOpacity={backdropOpacity}
        backdropPressToClose={backdropPressToClose}
      >
        {title && <Title>{title}</Title>}
        {content && <Content>{content}</Content>}

        {type === 'alert' && renderPrimaryButton(() => onPress(true))}
        {type === 'confirm' && (
          <>
            {renderAdditionalButton(() => onPress(false))}
            {renderPrimaryButton(() => onPress(true))}
          </>
        )}
        {type === 'prompt' && (
          <>
            <ModalInput value={input} onChangeText={setInput} />
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

export default withTheme(AlertDialog);
