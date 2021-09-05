import React, {ReactElement, useState} from 'react';
import Modal from 'react-native-modalbox';
import {TouchableOpacity} from 'react-native';

import AlertDialog from '../../../packages/AlertDialog/index';
import {ContainerDeco} from '../../../storybook/decorators';
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

  const alertRef: React.RefObject<Modal> = React.createRef();
  const confirmRef: React.RefObject<Modal> = React.createRef();
  const promptRef: React.RefObject<Modal> = React.createRef();

  const styles = {
    modal: {maxWidth: 450},
  };

  const ExampleButton: React.FC<ExampleButtonProps> = ({
    title,
    onPress,
  }: ExampleButtonProps) => (
    <TouchableOpacity onPress={onPress}>
      <ExampleText>{title}</ExampleText>
    </TouchableOpacity>
  );

  const renderAlert = (
    <>
      <ExampleButton
        title={'Alert'}
        onPress={() => {
          alertRef.current?.open();
        }}
      />
      <AlertDialog
        ref={alertRef}
        styles={styles}
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

  const renderConfirm = (
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
        styles={styles}
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

  const renderPrompt = (
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
        styles={styles}
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

  return (
    <Container>
      {renderAlert}
      {renderConfirm}
      {renderPrompt}
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

export const toStorybook = (): ReactElement => (
  <>
    <Dialog />
  </>
);

toStorybook.story = {
  name: 'dialog',
};

/**
 * Below are stories for app
 */

storiesOf('AlertDialog', module)
  .addDecorator(ContainerDeco)
  .add('dialog', () => (
    <>
      <Dialog />
    </>
  ));
