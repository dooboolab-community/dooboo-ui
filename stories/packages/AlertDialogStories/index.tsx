import React, {ReactElement, useRef, useState} from 'react';
import Modal from 'react-native-modalbox';
import {TouchableOpacity} from 'react-native';

import AlertDialog from '../../../packages/AlertDialog/lib';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled.Text`
  font-size: 16px;
  margin-top: 24px;
`;

const ExampleText = styled.Text`
  font-size: 20px;
  color: cornflowerblue;
  margin-bottom: 15px;
`;

function Dialog(): React.ReactElement {
  const [dialogResult, setDialogResult] = useState<string | boolean | null>('');

  const alertRef = useRef<Modal>(null);
  const confirmRef = useRef<Modal>(null);
  const promptRef = useRef<Modal>(null);

  const modalStyle = {maxWidth: 450};

  const ExampleButton: React.FC<ExampleButtonProps> = ({
    title,
    onPress,
  }: ExampleButtonProps) => (
    <TouchableOpacity onPress={onPress}>
      <ExampleText>{title}</ExampleText>
    </TouchableOpacity>
  );

  const AlertExample: React.FC = () => {
    return (
      <>
        <ExampleButton
          title={'Alert'}
          onPress={() => {
            alertRef.current?.open();
          }}
        />
        <AlertDialog
          ref={alertRef}
          style={modalStyle}
          title={'Dialogue Title'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          onPress={(result) => {
            setDialogResult(result);
            alertRef.current?.close();
          }}
        />
      </>
    );
  };

  const ConfirmExample: React.FC = () => {
    return (
      <>
        <ExampleButton
          title={'Confirm'}
          onPress={() => {
            confirmRef.current?.open();
          }}
        />
        <AlertDialog
          type={'confirm'}
          ref={confirmRef}
          style={modalStyle}
          title={'Dialogue Title'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          onPress={(result) => {
            setDialogResult(result);
            confirmRef.current?.close();
          }}
        />
      </>
    );
  };

  const PromptExample: React.FC = () => {
    return (
      <>
        <ExampleButton
          title={'Prompt'}
          onPress={() => {
            promptRef.current?.open();
          }}
        />
        <AlertDialog
          type={'prompt'}
          ref={promptRef}
          style={modalStyle}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          onPress={(result) => {
            setDialogResult(result);
            promptRef.current?.close();
          }}
        />
      </>
    );
  };

  return (
    <Container>
      <AlertExample />
      <ConfirmExample />
      <PromptExample />
      <ResultText>{`Dialog result : ${dialogResult}`}</ResultText>
    </Container>
  );
}

interface ExampleButtonProps {
  title: string;
  onPress: () => void;
}

/**
 * Below are stories for web
 */
export default {
  title: 'AlertDialog',
};

export const toStorybook = (): ReactElement => <Dialog />;

toStorybook.story = {
  name: 'dialog',
};

/**
 * Below are stories for app
 */

storiesOf('AlertDialog', module).add('dialog', () => <Dialog />);
