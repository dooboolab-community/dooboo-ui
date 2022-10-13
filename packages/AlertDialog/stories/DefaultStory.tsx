import React, {useRef, useState} from 'react';

import AlertDialog from '../';
import type Modal from 'react-native-modalbox';
import {TouchableOpacity} from 'react-native';
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

interface ExampleButtonProps {
  title: string;
  onPress: () => void;
}

const modalStyle = {maxWidth: 450};

const ExampleButton: React.FC<ExampleButtonProps> = ({
  title,
  onPress,
}: ExampleButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <ExampleText>{title}</ExampleText>
  </TouchableOpacity>
);

const AlertExample: React.FC<{
  setDialogResult: React.Dispatch<
    React.SetStateAction<string | boolean | null>
  >;
}> = ({setDialogResult}) => {
  const alertRef = useRef<Modal>(null);

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

const ConfirmExample: React.FC<{
  setDialogResult: React.Dispatch<
    React.SetStateAction<string | boolean | null>
  >;
}> = ({setDialogResult}) => {
  const confirmRef = useRef<Modal>(null);

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

const PromptExample: React.FC<{
  setDialogResult: React.Dispatch<
    React.SetStateAction<string | boolean | null>
  >;
}> = ({setDialogResult}) => {
  const promptRef = useRef<Modal>(null);

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

function Dialog(): React.ReactElement {
  const [dialogResult, setDialogResult] = useState<string | boolean | null>('');

  return (
    <Container>
      <AlertExample setDialogResult={setDialogResult} />
      <ConfirmExample setDialogResult={setDialogResult} />
      <PromptExample setDialogResult={setDialogResult} />
      <ResultText>{`Dialog result : ${dialogResult}`}</ResultText>
    </Container>
  );
}

export default Dialog;
